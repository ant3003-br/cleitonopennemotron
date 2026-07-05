import { business } from "../data/siteData.js";
import { IconWhatsApp } from "./Icons.jsx";

export default function WhatsAppButton() {
  return (
    <a
      href={business.whatsappHref}
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={`Falar com ${business.shortName || business.name} no WhatsApp`}
      className="focus-ring fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-ink text-paper flex items-center justify-center shadow-lg shadow-ink/25 hover:bg-ink/90 hover:scale-105 active:scale-95 transition-all duration-300"
    >
      <IconWhatsApp className="w-6 h-6" />
    </a>
  );
}
