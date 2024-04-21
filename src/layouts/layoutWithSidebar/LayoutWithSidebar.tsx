import { type NextPage } from 'next'
import { type PropsWithChildren, type ReactElement, Suspense } from 'react'
import { Sidebar } from 'widgets/sidebar'

import { Layout } from '../layout/Layout'

export const LayoutWithSidebar: NextPage<PropsWithChildren> = ({ children }) => (
  <Layout>
    <div className={'flex w-full'}>
      <Sidebar />
      <Suspense fallback={<div>Loading...</div>}>
        <div className={'overflow-y-auto flex flex-1 h-calc(100vh - 60px) px-14 py-0'}>
          {children}
        </div>
      </Suspense>
    </div>
  </Layout>
)

export const getLayoutWithSidebar = (page: ReactElement) => {
  return <LayoutWithSidebar>{page}</LayoutWithSidebar>
}
