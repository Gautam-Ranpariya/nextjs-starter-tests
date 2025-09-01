// Localization Import
import { getRequestConfig } from 'next-intl/server'

// Routing Import
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = (await requestLocale) as
    | typeof routing.defaultLocale
    | (typeof routing.locales)[number]
    | undefined

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (await import(`../common/locale/${locale}.json`)).default,
  }
})
