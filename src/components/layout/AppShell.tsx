"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const FloatingWhatsApp = dynamic(
  () =>
    import("@/components/shared/FloatingWhatsApp").then(
      (module) => module.FloatingWhatsApp
    ),
  { ssr: false }
);

interface AppShellProps {
  children: React.ReactNode;
}

/** Wrapping client-only layout chrome to keep the root layout server-rendered */
export function AppShell({ children }: AppShellProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
