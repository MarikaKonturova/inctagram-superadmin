import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { columnsPayments } from 'templates/profile/ui/userTablePayments/UserPaymentsColumns'

import { PaymentsUser, UserPaymentsType } from 'shared/types/user'
import { DataTable, TablePagination } from 'shared/ui'
import { formatUserPayment } from 'shared/utils/convertedFormat'

import { GET_USER_PAYMENTS } from 'entities/user/api/getUserPayments'

const UserPayments = () => {
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState('10')
  const [paymentsData, setPaymentsData] = useState<PaymentsUser>()
  const router = useRouter()
  const { userId } = router.query
  const { data } = useQuery(GET_USER_PAYMENTS, {
    variables: {
      userId: Number(userId),
      pageNumber: pageIndex + 1,
      pageSize: +pageSize,
    },
    onCompleted: (data: UserPaymentsType) => setPaymentsData(data.user.paymentsUser),
    onError: error => console.error('error', error),
  })

  const pageCount: number = data?.user.paymentsUser?.pagesCount

  const userPaymentData = paymentsData?.items.map(formatUserPayment)

  return (
    <div>
      {userPaymentData && (
        <DataTable className={'max-w-[972px]'} columns={columnsPayments} data={userPaymentData} />
      )}
      {pageCount > 1 && (
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

export default UserPayments
