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
