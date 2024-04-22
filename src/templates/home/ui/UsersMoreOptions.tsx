import { MoreHorizontal, UserMinus } from 'lucide-react'
import { useState } from 'react'

import { User } from 'shared/types'
import {
  DeleteModal,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'shared/ui'

import { BanUser } from 'features/banUser'

interface CellActionProps {
  data: User
}

// Fix Delete Modal
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MoreOptions = ({ data }: CellActionProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <DeleteModal isOpen={open} onClose={() => setOpen(false)} onConfirm={() => {}} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <span
            className={
              'w-8 h-7 inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors  hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950'
            }
          >
            <MoreHorizontal className={'h-4 w-4'} />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align={'end'}>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <UserMinus className={'mr-2 h-4 w-4'} />
            Delete User
          </DropdownMenuItem>
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
