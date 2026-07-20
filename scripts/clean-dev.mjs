import { execSync } from "node:child_process";
import { rmSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const nextDir = join(rootDir, ".next");

/** Stopping Next.js dev servers that may lock the .next folder on Windows */
function stopDevServers() {
  if (process.platform !== "win32") return;

  for (const port of [3000, 3001]) {
    try {
      const output = execSync(`netstat -ano | findstr ":${port}"`, {
        encoding: "utf8",
        stdio: ["pipe", "pipe", "ignore"],
      });

      const pids = new Set(
        output
          .split("\n")
          .map((line) => line.trim().split(/\s+/).pop())
          .filter((pid) => pid && /^\d+$/.test(pid))
      );

      for (const pid of pids) {
        try {
          execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" });
          console.log(`Stopped process ${pid} on port ${port}`);
        } catch {
          // Process may have already exited
        }
      }
    } catch {
      // No process listening on this port
    }
  }
}

/** Attempting to remove .next with graceful handling when files are locked */
function cleanNextCache() {
  if (!existsSync(nextDir)) {
    return true;
  }

  try {
    rmSync(nextDir, {
      recursive: true,
      force: true,
      maxRetries: 5,
      retryDelay: 500,
    });
    console.log("Removed .next cache");
    return true;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn("\nCould not delete .next — files are still locked.");
    console.warn("Open Task Manager, end any 'Node.js' processes, then run:");
    console.warn("  npm run dev:clean\n");
    console.warn(`Details: ${message}\n`);
    return false;
  }
}

stopDevServers();
cleanNextCache();

execSync("npx next dev --turbopack", {
  cwd: rootDir,
  stdio: "inherit",
  shell: true,
});
