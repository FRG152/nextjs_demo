"use client";

import { useLayoutEffect } from "react";

function applyStoredTheme() {
  try {
    const stored = localStorage.getItem("theme");
    const theme =
      stored ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch {}
}

function toggle() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  try {
    localStorage.setItem("theme", next);
  } catch {}
  document.documentElement.setAttribute("data-theme", next);
}

export default function ThemeToggle() {
  // Re-apply after React's Strict Mode dev remount clears it. No-op in production.
  useLayoutEffect(() => {
    applyStoredTheme();

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      let hasStoredTheme = false;
      try {
        hasStoredTheme = localStorage.getItem("theme") !== null;
      } catch {}
      if (!hasStoredTheme) applyStoredTheme();
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Cambiar tema"
      className="rounded-md border border-foreground/20 px-3 py-1 text-sm"
    >
      <span className="dark:hidden">🌙 Oscuro</span>
      <span className="hidden dark:inline">☀️ Claro</span>
    </button>
  );
}
