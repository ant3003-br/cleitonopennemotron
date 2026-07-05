import { useEffect, useRef, useState } from "react";

/**
 * Retorna a posição vertical de scroll da página, atualizada via
 * requestAnimationFrame para não travar a thread principal.
 */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    setScrollY(window.scrollY);

    function handleScroll() {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}
