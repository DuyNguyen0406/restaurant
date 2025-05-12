"use client";

import { useLayoutEffect, useState } from "react";

export function useMediaQuery(query: string, initValue = false) {
  const getMatches = (query: string): boolean => {
    if (typeof window === "undefined") {
      return initValue;
    }
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(() => getMatches(query));

  useLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);

    const handleChange = () => {
      setMatches(matchMedia.matches);
    };

    handleChange();
    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}
