import { ColumnDef } from '@tanstack/react-table'

import { User, UserTypeFromServer } from 'shared/types'
import { DataTable } from 'shared/ui'
import { formatUser } from 'shared/utils/convertedFormat'

type UsersListProps = {
  columns: ColumnDef<User>[]
  items: UserTypeFromServer[]
}

export const UsersListDataTable = ({ columns, items }: UsersListProps) => {
  const formattedData = items.map(formatUser)

  return <DataTable columns={columns} data={formattedData} />
}
