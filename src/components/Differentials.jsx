import { differentials } from "../data/siteData.js";

export default function Differentials() {
  return (
    <section className="py-24 md:py-28 px-6 lg:px-10 bg-paper">
      <div className="max-w-content mx-auto">
        <div className="max-w-xl mb-14">
          <p className="font-mono text-[12px] tracking-widest2 uppercase text-graphite mb-5">Diferenciais</p>
          <h2 className="font-display text-[36px] md:text-[48px] leading-[1.05] font-medium text-ink">
            Técnica e sensibilidade em cada clique.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {differentials.map((item, i) => (
            <div key={item.title} className="border-t border-ink pt-6">
              <span className="font-mono text-[11px] text-graphite">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-2xl mt-3 mb-3 text-ink">{item.title}</h3>
              <p className="text-graphite font-light text-[14px] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
