import { type NextPage } from 'next'
import { type PropsWithChildren } from 'react'

interface LayoutProps extends PropsWithChildren {
  withAuth?: boolean
}

export const Layout: NextPage<LayoutProps> = props => {
  const { children, withAuth = false } = props

  return (
    <div>
      <main className={'h-[calc(100vh-60px)][transition:background-color_0.5s]'}>
        <div className={'w-full h-full pl-16 m-auto'}>{children}</div>
      </main>
    </div>
  )
}
