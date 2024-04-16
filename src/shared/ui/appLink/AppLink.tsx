import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { type ReactNode } from 'react'

import cls from './AppLink.module.css'

interface AppLinkProps {
  Icon?: any
  active?: boolean
  children?: ReactNode
  className?: string
  href?: string
  locale?: string | string[]
  skipLocaleHandling?: any
  text?: string
}

export const AppLink = (props: AppLinkProps) => {
  const { Icon, active = false, children, className, text, ...rest } = props

  const router = useRouter()

  const href = rest.href || router.asPath

  const mods = {
    [cls.active]: active,
  }

  return (
    <Link href={href} legacyBehavior>
      <a className={clsx(cls.AppLink, mods, className)} {...rest}>
        {children}
      </a>
    </Link>
  )
}

/*
type Status = {
  icon: LucideIcon
  label: string
  value: string
}

const statuses: Status[] = [
  {
    icon: HelpCircle,
    label: 'Backlog',
    value: 'backlog',
  },

]

export function ComboboxPopover() {
  const [open, setOpen] = React.useState(false)
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(null)

  return (
    <div className={'flex items-center space-x-4'}>
      <p className={'text-sm text-muted-foreground'}>Status</p>
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild>
          <Button className={'w-[150px] justify-start'} size={'sm'} variant={'outline'}>
            {selectedStatus ? (
              <>
                <selectedStatus.icon className={'mr-2 h-4 w-4 shrink-0'} />
                {selectedStatus.label}
              </>
            ) : (
              <>+ Set status</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent align={'start'} className={'p-0'} side={'right'}>
          <Command>
            <CommandInput placeholder={'Change status...'} />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {statuses.map(status => (
                  <CommandItem
                    key={status.value}
                    onSelect={value => {
                      setSelectedStatus(statuses.find(priority => priority.value === value) || null)
                      setOpen(false)
                    }}
                    value={status.value}
                  >
                    <status.icon
                      className={cn(
                        'mr-2 h-4 w-4',
                        status.value === selectedStatus?.value ? 'opacity-100' : 'opacity-40'
                      )}
                    />
                    <span>{status.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
*/
