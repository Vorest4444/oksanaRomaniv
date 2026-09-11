'use client';

import { useLayoutEffect, useState } from 'react';

/** Reads a CSS media query on the client before paint, so sticky scenes don't flash the wrong layout. */
export function useMediaQuery(query: string, ssrValue = false) {
  const [matches, setMatches] = useState(ssrValue);

  useLayoutEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [query]);

  return matches;
}
