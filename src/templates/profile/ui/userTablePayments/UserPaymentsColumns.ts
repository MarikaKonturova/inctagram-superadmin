import { ColumnDef } from '@tanstack/table-core'

import { ConvertedUserPayments } from 'shared/types'

type ColumnsType = ConvertedUserPayments | undefined

export const columnsPayments: ColumnDef<ColumnsType>[] = [
  {
    accessorKey: 'dataOfPayment',
    header: 'Data of Payment',
  },
  {
    accessorKey: 'endDateOfSubscription',
    header: 'End Date Of Subscription',
  },
  {
    accessorKey: 'amount',
    header: 'Amount $',
  },
  {
    accessorKey: 'subscriptionType',
    header: 'Subscription Type',
  },
  {
    accessorKey: 'paymentType',
    header: 'Payment Type',
  },
]
