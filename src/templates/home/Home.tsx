import { useEffect, useState } from 'react'

import { useGetAllUsersQuery } from '../../entities/users/model/users.generated'
import { UsersList } from '../../entities/users/ui/UsersList'
import { TablePagination } from '../../shared/ui/Pagination'
import { columns } from './ui/columns'

export const Home = () => {
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState('10')

  useEffect(() => {
    setPageIndex(0)
  }, [pageSize])

  const { data, previousData } = useGetAllUsersQuery({
    variables: {
      pageNumber: pageIndex + 1,
      pageSize: +pageSize,
    },
  })

  return (
    <div
      className={'h-[1000px] flex items-center justify-center bg-black text-white flex-col gap-8'}
    >
      {data?.users.items && <UsersList columns={columns} items={data?.users.items} />}
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
