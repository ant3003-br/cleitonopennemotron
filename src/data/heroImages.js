// Carrega automaticamente todas as imagens de src/assets/hero,
// já otimizadas e ordenadas numericamente pelo nome do arquivo.
const modules = import.meta.glob("../assets/hero/*.{jpg,jpeg,webp,JPG,JPEG,WEBP}", {
  eager: true,
  import: "default",
});

export const heroImages = Object.keys(modules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((path, i) => ({
    src: modules[path],
    alt: `Cleiton Lages Fotografias — fotografia em destaque ${i + 1}`,
  }));
