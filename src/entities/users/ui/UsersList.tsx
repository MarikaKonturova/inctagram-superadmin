import { convertDateFormat } from '../../../shared/utils/convertedFormat'
import { DataTable } from '../../../templates/home/ui/data-table'

// Fix Any

export const UsersList = ({ columns, items }: any) => {
  const formattedData = items.map((user: any) => ({
    ban: user.status === 'Ban' ? 'Active' : '',
    dataAdded: convertDateFormat(user.createdAt),
    profileLink: user.fullName,
    userId: user.userId,
    userName: user.userName,
  }))

  return <DataTable columns={columns} data={formattedData} />
}
