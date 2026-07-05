function isCoverFilename(path) {
  const filename = path.split("/").pop() ?? "";
  const nameWithoutExt = filename.replace(/\.[^.]+$/, "").toLowerCase();
  return nameWithoutExt === "capa" || nameWithoutExt === "cover";
}

export function sortWithCoverFirst(paths) {
  return [...paths].sort((a, b) => {
    const aCover = isCoverFilename(a);
    const bCover = isCoverFilename(b);
    if (aCover && !bCover) return -1;
    if (bCover && !aCover) return 1;
    return a.localeCompare(b, undefined, { numeric: true });
  });
}
