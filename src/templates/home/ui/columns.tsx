import { CaretSortIcon } from '@radix-ui/react-icons'
import { ColumnDef } from '@tanstack/table-core'
import { BanIcon } from 'lucide-react'

import { User } from '../../../shared/types/user'
import MoreOptions from './MoreOptions'

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'ban',
    cell: ({ row }) => {
      if (row.original.ban === 'Active') {
        return <BanIcon />
      }
    },
    header: '',
  },
  {
    accessorKey: 'userId',
    header: 'User ID',
  },
  {
    accessorKey: 'userName',
    cell: ({ row }) => <div className={'lowercase'}>{row.getValue('userName')}</div>,
    header: ({ column }) => {
      return (
        <div
          className={'flex cursor-pointer'}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          User Name
          <CaretSortIcon className={'ml-2 h-4 w-4'} />
        </div>
      )
    },
  },
  {
    accessorKey: 'profileLink',
    header: 'Profile Link',
  },
  {
    accessorKey: 'dataAdded',
    cell: ({ row }) => <div className={'lowercase'}>{row.getValue('dataAdded')}</div>,
    header: ({ column }) => {
      return (
        <div
          className={'flex cursor-pointer'}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Data Added
          <CaretSortIcon className={'ml-2 h-4 w-4'} />
        </div>
      )
    },
  },
  {
    cell: ({ row }) => <MoreOptions data={row.original} />,
    id: 'actions',
  },
]
