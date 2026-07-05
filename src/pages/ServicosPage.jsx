import { useMemo } from "react";
import { Link } from "react-router-dom";
import { coverageTypes, business } from "../data/siteData.js";
import { albums } from "../data/albums.js";
import { IconWhatsApp, IconArrowRight } from "../components/Icons.jsx";

export default function ServicosPage() {
  const randomCovers = useMemo(
    () =>
      Object.fromEntries(
        coverageTypes.map((c) => {
          const album = albums.find((a) => a.slug === c.slug);
          const imgs = album?.images || [];
          return [c.slug, imgs.length > 0 ? imgs[Math.floor(Math.random() * imgs.length)].src : null];
        })
      ),
    []
  );

  return (
    <>
      <section className="pt-36 pb-20 md:pt-44 md:pb-24 px-6 lg:px-10 bg-ink text-paper">
        <div className="max-w-content mx-auto">
          <p className="font-mono text-[12px] tracking-widest2 uppercase text-paper/70 mb-5">Serviços</p>
          <h1 className="font-display text-[40px] md:text-[64px] leading-[1.05] font-medium max-w-2xl">
            Coberturas fotográficas para cada momento da sua história.
          </h1>
          <p className="text-paper/80 max-w-xl mt-6 text-[15px] md:text-base leading-relaxed font-light">
            {business.name} atua em {business.serviceArea}, com um olhar que mistura o tradicional, a
            fotorreportagem documental e a fotografia autoral. Confira abaixo os tipos de cobertura disponíveis.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper">
        <div className="max-w-content mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {coverageTypes.map((coverage, i) => {
              const album = albums.find((a) => a.slug === coverage.slug);
              const hasPhotos = album && album.count > 0;
              return (
                <div key={coverage.slug} className="bg-paper p-8 md:p-10 flex flex-col">
                  {randomCovers[coverage.slug] && (
                    <img
                      src={randomCovers[coverage.slug]}
                      alt={coverage.name}
                      className="w-full aspect-[4/3] object-cover mb-6"
                    />
                  )}
                  <span className="font-mono text-graphite text-sm">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="font-display text-2xl md:text-[28px] mt-4 mb-3 text-ink">{coverage.name}</h2>
                  <p className="text-graphite font-light leading-relaxed text-[14px] mb-6 flex-1">
                    {coverage.description}
                  </p>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mt-auto pt-6">
                    <a
                      href={`https://wa.me/${business.whatsappNumberRaw}?text=Olá! Gostaria de um orçamento para ${coverage.name}.`}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="focus-ring inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 text-[11px] tracking-[0.1em] uppercase hover:bg-ink/85 transition-colors shrink-0"
                    >
                      <IconWhatsApp className="w-3.5 h-3.5" />
                      Solicitar orçamento
                    </a>
                    {hasPhotos && (
                      <Link
                        to={`/portfolio/${coverage.slug}`}
                        className="focus-ring inline-flex items-center justify-center gap-2 border border-ink/40 text-ink px-5 py-2.5 text-[11px] tracking-[0.1em] uppercase hover:border-ink transition-colors"
                      >
                        Ver fotos
                        <IconArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 px-6 lg:px-10 bg-mist">
        <div className="max-w-content mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-display text-[32px] md:text-[42px] leading-[1.1] font-medium text-ink mb-3">
              Vamos planejar o seu ensaio?
            </h2>
            <p className="text-graphite font-light text-[15px] max-w-md">
              Fale agora pelo WhatsApp e receba um orçamento personalizado para a cobertura que você precisa.
            </p>
          </div>
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center gap-2 bg-ink text-paper px-8 py-4 text-[13px] tracking-[0.12em] uppercase hover:bg-ink/85 transition-colors shrink-0"
          >
            <IconWhatsApp className="w-4 h-4" />
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
