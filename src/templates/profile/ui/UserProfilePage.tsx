import { useRouter } from 'next/router'

import { useGetUserQuery } from 'entities/user/api/getUser.types'
import { MainUserInfo } from 'entities/user/ui/MainUserInfo'

import { UserTabs } from './UserTabs'

export const UserProfilePage = () => {
  const router = useRouter()
  const { userId } = router.query
  const { data } = useGetUserQuery({
    variables: { userId: Number(userId) },
  })

  return (
    <div className={'flex flex-col w-full pl-5 pb-10'}>
      <div className={'flex flex-col w-full'}>
        {data ? <MainUserInfo userData={data} /> : <div>No user found</div>}
      </div>
      <div className={'pt-7 overflow-scroll'}>
        <UserTabs />
      </div>
    </div>
  )
}
