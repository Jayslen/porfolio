import { images } from './getIcons'

export function buildPathImage(key: string) {
  const skillNormalized = key.replaceAll(' ', "_").toLowerCase()
  const path = `/src/assets/icons/${skillNormalized}.png`
  return images[path]()
}
