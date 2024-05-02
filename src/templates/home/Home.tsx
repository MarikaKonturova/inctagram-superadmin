import { useEffect, useState } from 'react'

import { TablePagination } from 'shared/ui'

import { UsersList, useGetAllUsersQuery } from 'entities/users'

import { columns } from './ui/UsersColumnsTable'

export const Home = () => {
  const [pageIndex, setPageIndex] = useState(0)

  const [pageSize, setPageSize] = useState('10')

  useEffect(() => {
    setPageIndex(0)
  }, [pageSize])

  const { data, loading, previousData } = useGetAllUsersQuery({
    variables: {
      pageNumber: pageIndex + 1,
      pageSize: +pageSize,
    },
  })

  const usersData = loading && previousData ? previousData : data

  return (
    <div className={'h-[1000px] flex items-center justify-center flex-col gap-8'}>
      <UsersList columns={columns} items={usersData?.users.items || []} />
      <TablePagination
        pageIndex={pageIndex}
        pageSize={pageSize}
        pagesCount={data?.users.pagesCount || previousData?.users.pagesCount || 1}
        setPageIndex={setPageIndex}
        setPageSize={setPageSize}
      />
    </div>
  )
}
