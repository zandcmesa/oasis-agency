"use client";

import { useEffect, useState } from "react";
import { withBasePath } from "@/lib/utils";

export function HeroAtmosphere() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (prefersReducedMotion) {
    return (
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: `url(${withBasePath("/atmosphere/oasis-living-wall.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    );
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={withBasePath("/atmosphere/oasis-living-wall.jpg")}
      src={withBasePath("/atmosphere/oasis-living-wall-loop.mp4")}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none -z-10"
    />
  );
}
