'use client'

import { ChevronsUpDown } from 'lucide-react'
import * as React from 'react'
import { useEffect, useState } from 'react'

import Rus from '../assets/icons/flags/russia-flag-icon.svg'
import Eng from '../assets/icons/flags/united-states-flag-icon.svg'
import { cn } from '../utils'
import { Button } from './Button'
import { Popover, PopoverContent, PopoverTrigger } from './Popover'
import { Command, CommandGroup, CommandItem, CommandList } from './Сommand'

type Languages = {
  icon: any
  label: string
  value: string
}

const languages: Languages[] = [
  { icon: Eng, label: 'English', value: 'en' },
  { icon: Rus, label: 'Russian', value: 'ru' },
]

export function LangSelect() {
  const [open, setOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState<Languages | null>(languages[0])

  useEffect(() => {
    const html = document.documentElement

    html.setAttribute('lang', selectedLang?.value as string)
  }, [selectedLang])

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button className={'w-[200px] justify-between'} variant={'langSelect'}>
          <div className={'flex items-center justify-center'}>
            {selectedLang && (
              <>
                <selectedLang.icon className={'mr-2 h-4 w-4 shrink-0'} />
                {selectedLang.label}
              </>
            )}
          </div>

          <ChevronsUpDown className={'ml-2 h-4 w-4 shrink-0 opacity-50'} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={'w-[200px] p-0 text-regular-400'}>
        <Command>
          <CommandList>
            <CommandGroup>
              {languages.map(language => (
                <CommandItem
                  key={language.value}
                  onSelect={() => {
                    setSelectedLang(language === selectedLang ? selectedLang : language)
                    setOpen(false)
                  }}
                  value={language.value}
                >
                  <language.icon className={cn('mr-2 h-4 w-4')} />
                  <span>{language.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
