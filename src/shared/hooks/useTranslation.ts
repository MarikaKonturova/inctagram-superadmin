import { useEffect, useState } from 'react'

import { en, ru } from '../../../public/locales'

export const useTranslation = () => {
  const [locale, setLocale] = useState('en')

  useEffect(() => {
    const handleLanguageChange = () => {
      const html = document.documentElement
      const lang = html.getAttribute('lang')

      if (lang) {
        setLocale(lang)
      }
    }

    window.addEventListener('language-change', handleLanguageChange)

    handleLanguageChange()

    return () => {
      window.removeEventListener('language-change', handleLanguageChange)
    }
  }, [])

  return locale === 'en' ? en : ru
}
