import { getLayoutWithSidebar } from 'layouts/layoutWithSidebar/LayoutWithSidebar'

export default function Test() {
  return <div>Hello, Test</div>
}

Test.getLayout = getLayoutWithSidebar
