import { useMemo } from "react";
import { Link } from "react-router-dom";
import { galleryImages } from "../data/galleryImages.js";
import { shuffleArray } from "../utils/shuffle.js";
import MasonryGallery from "./MasonryGallery.jsx";
import { IconArrowRight } from "./Icons.jsx";

const TEASER_COUNT = 12;

export default function Gallery() {
  const teaserImages = useMemo(() => shuffleArray(galleryImages).slice(0, TEASER_COUNT), []);

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 lg:px-10 bg-paper scroll-mt-20">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="font-mono text-[12px] tracking-widest2 uppercase text-graphite mb-5">Portfólio</p>
            <h2 className="font-display text-[36px] md:text-[52px] leading-[1.05] font-medium text-ink">
              Um recorte do trabalho.
            </h2>
          </div>
          <p className="text-graphite font-light text-[15px] max-w-xs">
            Cada imagem é um instante único — clique para ampliar.
          </p>
        </div>

        <MasonryGallery images={teaserImages} />

        <div className="mt-12 flex justify-center">
          <Link
            to="/portfolio"
            className="focus-ring inline-flex items-center gap-2 border border-ink px-8 py-3.5 text-[13px] tracking-[0.12em] uppercase text-ink hover:bg-ink hover:text-paper transition-colors"
          >
            Ver todos os álbuns
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
