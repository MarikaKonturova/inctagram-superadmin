import { ColumnDef } from '@tanstack/react-table'

import { User } from 'shared/types'
import { UserTypeFromServer } from 'shared/types/user'
import { DataTable } from 'shared/ui'
import { formatUser } from 'shared/utils/convertedFormat'

type UsersListProps = {
  columns: ColumnDef<User>[]
  items: UserTypeFromServer[]
}

export const UsersList = ({ columns, items }: UsersListProps) => {
  const formattedData = items.map(formatUser)

  return <DataTable columns={columns} data={formattedData} />
}
