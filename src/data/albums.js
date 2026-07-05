import { coverageTypes } from "./siteData.js";
import { sortWithCoverFirst } from "../utils/sortWithCoverFirst.js";

const modules = import.meta.glob("../assets/portfolio/*/*.{jpg,jpeg,webp,JPG,JPEG,WEBP}", {
  eager: true,
  import: "default",
});

function imagesForSlug(slug) {
  const paths = sortWithCoverFirst(
    Object.keys(modules).filter((path) => path.includes(`/portfolio/${slug}/`))
  );

  return paths.map((path, i) => ({
    id: `${slug}-${i + 1}`,
    src: modules[path],
    alt: `Cleiton Lages Fotografias — ${slug} ${i + 1}`,
  }));
}

export const albums = coverageTypes.map((cat) => {
  const images = imagesForSlug(cat.slug);
  return {
    ...cat,
    images,
    cover: images[0]?.src ?? null,
    count: images.length,
  };
});

export function getAlbumBySlug(slug) {
  return albums.find((album) => album.slug === slug);
}
