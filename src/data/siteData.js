// =============================================================
// DADOS CENTRAIS DO SITE
// Edite os valores abaixo para atualizar contatos e textos
// em todo o site a partir de um único lugar.
// =============================================================

export const business = {
  name: "Cleiton Lages Fotografias",
  shortName: "Cleiton Lages",
  city: "Contagem",
  state: "MG",
  serviceArea: "Contagem e Região Metropolitana de Belo Horizonte",
  email: "cleitonalagesfoto@gmail.com",
  // Único número de contato do fotógrafo — usado tanto para ligação quanto WhatsApp
  phoneDisplay: "+55 31 98531-0266",
  phoneHref: "tel:+5531985310266",
  whatsappDisplay: "+55 31 98531-0266",
  whatsappHref: "https://wa.me/5531985310266",
  whatsappNumberRaw: "5531985310266",
};

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/cleitonlagesfotografias/",
    icon: "instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/Cleiton-Lages-Fotografias/",
    icon: "facebook",
  },
];

// Início/Sobre/Contato continuam sendo âncoras dentro da Home ("/#sobre").
// Serviços e Portfólio agora são páginas próprias.
export const navLinks = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Contato", href: "/#contato" },
];

export const heroContent = {
  eyebrow: "Fotografia de casamentos · Contagem, MG",
  headlineLines: ["Instantes reais,", "elegância atemporal."],
  subheadline:
    "Cobertura fotográfica de casamentos, debutantes e ensaios personalizados na Grande Belo Horizonte, com sensibilidade documental e olhar autoral.",
  ctaPrimary: "Solicitar orçamento",
  ctaSecondary: "Ver portfólio",
};

export const aboutContent = {
  eyebrow: "Sobre o fotógrafo",
  headline: "Cleiton Lages",
  paragraphs: [
    "Fotógrafo profissional localizado em Contagem, Minas Gerais, especializado na cobertura de casamentos, ensaios de debutantes e sessões fotográficas personalizadas.",
    "Reconhecido na região pela atenção aos detalhes e pela agilidade em registrar momentos espontâneos e emocionantes, Cleiton atua com uma abordagem que mistura o tradicional, a fotorreportagem de estilo documental e a fotografia artística e autoral.",
  ],
  styleTags: ["Tradicional", "Fotorreportagem", "Artística & Autoral"],
};

export const services = [
  {
    number: "01",
    title: "Casamentos",
    description:
      "Cobertura completa da cerimônia e da recepção, com um olhar documental para captar as emoções reais do dia — dos preparativos até a pista de dança.",
  },
  {
    number: "02",
    title: "Ensaios",
    description:
      "Sessões de pré-wedding, pós-wedding e debutantes de 15 anos, com direção leve e resultados autênticos, no estúdio, ao ar livre ou no local de sua escolha.",
  },
  {
    number: "03",
    title: "Produtos",
    description:
      "Entrega das fotografias em alta resolução, além de álbuns e mini-álbuns impressos personalizados para guardar a história com o cuidado que ela merece.",
  },
];

export const differentials = [
  {
    title: "Atenção aos detalhes",
    description: "Cada composição é pensada com cuidado, sem perder a espontaneidade do momento.",
  },
  {
    title: "Agilidade no registro",
    description: "Preparo para captar instantes emocionantes assim que eles acontecem, sem poses forçadas.",
  },
  {
    title: "Estilo versátil",
    description: "Do tradicional ao autoral, um repertório que se adapta à história de cada cliente.",
  },
  {
    title: "Presença na Grande BH",
    description: "Atendimento em Contagem e em toda a Região Metropolitana de Belo Horizonte.",
  },
];

export const eventTypes = [
  "Casamento",
  "Pós Casamento",
  "Casal (Pré Casamento)",
  "Família",
  "Gestante",
  "Sensual",
  "Feminino",
  "Masculino",
  "Editorial",
  "Aniversário Infantil",
  "Outro",
];

// =============================================================
// COBERTURAS / ÁLBUNS DO PORTFÓLIO
// Mesma lista usada na página de Serviços e na página de Álbuns.
// A ordem aqui definida é a ordem em que aparecem no site.
// slug = nome exato da pasta dentro de src/assets/portfolio/
// =============================================================
export const coverageTypes = [
  {
    slug: "casamento",
    name: "Casamento",
    description: "Cobertura completa do grande dia, da cerimônia à festa.",
  },
  {
    slug: "pos-casamento",
    name: "Pós Casamento",
    description: "Ensaio fotográfico após o casamento, em cenários especiais.",
  },
  {
    slug: "casal",
    name: "Casal (Pré Casamento)",
    description: "Ensaio para casais, celebrando a fase do namoro ou noivado.",
  },
  {
    slug: "familia",
    name: "Família",
    description: "Registros espontâneos e afetivos em família.",
  },
  {
    slug: "gestante",
    name: "Gestante",
    description: "Ensaio para celebrar a espera do bebê.",
  },
  {
    slug: "sensual",
    name: "Sensual",
    description: "Ensaio artístico e intimista, com elegância e bom gosto.",
  },
  {
    slug: "feminino",
    name: "Feminino",
    description: "Ensaio individual para valorizar a personalidade feminina.",
  },
  {
    slug: "masculino",
    name: "Masculino",
    description: "Ensaio individual com estética e atitude.",
  },
  {
    slug: "editorial",
    name: "Editorial",
    description: "Produções conceituais, com direção de arte e olhar autoral.",
  },
  {
    slug: "infantil",
    name: "Aniversário Infantil",
    description: "Registro dos momentos especiais da festa das crianças.",
  },
];
