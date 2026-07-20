"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NAVBAR_OFFSET = 96;
const HERO_SCROLL_THRESHOLD = 100;

/** Picking the last section whose top has crossed the navbar activation line */
function resolveActiveSection(sectionIds: readonly string[]): string | null {
  let activeId: string | null = null;

  for (const id of sectionIds) {
    const element = document.getElementById(id);
    if (!element) continue;

    const { top, bottom } = element.getBoundingClientRect();
    const hasEnteredViewport = top <= NAVBAR_OFFSET && bottom > NAVBAR_OFFSET;
    const hasScrolledPast = top <= NAVBAR_OFFSET;

    if (hasEnteredViewport || hasScrolledPast) {
      activeId = id;
    }
  }

  return activeId;
}

/** Syncing the URL hash with scroll position without adding history entries */
function syncUrlHash(activeId: string | null) {
  const { pathname, search, hash } = window.location;
  const currentHash = hash.replace("#", "");

  if (!activeId) {
    if (currentHash) {
      history.replaceState(null, "", `${pathname}${search}`);
    }
    return;
  }

  if (currentHash !== activeId) {
    history.replaceState(null, "", `${pathname}${search}#${activeId}`);
  }
}

/** Tracking the currently visible homepage section for navbar highlighting */
export function useActiveSection(sectionIds: readonly string[]): string | null {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const syncActiveSection = () => {
      const atHero = window.scrollY < HERO_SCROLL_THRESHOLD;

      if (atHero) {
        setActiveSection(null);
        syncUrlHash(null);
        return;
      }

      const resolved = resolveActiveSection(sectionIds);
      setActiveSection(resolved);
      syncUrlHash(resolved);
    };

    syncActiveSection();

    const observer = new IntersectionObserver(() => syncActiveSection(), {
      root: null,
      rootMargin: `-${NAVBAR_OFFSET}px 0px -50% 0px`,
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
    });

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    const onHashChange = () => {
      requestAnimationFrame(syncActiveSection);
    };

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("scroll", syncActiveSection, { passive: true });
    window.addEventListener("resize", syncActiveSection);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("scroll", syncActiveSection);
      window.removeEventListener("resize", syncActiveSection);
    };
  }, [pathname, sectionIds]);

  return activeSection;
}

/** Scrolling to the top of the homepage and clearing any section hash */
export function scrollToHomeTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.replaceState(null, "", window.location.pathname);
}
