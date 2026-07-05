import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { heroImages } from "../data/heroImages.js";
import { heroImagesMobile } from "../data/heroImagesMobile.js";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { heroContent, business } from "../data/siteData.js";
import { IconChevronLeft, IconChevronRight, IconWhatsApp } from "./Icons.jsx";

const SLIDE_MS = 6000;

export default function Hero() {
  const isMobile = useIsMobile();
  const activeImages = isMobile && heroImagesMobile.length > 0 ? heroImagesMobile : heroImages;

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const total = activeImages.length;

  useEffect(() => {
    setIndex(0);
  }, [activeImages]);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    if (total <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, SLIDE_MS);
  }, [total]);

  useEffect(() => {
    if (isPaused) {
      clearInterval(timerRef.current);
      return;
    }
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [isPaused, startTimer]);

  function goTo(next) {
    setIndex(((next % total) + total) % total);
    startTimer();
  }

  if (total === 0) {
    // Fallback elegante caso, por algum motivo, nenhuma imagem seja encontrada
    return (
      <section id="inicio" className="relative h-[70vh] min-h-[420px] bg-ink flex items-center justify-center">
        <p className="font-display text-paper text-4xl">{business.name}</p>
      </section>
    );
  }

  return (
    <section
      id="inicio"
      className="relative h-[100svh] min-h-[560px] max-h-[980px] overflow-hidden bg-ink"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carrossel"
      aria-label="Destaques do portfólio"
    >
      {/* Slides: crossfade (opacity) + zoom lento (Ken Burns) */}
      <div className="absolute inset-0">
        {activeImages.map((img, i) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={i === index ? undefined : true}
          >
            <img
              src={img.src}
              alt={img.alt}
              className={`h-full w-full object-cover transition-transform duration-7000 ease-out motion-reduce:!scale-100 motion-reduce:!transition-none ${
                i === index ? "scale-[1.08]" : "scale-100"
              }`}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : undefined}
            />
          </div>
        ))}
      </div>

      {/* Overlays para legibilidade do texto */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

      {/* Conteúdo */}
      <div className="relative z-20 h-full max-w-content mx-auto px-6 lg:px-10 flex flex-col justify-end pb-28 md:pb-24">
        <p
          className="font-mono text-[11px] md:text-xs tracking-widest2 uppercase text-paper/85 mb-5 flex items-center gap-3 animate-fadeInUp motion-reduce:animate-none"
        >
          <span className="w-8 h-px bg-paper/50" aria-hidden="true" />
          {heroContent.eyebrow}
        </p>

        <h1
          className="font-display text-paper text-[34px] leading-[1.15] sm:text-[46px] sm:leading-[1.1] md:text-[64px] lg:text-[72px] md:leading-[1.02] font-medium max-w-3xl animate-fadeInUp motion-reduce:animate-none"
          style={{ animationDelay: "120ms", animationFillMode: "backwards" }}
        >
          {heroContent.headlineLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p
          className="text-paper/90 max-w-md mt-6 text-[15px] md:text-base leading-relaxed font-light animate-fadeInUp motion-reduce:animate-none"
          style={{ animationDelay: "240ms", animationFillMode: "backwards" }}
        >
          {heroContent.subheadline}
        </p>

        <div
          className="flex flex-wrap items-center gap-4 mt-10 animate-fadeInUp motion-reduce:animate-none"
          style={{ animationDelay: "360ms", animationFillMode: "backwards" }}
        >
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring-light inline-flex items-center gap-2 bg-paper text-ink px-8 py-4 text-[13px] tracking-[0.12em] uppercase hover:bg-paper/90 transition-colors"
          >
            <IconWhatsApp className="w-4 h-4" />
            {heroContent.ctaPrimary}
          </a>
          <Link
            to="/portfolio"
            className="focus-ring-light inline-flex items-center gap-2 border border-paper/40 text-paper px-8 py-4 text-[13px] tracking-[0.12em] uppercase hover:border-paper transition-colors"
          >
            {heroContent.ctaSecondary}
          </Link>
        </div>
      </div>

      {/* Setas de navegação (desktop) */}
      {total > 1 && (
        <div className="hidden md:flex absolute inset-y-0 left-0 right-0 z-20 items-center justify-between px-3 lg:px-6 pointer-events-none">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Slide anterior"
            className="focus-ring-light pointer-events-auto w-11 h-11 flex items-center justify-center text-paper/60 hover:text-paper transition-colors"
          >
            <IconChevronLeft className="w-7 h-7" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Próximo slide"
            className="focus-ring-light pointer-events-auto w-11 h-11 flex items-center justify-center text-paper/60 hover:text-paper transition-colors"
          >
            <IconChevronRight className="w-7 h-7" />
          </button>
        </div>
      )}

      {/* Contador estilo "contact sheet" de filme */}
      {total > 1 && (
        <div className="absolute z-20 bottom-7 right-6 lg:right-10 flex items-center gap-3 font-mono text-[11px]">
          <span className="text-paper">{String(index + 1).padStart(2, "0")}</span>
          <span className="w-14 sm:w-20 h-px bg-paper/25 relative overflow-hidden" aria-hidden="true">
            <span
              className="absolute inset-y-0 left-0 bg-paper transition-[width] duration-500 ease-out"
              style={{ width: `${((index + 1) / total) * 100}%` }}
            />
          </span>
          <span className="text-paper/55">{String(total).padStart(2, "0")}</span>
        </div>
      )}
    </section>
  );
}
