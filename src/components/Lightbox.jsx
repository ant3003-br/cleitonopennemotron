import { useEffect, useRef, useState } from "react";
import { IconChevronLeft, IconChevronRight, IconClose } from "./Icons.jsx";

export default function Lightbox({ images, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const total = images.length;
  const closeButtonRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  // trava o scroll do body e gerencia o foco (abre no botão fechar,
  // devolve o foco ao elemento que abriu o lightbox ao fechar)
  useEffect(() => {
    previouslyFocusedRef.current = document.activeElement;
    document.body.classList.add("no-scroll");
    closeButtonRef.current?.focus();
    return () => {
      document.body.classList.remove("no-scroll");
      if (previouslyFocusedRef.current instanceof HTMLElement) {
        previouslyFocusedRef.current.focus();
      }
    };
  }, []);

  // navegação por teclado: Esc fecha, setas navegam
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + total) % total);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % total);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, total]);

  // pré-carrega a imagem anterior e a próxima para navegação mais fluida
  useEffect(() => {
    [(index + 1) % total, (index - 1 + total) % total].forEach((i) => {
      const preload = new Image();
      preload.src = images[i].src;
    });
  }, [index, total, images]);

  const current = images[index];

  return (
    <div
      className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-sm flex flex-col animate-scaleFadeIn motion-reduce:animate-none"
      role="dialog"
      aria-modal="true"
      aria-label={`Visualização ampliada — fotografia ${index + 1} de ${total}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex items-center justify-between px-5 md:px-8 py-5 font-mono text-paper/70 text-[12px] shrink-0">
        <span>
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar visualização"
          className="focus-ring-light text-paper hover:text-paper/70 transition-colors w-10 h-10 flex items-center justify-center -mr-2"
        >
          <IconClose className="w-6 h-6" />
        </button>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-4 md:px-16 pb-6 md:pb-10 min-h-0">
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="max-h-full max-w-full object-contain select-none animate-scaleFadeIn motion-reduce:animate-none"
          draggable="false"
        />

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + total) % total)}
              aria-label="Fotografia anterior"
              className="focus-ring-light absolute left-1 md:left-4 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center text-paper/70 hover:text-paper transition-colors"
            >
              <IconChevronLeft className="w-7 h-7 md:w-8 md:h-8" />
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % total)}
              aria-label="Próxima fotografia"
              className="focus-ring-light absolute right-1 md:right-4 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center text-paper/70 hover:text-paper transition-colors"
            >
              <IconChevronRight className="w-7 h-7 md:w-8 md:h-8" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
