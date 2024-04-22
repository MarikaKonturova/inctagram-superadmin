import { useMutation } from '@apollo/client'
import { UserMinus } from 'lucide-react'
import { useState } from 'react'

import { DropdownMenuItem, DeleteModal } from 'shared/ui'

import { DELETE_USER } from 'features/deleteUser/api/delete'

export const DeleteUser = ({ userId }: { userId: string }) => {
  const [open, setOpen] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [deleteUser] = useMutation(DELETE_USER)

  return (
    <>
      <DeleteModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => console.log(userId)}
      />
      <DropdownMenuItem onClick={() => setOpen(true)}>
        <UserMinus className={'mr-2 h-4 w-4'} />
        Delete User
      </DropdownMenuItem>
    </>
  )
}
