import { type NextPage } from 'next'
import { type PropsWithChildren, type ReactElement, Suspense } from 'react'

import { Layout } from 'layouts/layout/Layout'

import { ToasterSonner } from 'shared/ui'

import { Sidebar } from 'widgets/sidebar'

export const LayoutWithSidebar: NextPage<PropsWithChildren> = ({ children }) => (
  <Layout>
    <div className={'flex w-full'}>
      <Sidebar />
      <Suspense fallback={<div>Loading...</div>}>
        <div className={'overflow-y-auto flex-col flex-1 h-[calc(100vh-60px)] px-14 py-0'}>
          {children}
        </div>
      </Suspense>
    </div>
    <ToasterSonner />
  </Layout>
)

export const getLayoutWithSidebar = (page: ReactElement) => {
  return <LayoutWithSidebar>{page}</LayoutWithSidebar>
}
