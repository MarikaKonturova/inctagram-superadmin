import { CaretSortIcon } from '@radix-ui/react-icons'
import { ColumnDef } from '@tanstack/table-core'
import Link from 'next/link'

import { User } from 'shared/types'

export const columns: ColumnDef<User>[] = [
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
    cell: ({ row }) => {
      const userName = row.getValue<string>('profileLink')

      return (
        <Link href={`https://inctagram-v2.vercel.app/profile/${userName}`} target={'_blank'}>
          <span
            className={
              'transition-colors outline-none text-medium-400 underline hover:text-primary-100'
            }
          >
            {userName}
          </span>
        </Link>
      )
    },
  },
  {
    accessorKey: 'createdAt',
    cell: ({ row }) => <div className={'lowercase'}>{row.getValue('createdAt')}</div>,
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
]
