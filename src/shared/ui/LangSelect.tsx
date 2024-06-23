'use client'

import { ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useEffect, useState } from 'react'

import Rus from 'shared/assets/icons/flags/russia-flag-icon.svg'
import Eng from 'shared/assets/icons/flags/united-states-flag-icon.svg'
import { useTranslation } from 'shared/hooks'

import { Button } from './Button'
import { Popover, PopoverContent, PopoverTrigger } from './Popover'

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>

type Languages = {
  icon: IconComponent
  label: string
  value: string
}

const languages: Languages[] = [
  { icon: Eng, label: 'english', value: 'en' },
  { icon: Rus, label: 'russian', value: 'ru' },
]

type LanguagesType = 'english' | 'russian'

export function LangSelect() {
  const t = useTranslation()
  const router = useRouter()
  const { pathname, asPath, query, locale } = router
  const defaultLocale = languages.find(l => l.value === locale)
  const [open, setOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState<Languages | null>(defaultLocale || languages[0])

  useEffect(() => {
    const html = document.documentElement

    html.setAttribute('lang', selectedLang?.value as string)
    window.dispatchEvent(new Event('language-change'))
  }, [selectedLang])

  const onLangChangeClick = (language: Languages) => {
    if (language !== selectedLang) {
      router.push({ pathname, query }, asPath, { locale: language.value })
      setSelectedLang(language)
    }

    setOpen(false)
  }

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button className={'w-[200px] justify-between'} variant={'langSelect'}>
          <div className={'flex items-center justify-center'}>
            {selectedLang && (
              <>
                <selectedLang.icon className={'mr-2 h-4 w-4 shrink-0'} />
                {t.langSwitch[selectedLang.label as LanguagesType]}
              </>
            )}
          </div>
          <ChevronsUpDown className={'ml-2 h-4 w-4 shrink-0 opacity-50'} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={'w-[200px] p-0 text-regular-400'}>
        {languages.map(language => (
          <div
            key={language.value}
            className={'flex items-center py-2 px-4 cursor-pointer hover:bg-dark-100'}
            onClick={() => onLangChangeClick(language)}
          >
            <language.icon className={'mr-2 h-4 w-4'} />
            <span>{t.langSwitch[language.label as LanguagesType]}</span>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  )
}
