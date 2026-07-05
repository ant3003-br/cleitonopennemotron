import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ao trocar de rota:
 * - Se a URL tiver uma âncora (ex: "/#sobre"), rola suavemente até o elemento
 *   correspondente assim que ele estiver disponível no DOM.
 * - Caso contrário, volta o scroll para o topo (comportamento padrão de
 *   navegação entre páginas, que o React Router não faz sozinho).
 */
export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (location.hash) {
      const id = location.hash.replace("#", "");
      // pequena espera para garantir que o DOM da nova página já foi montado
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
        }
      }, 80);
      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}
