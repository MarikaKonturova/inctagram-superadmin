import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { type ReactNode } from 'react'

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
    ['text-primary-500 fill-primary-500']: active,
  }

  return (
    <Link href={href} legacyBehavior>
      <a
        className={clsx(
          'inline-flex text-light-100 no-underline hover:no-underline',
          mods,
          className
        )}
        {...rest}
      >
        {children}
      </a>
    </Link>
  )
}
