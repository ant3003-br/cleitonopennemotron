import { useState } from "react";
import { IconExpand } from "./Icons.jsx";
import Lightbox from "./Lightbox.jsx";

/**
 * Grade em masonry (colunas CSS) com efeito de zoom no hover.
 * Clicar em qualquer foto abre o Lightbox com setas de navegação,
 * navegando entre todas as fotos do array `images` recebido.
 */
export default function MasonryGallery({ images, eagerCount = 6 }) {
  const [lightboxIndex, setLightboxIndex] = useState(null); // null = fechado

  if (!images || images.length === 0) {
    return (
      <p className="text-graphite font-light text-[15px]">
        Em breve, novas fotos serão adicionadas a este álbum.
      </p>
    );
  }

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
        {images.map((image, i) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="focus-ring group relative block w-full mb-3 md:mb-4 overflow-hidden break-inside-avoid bg-mist"
            aria-label={`Ampliar fotografia ${i + 1} de ${images.length}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading={i < eagerCount ? "eager" : "lazy"}
              className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div
              className="absolute inset-0 bg-ink/0 group-hover:bg-ink/25 transition-colors duration-500"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            >
              <div className="w-11 h-11 border border-paper flex items-center justify-center text-paper">
                <IconExpand className="w-5 h-5" />
              </div>
            </div>
            <span
              className="absolute bottom-2 left-2 font-mono text-[10px] text-paper opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox images={images} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </>
  );
}
