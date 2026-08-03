export type GalleryImage = { src: string; alt: string };

/** Build gallery entries from `/Gallery/` filenames, deriving alt text from the name. */
export const galleryImages = (names: string[]): GalleryImage[] =>
  names.map(name => ({
    src: `/Gallery/${name}`,
    alt: name.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' '),
  }));
