import { useRouter } from 'next/router'
import { useState } from 'react'

import { useGetUserQuery } from 'entities/user/api/getUser.types'
import { MainUserInfo } from 'entities/user/ui/MainUserInfo'

import { UserTabs } from './UserTabs'

export const UserProfilePage = () => {
  const [pageIndex] = useState(0)
  const [pageSize] = useState('10')
  const router = useRouter()
  const { userId } = router.query
  const { data } = useGetUserQuery({
    //TODO убрать после разделения
    variables: { userId: Number(userId), pageNumber: pageIndex + 1, pageSize: +pageSize },
  })

  return (
    <div className={'flex flex-col w-full pl-5 '}>
      <div className={'flex flex-col w-full'}>
        {data ? <MainUserInfo userData={data} /> : <div>No user found</div>}
      </div>
      <div className={'pt-7'}>{data && <UserTabs />}</div>
    </div>
  )
}
