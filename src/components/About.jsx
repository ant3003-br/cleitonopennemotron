import { aboutImages } from "../data/aboutImages.js";
import { heroImages } from "../data/heroImages.js";
import { aboutContent, business } from "../data/siteData.js";

const aboutImage = aboutImages[0]?.src ?? heroImages[2]?.src ?? heroImages[0]?.src;

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 px-6 lg:px-10 bg-paper scroll-mt-20">
      <div className="max-w-content mx-auto grid md:grid-cols-2 gap-14 md:gap-16 items-center">
        <div className="relative order-2 md:order-1">
          <div className="relative overflow-hidden">
            {aboutImage && (
              <img
                src={aboutImage}
                alt="Detalhe fotografado por Cleiton Lages Fotografias"
                className="w-full h-[420px] md:h-[560px] object-cover"
                loading="lazy"
              />
            )}
          </div>
          {/* Cantos de moldura — assinatura visual do site */}
          <div className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-ink hidden sm:block" aria-hidden="true" />
          <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-ink hidden sm:block" aria-hidden="true" />
        </div>

        <div className="order-1 md:order-2">
          <p className="font-mono text-[12px] tracking-widest2 uppercase text-graphite mb-5">
            {aboutContent.eyebrow}
          </p>
          <h2 className="font-display text-[40px] md:text-[52px] leading-[1.05] font-medium mb-8 text-ink">
            {aboutContent.headline}
          </h2>

          {aboutContent.paragraphs.map((p, i) => (
            <p key={i} className="text-graphite leading-relaxed mb-5 font-light text-[15px] md:text-base last:mb-9">
              {p}
            </p>
          ))}

          <div className="flex flex-wrap gap-3 mb-9">
            {aboutContent.styleTags.map((tag) => (
              <span
                key={tag}
                className="border border-line px-4 py-2 text-[12px] tracking-[0.08em] uppercase text-graphite"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-[14px] text-graphite font-light">{business.serviceArea}</p>
        </div>
      </div>
    </section>
  );
}
