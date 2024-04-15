import { MoreHorizontal, UserMinus } from 'lucide-react'
import React, { useState } from 'react'

import { BanUser } from '../../../features/banUser'
import { User } from '../../../shared/types/user'
import { Button } from '../../../shared/ui/Button'
import { DeleteModal } from '../../../shared/ui/DeleteModal'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../../shared/ui/Dropdown-menu'

interface CellActionProps {
  data: User
}

// Fix Delete Modal
const MoreOptions = ({ data }: CellActionProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <DeleteModal isOpen={open} onClose={() => setOpen(false)} onConfirm={() => {}} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className={'h-8 w-8 p-0'} variant={'ghost'}>
            <span className={'sr-only'}>Open menu</span>
            <MoreHorizontal className={'h-4 w-4'} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align={'end'}>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <UserMinus className={'mr-2 h-4 w-4'} />
            Delete User
          </DropdownMenuItem>
          {/*<DeleteUser userId={data.userId} />*/}
          <DropdownMenuSeparator />
          <BanUser />
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <MoreHorizontal className={'mr-2 h-4 w-4'} />
            More information
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default MoreOptions
