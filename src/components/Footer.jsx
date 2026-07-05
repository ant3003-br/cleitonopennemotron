import { Link } from "react-router-dom";
import { logoForDarkBg } from "../data/logos.js";
import { business, navLinks, socialLinks, coverageTypes } from "../data/siteData.js";
import { IconInstagram, IconFacebook, IconWhatsApp, IconMail } from "./Icons.jsx";

const iconByName = { instagram: IconInstagram, facebook: IconFacebook };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper pt-20 pb-8 px-6 lg:px-10">
      <div className="max-w-content mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        <div className="sm:col-span-2 md:col-span-1">
          <Link to="/#inicio" className="focus-ring-light inline-block mb-5">
            <img src={logoForDarkBg} alt={business.name} className="h-9 w-auto object-contain" width={700} height={233} />
          </Link>
          <p className="text-paper/70 text-[14px] font-light leading-relaxed max-w-[220px]">
            Fotografia de casamentos, debutantes e ensaios em Contagem e Grande BH.
          </p>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-paper/60 mb-5">Navegação</p>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="focus-ring-light text-[14px] text-paper/80 hover:text-paper font-light transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-paper/60 mb-5">Coberturas</p>
          <ul className="space-y-3">
            {coverageTypes.slice(0, 6).map((coverage) => (
              <li key={coverage.slug}>
                <Link
                  to={`/portfolio/${coverage.slug}`}
                  className="focus-ring-light text-[14px] text-paper/80 hover:text-paper font-light transition-colors"
                >
                  {coverage.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/servicos"
                className="focus-ring-light text-[14px] text-paper/60 hover:text-paper font-light transition-colors underline underline-offset-2"
              >
                Ver todas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-paper/60 mb-5">Contato</p>
          <ul className="space-y-3 mb-6">
            <li>
              <a href={business.whatsappHref} target="_blank" rel="nofollow noopener noreferrer" className="focus-ring-light inline-flex items-center gap-2 text-[14px] text-paper/80 hover:text-paper font-light transition-colors">
                <IconWhatsApp className="w-3.5 h-3.5 shrink-0" />
                {business.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="focus-ring-light inline-flex items-center gap-2 text-[14px] text-paper/80 hover:text-paper font-light transition-colors break-all">
                <IconMail className="w-3.5 h-3.5 shrink-0" />
                {business.email}
              </a>
            </li>
          </ul>
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = iconByName[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={social.name}
                  className="focus-ring-light w-9 h-9 border border-paper/25 flex items-center justify-center text-paper/80 hover:text-ink hover:bg-paper transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-content mx-auto border-t border-paper/10 pt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <p className="text-paper/60 text-[12px] font-light">
          © {year} {business.name}. Todos os direitos reservados.
        </p>
        <p className="text-paper/60 text-[12px] font-light">
          {business.city} / {business.state}
        </p>
      </div>
    </footer>
  );
}
