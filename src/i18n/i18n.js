import translations from './translation.json'

export function getTranslations({ language }) {
  if (language === 'en') return translations.en
  if (language === 'es') return translations.es
}
