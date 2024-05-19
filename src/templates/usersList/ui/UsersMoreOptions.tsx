import { MoreHorizontal } from 'lucide-react'
import { useRouter } from 'next/router'

import { User } from 'shared/types'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'shared/ui'

import { BanUser } from 'features/banOrUnbanUser'
import { UnBanUser } from 'features/banOrUnbanUser/ui/UnBanUser'
import { DeleteUser } from 'features/deleteUser'

interface CellActionProps {
  data: User
}

const MoreOptions = ({ data }: CellActionProps) => {
  const router = useRouter()

  return (
    <>
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
          <DeleteUser {...data} />
          <DropdownMenuSeparator />
          {data.ban === 'Active' ? <UnBanUser {...data} /> : <BanUser {...data} />}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => router.push(`/profile/${data.userId}`)}>
            <MoreHorizontal className={'mr-2 h-4 w-4'} />
            More information
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default MoreOptions
