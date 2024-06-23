import { CaretSortIcon } from '@radix-ui/react-icons'
import { ColumnDef } from '@tanstack/table-core'
import { BanIcon } from 'lucide-react'
//@ts-expect-error paths from ts-config does not recognize path to public folder
import { LocaleType } from 'public/locales'

import { User } from 'shared/types'

import MoreOptions from './UsersMoreOptions'
export const getColums = () => {}
export const columns = (t: LocaleType): ColumnDef<User>[] => {
  return [
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
      header: t.userList.userId,
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
            {t.userList.userName}
            <CaretSortIcon className={'ml-2 h-4 w-4'} />
          </div>
        )
      },
    },
    {
      accessorKey: 'profileLink',
      header: t.userList.profileLink,
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
            {t.userList.dataAdded}
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
}
