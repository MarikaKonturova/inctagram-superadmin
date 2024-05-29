import { useRouter } from 'next/router'
import React, { useState } from 'react'

import { columnsFollow } from 'templates/profile/ui/userProfilePage/userFollowPage/UserColumnsTable'

import { DataTable, TablePagination } from 'shared/ui'
import { formatFollowUser } from 'shared/utils/convertedFormat'

import { useGetUserFollowQuery } from 'entities/user'

type UserProps = {
  selector: 'Followers' | 'Following'
}

export const UserFollowersFollowing = (props: UserProps) => {
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState<string>('10')
  const router = useRouter()
  const { userId } = router.query
  const { data } = useGetUserFollowQuery({
    variables: { userId: Number(userId), pageNumber: pageIndex + 1, pageSize: +pageSize },
  })

  const userData =
    props.selector === 'Followers'
      ? data?.user.followersUser.items || []
      : data?.user.followingUser.items || []

  const formattedData = userData.map(formatFollowUser)

  const pagesCountMath =
    props.selector === 'Followers'
      ? Math.ceil((data?.user.followerCount || 1) / +pageSize)
      : Math.ceil((data?.user.followingCount || 1) / +pageSize)

  return (
    <div>
      <DataTable columns={columnsFollow} data={formattedData} className={'lg:w-[972px]'} />
      <TablePagination
        pageIndex={pageIndex}
        pageSize={pageSize}
        pagesCount={pagesCountMath}
        setPageIndex={setPageIndex}
        setPageSize={setPageSize}
      />
    </div>
  )
}
