import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrollY } from "../hooks/useScrollY.js";
import { logoForLightBg, logoForDarkBg } from "../data/logos.js";
import { business, navLinks } from "../data/siteData.js";
import { IconMenu, IconClose, IconWhatsApp } from "./Icons.jsx";

export default function Navbar() {
  const scrollY = useScrollY();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // O efeito "transparente sobre a foto" só faz sentido na Home, que tem
  // o Hero em tela cheia logo no topo. Nas demais páginas o menu já
  // nasce sólido, pois o topo delas não é uma foto de fundo.
  const isHome = location.pathname === "/";
  const isScrolled = scrollY > 48;
  const solid = !isHome || isScrolled || isOpen;

  // trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  // fecha o menu com a tecla Esc
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // fecha o menu mobile automaticamente caso a tela seja redimensionada para desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setIsOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // fecha o menu mobile automaticamente ao trocar de rota
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        solid ? "bg-paper/95 backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto px-6 lg:px-10 flex items-center justify-between h-20 md:h-24">
        <Link to="/#inicio" className="focus-ring shrink-0" aria-label={`${business.name} — página inicial`}>
          <img
            src={solid ? logoForLightBg : logoForDarkBg}
            alt={business.name}
            className="h-11 md:h-14 w-auto object-contain max-w-[190px] transition-opacity duration-300"
            width={700}
            height={233}
          />
        </Link>

        {/* Navegação desktop */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`focus-ring font-sans text-[13px] tracking-[0.14em] uppercase transition-colors ${
                solid ? "text-graphite hover:text-ink" : "text-paper/80 hover:text-paper"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className={`focus-ring hidden md:inline-flex items-center gap-2 border px-5 py-2.5 text-[13px] tracking-[0.1em] uppercase transition-colors ${
              solid
                ? "border-ink text-ink hover:bg-ink hover:text-paper"
                : "border-paper/50 text-paper hover:bg-paper hover:text-ink"
            }`}
          >
            <IconWhatsApp className="w-4 h-4" />
            WhatsApp
          </a>

          {/* Botão hambúrguer mobile */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            className={`focus-ring md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 transition-colors ${
              solid ? "text-ink" : "text-paper"
            }`}
          >
            {isOpen ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile (slide-down) */}
      <div
        id="menu-mobile"
        className={`md:hidden overflow-hidden bg-paper border-b border-line transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="focus-ring py-3 font-display text-2xl text-ink border-b border-line last:border-none"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="nofollow noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="focus-ring mt-5 inline-flex items-center justify-center gap-2 bg-ink text-paper px-6 py-4 text-[13px] tracking-[0.1em] uppercase"
          >
            <IconWhatsApp className="w-4 h-4" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
