import { Link } from "react-router-dom";
import { services } from "../data/siteData.js";
import { IconArrowRight } from "./Icons.jsx";

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 px-6 lg:px-10 bg-mist scroll-mt-20">
      <div className="max-w-content mx-auto">
        <div className="max-w-xl mb-14 md:mb-16">
          <p className="font-mono text-[12px] tracking-widest2 uppercase text-graphite mb-5">Serviços</p>
          <h2 className="font-display text-[36px] md:text-[52px] leading-[1.05] font-medium text-ink">
            Cobertura completa, do início ao álbum.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-line">
          {services.map((service) => (
            <div key={service.number} className="bg-mist p-8 md:p-10 flex flex-col">
              <span className="font-mono text-graphite text-sm">{service.number}</span>
              <h3 className="font-display text-3xl md:text-[32px] mt-4 mb-4 text-ink">{service.title}</h3>
              <p className="text-graphite font-light leading-relaxed text-[15px]">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/servicos"
            className="focus-ring inline-flex items-center gap-2 border border-ink px-8 py-3.5 text-[13px] tracking-[0.12em] uppercase text-ink hover:bg-ink hover:text-paper transition-colors"
          >
            Ver todas as coberturas
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
