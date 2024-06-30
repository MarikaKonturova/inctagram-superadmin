import { UserMinus } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { User } from 'shared/types'
import { DeleteModal, Button } from 'shared/ui'

import { useDeleteUserMutation } from 'features/deleteUser/api/deleteUser.types'

export const DeleteUser = (data: User) => {
  const [open, setOpen] = useState(false)
  const [deleteUser] = useDeleteUserMutation()

  const onConfirm = async () => {
    try {
      await deleteUser({
        variables: {
          userId: data.userId,
        },
      })
      toast.success('User has been deleted')
    } catch (error) {
      toast.error(error?.toString())
    } finally {
      setOpen(false)
    }
  }

  return (
    <>
      <DeleteModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        userName={data.userName}
      />
      <Button
        variant={'ghost'}
        className={
          'w-full relative text-black flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 dark:text-white'
        }
        onClick={() => setOpen(true)}
      >
        <UserMinus className={'mr-2 h-4 w-4'} />
        Delete User
      </Button>
    </>
  )
}
