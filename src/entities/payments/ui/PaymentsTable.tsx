import { ColumnDef } from '@tanstack/table-core'

import type { Payments } from 'templates/paymentsList/ui/PaymentsColumnsTable'

import { DataTable } from 'shared/ui'

import type { GetAllPaymentsQuery } from 'entities/payments/api/getAllPayments.types'

interface PaymentsListProps {
  data?: GetAllPaymentsQuery
  columns: ColumnDef<Payments>[]
}

export const PaymentsTable = ({ data, columns }: PaymentsListProps) => {
  const formattedData = data?.paymentsList.items.map(item => ({
    urlAvatar: item.urlAvatar,
    userName: item.userName,
    userId: item.userId,
    amount: item.amount,
    typeSubscription: item.typeSubscription,
    createdAt: item.createdAt,
    paymentTypeText: item.paymentTypeText,
  }))

  return <DataTable columns={columns} data={formattedData || []} />
}
