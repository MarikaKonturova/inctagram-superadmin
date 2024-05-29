import { UserFollowersFollowing } from 'templates/profile/ui/userProfilePage/userFollowPage/UserFollowersFollowing'

import { TabsTrigger, TabsContent, TabsList, Tabs } from 'shared/ui'

const TABS_NAMES = {
  FOLLOWERS: 'Followers',
  FOLLOWING: 'Following',
  PAYMENTS: 'Payments',
  UPLOADED_PHOTOS: 'Uploaded Photos',
}

const USER_TABS = [
  { content: 'Uploaded Photos', label: TABS_NAMES.UPLOADED_PHOTOS },
  {
    content: 'Payments',
    label: TABS_NAMES.PAYMENTS,
  },
  {
    content: <UserFollowersFollowing selector={'Followers'} />,
    label: TABS_NAMES.FOLLOWERS,
  },
  {
    content: <UserFollowersFollowing selector={'Following'} />,
    label: TABS_NAMES.FOLLOWING,
  },
]

export const UserTabs = () => {
  const getLabelsTabs = USER_TABS.map((el, i) => (
    <TabsTrigger key={i} value={el.label}>
      {el.label}
    </TabsTrigger>
  ))

  const getContentTabs = USER_TABS.map((el, i) => (
    <TabsContent key={i} value={el.label}>
      {el.content}
    </TabsContent>
  ))

  return (
    <Tabs defaultValue={TABS_NAMES.UPLOADED_PHOTOS}>
      <TabsList>{getLabelsTabs}</TabsList>
      {getContentTabs}
    </Tabs>
  )
}
