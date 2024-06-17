import { useRouter } from 'next/router'
import { useState } from 'react'

import { PaymentsUser } from 'shared/types'
import { DataTable, TablePagination } from 'shared/ui'
import { formatUserPayment } from 'shared/utils/convertedFormat'

import { useGetUserPaymentsQuery, GetUserPaymentsQuery } from 'entities/user'

import { columnsPayments } from './UserPaymentsColumns'

export const UserPayments = () => {
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState('10')
  const [paymentsData, setPaymentsData] = useState<PaymentsUser>()
  const router = useRouter()
  const { userId } = router.query
  const { data } = useGetUserPaymentsQuery({
    variables: {
      userId: Number(userId),
      pageNumber: pageIndex + 1,
      pageSize: +pageSize,
    },
    onCompleted: (data: GetUserPaymentsQuery) => setPaymentsData(data.user.paymentsUser),
    onError: error => console.error('error', error),
  })

  const pageCount: number | undefined = data?.user.paymentsUser?.pagesCount

  const userPaymentData = paymentsData?.items.map(formatUserPayment)

  return (
    <div>
      {userPaymentData && (
        <DataTable className={'max-w-[972px]'} columns={columnsPayments} data={userPaymentData} />
      )}
      {pageCount !== undefined && pageCount > 1 && (
        <TablePagination
          pageIndex={pageIndex}
          pageSize={pageSize}
          pagesCount={pageCount}
          setPageIndex={setPageIndex}
          setPageSize={setPageSize}
        />
      )}
    </div>
  )
}
