import { type NextPage } from 'next'
import { type PropsWithChildren } from 'react'

interface LayoutProps extends PropsWithChildren {
  withAuth?: boolean
}

export const Layout: NextPage<LayoutProps> = () => {
  return <div></div>
}
