'use client'

import * as React from 'react'
import { useState } from 'react'
import { Button } from 'shared/ui/button'
import { Command, CommandGroup, CommandItem, CommandList } from 'shared/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from 'shared/ui/popover'
import { cn } from 'shared/utils'

import Rus from '../../../shared/assets/icons/flags/russia-flag-icon.svg'
import Eng from '../../../shared/assets/icons/flags/united-states-flag-icon.svg'

type Languages = {
  icon: any
  label: string
  value: string
}

const languages: Languages[] = [
  { icon: Eng, label: 'English', value: 'English' },
  { icon: Rus, label: 'Russian', value: 'Russian' },
]

export function ComboboxDemo() {
  const [open, setOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<Languages | null>(languages[0])

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button className={'w-[100px] justify-start'} size={'sm'} variant={'default'}>
          {selectedStatus && (
            <>
              <selectedStatus.icon className={'mr-2 h-4 w-4 shrink-0'} />
              {selectedStatus.label}
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={'w-[100px] p-0 text-regular-400'}>
        <Command>
          <CommandList>
            <CommandGroup>
              {languages.map(language => (
                <CommandItem
                  key={language.value}
                  onSelect={() => {
                    setSelectedStatus(language === selectedStatus ? selectedStatus : language)
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
