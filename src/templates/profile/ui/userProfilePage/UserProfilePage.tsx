import { useQuery } from '@apollo/client'
import { GET_USER } from 'entities/user/api/user'
import { MainUserInfo } from 'entities/user/ui/MainUserInfo'
import { useRouter } from 'next/router'
import NotFound from 'pages/404'
import { UserForSuperAdminViewModel } from 'shared/types/types'

import { UserTabs } from './userTabs'

export const UserProfilePage = () => {
  const router = useRouter()
  const { userId } = router.query
  const { data, loading } = useQuery<UserForSuperAdminViewModel>(GET_USER, {
    fetchPolicy: 'cache-and-network',
    onError: error => console.error('error', error),
    variables: { userId: Number(userId) },
  })

  return (
    <div className={'flex flex-col w-full pl-5 '}>
      <div className={'flex flex-col w-full'}>
        {data ? <MainUserInfo userData={data} /> : <NotFound />}
      </div>
      <div className={'pt-7'}>{data && <UserTabs />}</div>
    </div>
  )
}
