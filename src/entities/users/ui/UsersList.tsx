import { ColumnDef } from '@tanstack/react-table'
import { useState } from 'react'

import { User } from 'shared/types'
import { UserTypeFromServer } from 'shared/types/user'
import { DataTable } from 'shared/ui'
import { formatUser } from 'shared/utils/convertedFormat'

const SHOW_BLOCKED = 'Blocked'
const SHOW_NOT_BLOCKED = 'Not Blocked'

type UsersListProps = {
  columns: ColumnDef<User>[]
  items: UserTypeFromServer[]
}

export const UsersList = ({ columns, items }: UsersListProps) => {
  const [showBlocked, setShowBlocked] = useState<'Not Selected' | 'Not Blocked' | 'Blocked'>(
    'Not Selected'
  )

  const filterUsers = (user: UserTypeFromServer) => {
    switch (showBlocked) {
      case SHOW_BLOCKED:
        return user.status === 'BANNED'
      case SHOW_NOT_BLOCKED:
        return user.status !== 'BANNED'
      default:
        return true
    }
  }

  const formattedData = items.filter(filterUsers).map(formatUser)

  return (
    <DataTable
      columns={columns}
      data={formattedData}
      searchKey={'userName'}
      showBlocked={showBlocked}
      setShowBlocked={setShowBlocked}
    />
  )
}
