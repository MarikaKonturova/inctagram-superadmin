import { CaretSortIcon } from '@radix-ui/react-icons'
import { ColumnDef } from '@tanstack/table-core'
import Image from 'next/image'

import { convertDateFormat } from 'shared/utils/convertedFormat'

interface Payments {
  urlAvatar?: string | null
  userName: string
  userId: number
  amount: string
  typeSubscription: string
  createdAt: string
  paymentTypeText: string
}

export const paymentsColumnsTable: ColumnDef<Payments>[] = [
  {
    accessorKey: 'userName',
    cell: ({ row }) => (
      <div className={'flex gap-3 items-center ml-6'}>
        {row.original.urlAvatar && (
          <Image width={36} height={36} src={row.original.urlAvatar} alt={'avatar'} />
        )}
        <div>{row.getValue('userName')}</div>
      </div>
    ),
    header: ({ column }) => {
      return (
        <div
          className={'flex cursor-pointer items-center ml-6'}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          User Name
          <CaretSortIcon className={'ml-2 h-4 w-4'} />
        </div>
      )
    },
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <div
          className={'flex cursor-pointer items-center'}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Data Added
          <CaretSortIcon className={'ml-2 h-4 w-4'} />
        </div>
      )
    },
    cell: info => convertDateFormat(info.getValue() as string),
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <div
          className={'flex cursor-pointer items-center'}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Amount, $
          <CaretSortIcon className={'ml-2 h-4 w-4'} />
        </div>
      )
    },
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'typeSubscription',
    header: 'Subscription',
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'paymentTypeText',
    header: ({ column }) => {
      return (
        <div
          className={'flex cursor-pointer items-center'}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Payment Method
          <CaretSortIcon className={'ml-2 h-4 w-4'} />
        </div>
      )
    },
    cell: info => info.getValue(),
  },
]
