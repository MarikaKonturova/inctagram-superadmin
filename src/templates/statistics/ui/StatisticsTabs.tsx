import { useTranslation } from 'shared/hooks'
import { TabsTrigger, TabsContent, TabsList, Tabs } from 'shared/ui'

import { Photos } from './Photos'
import { UsersAndPaidAccounts } from './UsersAndPaidAccounts'

export const StatisticsTabs = () => {
  const t = useTranslation()

  const TABS_NAMES = {
    USERS: t.statistics.users,
    PHOTOS: t.statistics.photos,
  }

  const STATISTICS_TABS = [
    { content: <UsersAndPaidAccounts />, label: TABS_NAMES.USERS, value: 'tab1' },
    {
      content: <Photos />,
      label: TABS_NAMES.PHOTOS,
      value: 'tab2',
    },
  ]
  const getLabelsTabs = STATISTICS_TABS.map((el, i) => (
    <TabsTrigger key={i} value={el.value}>
      {el.label}
    </TabsTrigger>
  ))

  const getContentTabs = STATISTICS_TABS.map((el, i) => (
    <TabsContent key={i} value={el.value}>
      {el.content}
    </TabsContent>
  ))

  return (
    <Tabs defaultValue={STATISTICS_TABS[0].value}>
      <TabsList>{getLabelsTabs}</TabsList>
      {getContentTabs}
    </Tabs>
  )
}
