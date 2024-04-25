import { type NextPage } from 'next'
import { type PropsWithChildren } from 'react'

import { Container } from 'shared/ui'

import { Header } from 'widgets/header'

interface LayoutProps extends PropsWithChildren {
  withAuth?: boolean
}

export const Layout: NextPage<LayoutProps> = props => {
  const { children } = props

  return (
    <div>
      <Header />
      <main className={'h-[calc(100vh-60px)][transition:background-color_0.5s]'}>{children}</main>
    </div>
  )
}
