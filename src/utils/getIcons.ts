import type { ImageMetadata } from "astro";

export const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/icons/*.png');
export const imagesList = Object.entries(images).map(v => v[0]);
