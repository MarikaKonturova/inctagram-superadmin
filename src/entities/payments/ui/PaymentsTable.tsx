import { DataTable } from 'shared/ui'

import { PaymentsColumnsTable } from 'entities/payments'
import type { GetAllPaymentsQuery } from 'entities/payments/api/getAllPayments.types'

interface PaymentsListProps {
  data?: GetAllPaymentsQuery
}

export const PaymentsTable = ({ data }: PaymentsListProps) => {
  const formattedData = data?.paymentsList.items.map(item => ({
    urlAvatar: item.urlAvatar,
    userName: item.userName,
    userId: item.userId,
    amount: item.amount,
    typeSubscription: item.typeSubscription,
    createdAt: item.createdAt,
    paymentTypeText: item.paymentTypeText,
  }))

  return <DataTable columns={PaymentsColumnsTable} data={formattedData || []} />
}
