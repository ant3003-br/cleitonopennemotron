import { sortWithCoverFirst } from "../utils/sortWithCoverFirst.js";

const modules = import.meta.glob("../assets/sobre/*.{jpg,jpeg,webp,JPG,JPEG,WEBP}", {
  eager: true,
  import: "default",
});

export const aboutImages = sortWithCoverFirst(Object.keys(modules)).map((path, i) => ({
  src: modules[path],
  alt: `Cleiton Lages Fotografias — sobre o fotógrafo ${i + 1}`,
}));
