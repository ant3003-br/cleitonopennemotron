// Carrega automaticamente todas as imagens de src/assets/portfolio/<categoria>,
// já otimizadas e ordenadas numericamente pelo nome do arquivo.
// Usado apenas como PRÉVIA na Home — o portfólio completo, organizado por
// tema, fica na página /portfolio (veja src/data/albums.js).
const modules = import.meta.glob("../assets/portfolio/*/*.{jpg,jpeg,webp,JPG,JPEG,WEBP}", {
  eager: true,
  import: "default",
});

export const galleryImages = Object.keys(modules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((path, i) => ({
    id: i + 1,
    src: modules[path],
    alt: `Cleiton Lages Fotografias — fotografia ${i + 1} do portfólio`,
  }));
