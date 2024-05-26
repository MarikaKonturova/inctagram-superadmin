import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from 'shared/ui'

import { useGetUserQuery } from 'entities/user'

type PropsType = {
  name: 'Followers' | 'Following'
}

export const UserTable: React.FC<PropsType> = props => {
  const router = useRouter()
  const { userId } = router.query
  const { data } = useGetUserQuery({ variables: { userId: Number(userId) } })

  const users =
    props.name === 'Followers'
      ? data?.user.followersUser.items || []
      : data?.user.followingUser.items || []

  return (
    <Table>
      <TableHeader className={'bg-dark-500'}>
        <TableRow>
          <TableHead>UserID</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Profile link</TableHead>
          <TableHead>Subscription Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.length > 0 ? (
          users.map(user => (
            <TableRow key={user.userId}>
              <TableCell>{user.userId}</TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell>
                <Link
                  target={'_blank'}
                  href={`https://inctagram-v2.vercel.app/profile/${user.userName}`}
                >
                  <span
                    className={
                      'transition-colors outline-none text-medium-400 underline hover:text-primary-100'
                    }
                  >
                    {user.userName}
                  </span>
                </Link>
              </TableCell>
              <TableCell>{user.createdAt}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell className={'h-24 text-center'} colSpan={4}>
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
