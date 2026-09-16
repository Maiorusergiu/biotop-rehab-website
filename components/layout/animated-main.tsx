"use client";

import { useEffect, useRef, type ReactNode } from "react";

const revealSelectors = [
  ".hero-copy > *",
  ".hero-visual",
  ".section-heading",
  ".course-card",
  ".app-copy",
  ".phone-stage",
  ".roadmap",
  ".about-statement",
  ".team-card",
  ".contact-section > div",
  ".contact-form",
].join(", ");

export function AnimatedMain({ children }: { children: ReactNode }) {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement || !("IntersectionObserver" in window)) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const runningAnimations = new Set<Animation>();
    const revealedElements = new Set<HTMLElement>();

    function revealElement(element: HTMLElement) {
      element.dataset.revealed = "true";
      revealedElements.add(element);
      if (motionPreference.matches || !element.animate) return;

      const siblingIndex = Array.from(
        element.parentElement?.children ?? [],
      ).indexOf(element);
      const animation = element.animate(
        [
          { opacity: 0, translate: "0 18px" },
          { opacity: 1, translate: "0 0" },
        ],
        {
          duration: 650,
          delay: Math.min(Math.max(siblingIndex, 0) * 65, 195),
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "backwards",
        },
      );
      runningAnimations.add(animation);
      animation.onfinish = () => runningAnimations.delete(animation);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          revealElement(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08 },
    );

    function cancelRunningAnimations() {
      if (!motionPreference.matches) return;
      runningAnimations.forEach((animation) => animation.cancel());
      runningAnimations.clear();
    }

    // Content stays visible without JavaScript; only entering elements animate.
    mainElement
      .querySelectorAll<HTMLElement>(revealSelectors)
      .forEach((element) => {
        observer.observe(element);
      });
    motionPreference.addEventListener("change", cancelRunningAnimations);

    return () => {
      observer.disconnect();
      motionPreference.removeEventListener("change", cancelRunningAnimations);
      runningAnimations.forEach((animation) => animation.cancel());
      revealedElements.forEach((element) => delete element.dataset.revealed);
    };
  }, []);

  return (
    <main id="continut" ref={mainRef}>
      {children}
    </main>
  );
}
