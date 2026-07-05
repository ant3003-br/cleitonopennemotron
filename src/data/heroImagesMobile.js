const modules = import.meta.glob("../assets/hero/celular/*.{jpg,jpeg,webp,JPG,JPEG,WEBP}", {
  eager: true,
  import: "default",
});

export const heroImagesMobile = Object.keys(modules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((path, i) => ({
    src: modules[path],
    alt: `Cleiton Lages Fotografias — fotografia em destaque (celular) ${i + 1}`,
  }));
