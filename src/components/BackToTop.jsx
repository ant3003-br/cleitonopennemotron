import { useScrollY } from "../hooks/useScrollY.js";
import { IconArrowUp } from "./Icons.jsx";

export default function BackToTop() {
  const scrollY = useScrollY();
  const visible = scrollY > 560;

  function handleClick() {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Voltar ao topo"
      tabIndex={visible ? 0 : -1}
      className={`focus-ring fixed bottom-24 right-6 z-40 w-11 h-11 border border-ink bg-paper text-ink flex items-center justify-center transition-all duration-300 hover:bg-ink hover:text-paper ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <IconArrowUp className="w-5 h-5" />
    </button>
  );
}
