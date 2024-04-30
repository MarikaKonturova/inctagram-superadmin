import { ColumnDef } from '@tanstack/react-table'

import { User } from 'shared/types'
import { UserTypeFromServer } from 'shared/types/user'
import { DataTable } from 'shared/ui'
import { convertDateFormat } from 'shared/utils/convertedFormat'

type UsersListProps = {
  columns: ColumnDef<User>[]
  items: UserTypeFromServer[]
}

export const UsersList = ({ columns, items }: UsersListProps) => {
  const formattedData = items.map((user: UserTypeFromServer) => ({
    ban: user.status === 'BANNED' ? 'Active' : '',
    dataAdded: convertDateFormat(user.createdAt),
    profileLink: user.fullName,
    userId: Number(user.userId),
    userName: user.userName,
  }))

  return <DataTable columns={columns} data={formattedData} searchKey={'userName'} />
}
