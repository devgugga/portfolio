import { useEffect, useState } from "react";

/**
 * A hook that tracks whether the given media query matches.
 *
 * @param media the media query to track
 *
 * @returns a boolean indicating whether the media query matches
 *
 * @example
 *
 * const isLargeScreen = useMedia("(min-width: 1024px)");
 *
 * if (isLargeScreen) {
 *   // The screen is at least 1024px wide
 * }
 */
export const useMedia = (media: string) => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    /**
     * Checks the current media query and updates the state accordingly.
     *
     * This is used as an event listener for the `resize` event.
     */
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();

    window.addEventListener("resize", changeMatch);
    return () => window.removeEventListener("resize", changeMatch);
  }, [media]);

  return match;
};
