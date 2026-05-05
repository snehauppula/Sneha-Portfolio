"use client";

import dynamic from "next/dynamic";

/** Loads Three.js canvas only on the client — keeps it out of the server bundle path */
export const HeroBackground = dynamic(
  () => import("./hero-background").then((m) => m.HeroBackground),
  { ssr: false, loading: () => null },
);
