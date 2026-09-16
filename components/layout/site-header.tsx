"use client";
import { useState, useSyncExternalStore } from "react";
import { ArrowSVG } from "@/components/ui/arrow-svg";
import { BrandLogo } from "@/components/ui/brand-logo";

const navigationItems = [
  { href: "#acasa", label: "Acasă" },
  { href: "#cursuri", label: "Cursurile noastre" },
  { href: "#despre", label: "Despre noi" },
  { href: "#contact", label: "Contact" },
];

function subscribeToScroll(onScrollChange: () => void) {
  window.addEventListener("scroll", onScrollChange, { passive: true });
  return () => window.removeEventListener("scroll", onScrollChange);
}

function isPageScrolled() {
  return window.scrollY > 24;
}

function getInitialScrollState() {
  return false;
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHeaderCompact = useSyncExternalStore(
    subscribeToScroll,
    isPageScrolled,
    getInitialScrollState,
  );
  return (
    <>
      <a className="skip-link" href="#continut">
        Sari la conținut
      </a>
      <div className="site-header-space">
        <header
          className={`site-header${isHeaderCompact ? " is-compact" : ""}`}
        >
          <a className="brand" href="#acasa" aria-label="Biotop Rehab — Acasă">
            <BrandLogo />
            <span>
              biotop<span className="brand-secondary">rehab</span>
            </span>
          </a>
          <button
            className="menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "Închide ×" : "Meniu ☰"}
          </button>
          <nav
            id="main-navigation"
            className={isMenuOpen ? "navigation is-open" : "navigation"}
            aria-label="Navigare principală"
          >
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="button button-small"
              href="#aplicatie"
              onClick={() => setIsMenuOpen(false)}
            >
              Descoperă aplicația <ArrowSVG diagonal />
            </a>
          </nav>
        </header>
      </div>
    </>
  );
}
