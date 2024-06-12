import UserPosts from 'templates/profile/ui/UserPosts'
import { UserFollowersFollowing } from 'templates/profile/ui/userProfilePage/userFollowPage/UserFollowersFollowing'
import UserPayments from 'templates/profile/ui/userTablePayments/UserPayments'

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
    { content: <UserPosts />, label: TABS_NAMES.UPLOADED_PHOTOS, value: 'tab1' },
    {
      content: <UserPayments />,
      label: TABS_NAMES.PAYMENTS,
      value: 'tab2',
    },
    {
      content: <UserFollowersFollowing selector={'Followers'} />,
      label: TABS_NAMES.FOLLOWERS,
      value: 'tab3',
    },
    {
      content: <UserFollowersFollowing selector={'Following'} />,
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
