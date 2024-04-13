import { Layout } from 'layouts'

import { getLayoutWithSidebar } from '../layouts/layoutWithSidebar/LayoutWithSidebar'
import { Header } from '../widgets/header'
import { Sidebar } from '../widgets/sidebar'

export default function Test() {
  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  )
}

Test.getLayout = getLayoutWithSidebar
