import { useState } from "react";
import { business, socialLinks, eventTypes } from "../data/siteData.js";
import { IconWhatsApp, IconPhone, IconMail, IconMapPin, IconInstagram, IconFacebook } from "./Icons.jsx";

const iconByName = { instagram: IconInstagram, facebook: IconFacebook };

export default function Contact() {
  const [nome, setNome] = useState("");
  const [tipoEvento, setTipoEvento] = useState(eventTypes[0]);
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const linhas = [`Olá! Meu nome é ${nome || "___"}.`, `Tenho interesse em: ${tipoEvento}.`];
    if (mensagem.trim()) linhas.push(mensagem.trim());
    linhas.push("Vim pelo site e gostaria de mais informações. 😊");

    const url = `${business.whatsappHref}?text=${encodeURIComponent(linhas.join(" "))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className="py-24 md:py-32 px-6 lg:px-10 bg-mist scroll-mt-20">
      <div className="max-w-content mx-auto">
        <div className="max-w-xl mb-14 md:mb-16">
          <p className="font-mono text-[12px] tracking-widest2 uppercase text-graphite mb-5">Vamos conversar</p>
          <h2 className="font-display text-[36px] md:text-[52px] leading-[1.05] font-medium text-ink">
            Conte um pouco sobre o seu momento.
          </h2>
          <p className="text-graphite font-light mt-5 text-[15px] leading-relaxed">
            Preencha os campos abaixo ou fale diretamente pelo WhatsApp — normalmente a resposta é rápida.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Formulário */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-7">
            <div>
              <label htmlFor="nome" className="block font-mono text-[11px] tracking-[0.15em] uppercase text-graphite mb-2">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                autoComplete="name"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome completo"
                className="focus-ring w-full bg-transparent border-b border-line focus-visible:border-ink outline-none py-3 text-ink placeholder:text-graphite/50 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="tipoEvento" className="block font-mono text-[11px] tracking-[0.15em] uppercase text-graphite mb-2">
                Tipo de evento
              </label>
              <select
                id="tipoEvento"
                name="tipoEvento"
                value={tipoEvento}
                onChange={(e) => setTipoEvento(e.target.value)}
                className="focus-ring w-full bg-transparent border-b border-line focus-visible:border-ink outline-none py-3 text-ink transition-colors"
              >
                {eventTypes.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="mensagem" className="block font-mono text-[11px] tracking-[0.15em] uppercase text-graphite mb-2">
                Mensagem <span className="normal-case text-graphite/60">(opcional)</span>
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Data prevista, local, ideias para o ensaio..."
                className="focus-ring w-full bg-transparent border-b border-line focus-visible:border-ink outline-none py-3 text-ink placeholder:text-graphite/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="focus-ring inline-flex items-center justify-center gap-2 bg-ink text-paper px-8 py-4 text-[13px] tracking-[0.12em] uppercase hover:bg-ink/85 transition-colors mt-2 self-start"
            >
              <IconWhatsApp className="w-4 h-4" />
              Enviar via WhatsApp
            </button>
          </form>

          {/* Informações diretas */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <ul className="flex flex-col gap-5">
              <li>
                <a
                  href={business.whatsappHref}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="focus-ring group flex items-center gap-4 text-ink"
                >
                  <span className="w-11 h-11 shrink-0 border border-ink flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-colors">
                    <IconWhatsApp className="w-4 h-4" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-mono uppercase tracking-[0.1em] text-graphite">WhatsApp</span>
                    <span className="block text-[15px]">{business.whatsappDisplay}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={business.phoneHref} className="focus-ring group flex items-center gap-4 text-ink">
                  <span className="w-11 h-11 shrink-0 border border-ink flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-colors">
                    <IconPhone className="w-4 h-4" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-mono uppercase tracking-[0.1em] text-graphite">Telefone</span>
                    <span className="block text-[15px]">{business.phoneDisplay}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="focus-ring group flex items-center gap-4 text-ink">
                  <span className="w-11 h-11 shrink-0 border border-ink flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-colors">
                    <IconMail className="w-4 h-4" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-mono uppercase tracking-[0.1em] text-graphite">E-mail</span>
                    <span className="block text-[15px] break-all">{business.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 text-ink">
                <span className="w-11 h-11 shrink-0 border border-ink flex items-center justify-center">
                  <IconMapPin className="w-4 h-4" />
                </span>
                <span>
                  <span className="block text-[11px] font-mono uppercase tracking-[0.1em] text-graphite">Atendimento</span>
                  <span className="block text-[15px]">{business.serviceArea}</span>
                </span>
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
                    className="focus-ring w-11 h-11 border border-ink flex items-center justify-center text-ink hover:bg-ink hover:text-paper transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <div className="overflow-hidden border border-line h-56 mt-1">
              <iframe
                title="Localização — Contagem, MG"
                src="https://www.google.com/maps?q=Contagem,+Minas+Gerais&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
