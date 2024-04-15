import { Ban } from 'lucide-react'
import React from 'react'

import { DropdownMenuItem } from '../../../shared/ui/Dropdown-menu'

export const BanUser = () => {
  return (
    <DropdownMenuItem>
      <Ban className={'mr-2 h-4 w-4'} />
      Ban in the system
    </DropdownMenuItem>
  )
}
