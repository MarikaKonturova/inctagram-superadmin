import { useMutation } from '@apollo/client'
import { UserMinus } from 'lucide-react'
import React, { useState } from 'react'

import { DeleteModal } from '../../../shared/ui/DeleteModal'
import { DropdownMenuItem } from '../../../shared/ui/Dropdown-menu'
import { DELETE_USER } from '../api/delete'

export const DeleteUser = ({ userId }: any) => {
  const [open, setOpen] = useState(false)
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
