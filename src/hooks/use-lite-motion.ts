import { useEffect, useState } from "react";

/**
 * Returns true when heavy decorative animations (blurred orbs, particles,
 * parallax) should be skipped: small screens or reduced-motion preference.
 */
export const useLiteMotion = () => {
  const getLitePreference = () => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(max-width: 1024px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  };

  const [lite, setLite] = useState(getLitePreference);

  useEffect(() => {
    const queries = [
      window.matchMedia("(max-width: 1024px)"),
      window.matchMedia("(prefers-reduced-motion: reduce)"),
    ];
    const update = () => setLite(queries.some((q) => q.matches));
    update();
    queries.forEach((q) => q.addEventListener("change", update));
    return () => queries.forEach((q) => q.removeEventListener("change", update));
  }, []);

  return lite;
};
