import translations from "./translation.json";

export function getTranslations({ language }) {
  if (language === "en") return translations.en;
  return translations.es;
}
