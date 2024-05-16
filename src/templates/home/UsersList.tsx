import { useEffect, useState } from 'react'

import { UseDebounce } from 'shared/hooks/UseDebounce'
import { UserStatusInputType } from 'shared/types/user'
import { TablePagination } from 'shared/ui'

import { useGetAllUsersQuery, UsersListDataTable } from 'entities/users'
import UserToolbar from 'entities/users/ui/UserToolbar'

import { columns } from './ui/UsersColumnsTable'

export function UsersList() {
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState('10')
  const [status, setStatus] = useState<UserStatusInputType>(UserStatusInputType.All)
  const [searchInput, setSearchInput] = useState<string>('')

  useEffect(() => {
    setPageIndex(0)
  }, [pageSize])

  const search = UseDebounce(searchInput, 500)

  const { data, loading, previousData } = useGetAllUsersQuery({
    variables: {
      pageNumber: pageIndex + 1,
      pageSize: +pageSize,
      search,
      status,
    },
  })

  const usersData = loading && previousData ? previousData : data

  return (
    <div className={'h-[1000px] flex items-center justify-center flex-col gap-8'}>
      <UserToolbar
        userStatus={status}
        setUserStatus={setStatus}
        search={searchInput}
        setSearch={setSearchInput}
      />
      <UsersListDataTable columns={columns} items={usersData?.users.items || []} />
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
