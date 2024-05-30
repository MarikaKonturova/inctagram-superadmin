import { useTranslation } from 'shared/hooks'
import { TabsTrigger, TabsContent, TabsList, Tabs } from 'shared/ui'

export const UserTabs = () => {
  const t = useTranslation()

  const TABS_NAMES = {
    FOLLOWERS: t.userProfile.tabs.followers,
    FOLLOWING: t.userProfile.tabs.following,
    PAYMENTS: t.userProfile.tabs.payments,
    UPLOADED_PHOTOS: t.userProfile.tabs.uploadedPhotos,
  }

  const USER_TABS = [
    { content: 'Uploaded Photos', label: TABS_NAMES.UPLOADED_PHOTOS, value: 'tab1' },
    {
      content: 'Payments',
      label: TABS_NAMES.PAYMENTS,
      value: 'tab2',
    },
    {
      content: 'Followers',
      label: TABS_NAMES.FOLLOWERS,
      value: 'tab3',
    },
    {
      content: 'Following',
      label: TABS_NAMES.FOLLOWING,
      value: 'tab4',
    },
  ]
  const getLabelsTabs = USER_TABS.map((el, i) => (
    <TabsTrigger key={i} value={el.value}>
      {el.label}
    </TabsTrigger>
  ))

  const getContentTabs = USER_TABS.map((el, i) => (
    <TabsContent key={i} value={el.value}>
      {el.content}
    </TabsContent>
  ))

  return (
    <Tabs defaultValue={USER_TABS[0].value}>
      <TabsList>{getLabelsTabs}</TabsList>
      {getContentTabs}
    </Tabs>
  )
}
