import { useMutation } from '@apollo/client'
import { UserMinus } from 'lucide-react'
import { useState } from 'react'

import { useTranslation } from 'shared/hooks'
import { User } from 'shared/types'
import { Button, DeleteModal } from 'shared/ui'

import { DELETE_USER } from 'features/deleteUser/api/deleteUser'

export const DeleteUser = (data: User) => {
  const t = useTranslation()
  const [open, setOpen] = useState(false)
  const [deleteUser] = useMutation(DELETE_USER)

  const onConfirm = async () => {
    try {
      await deleteUser({
        variables: {
          userId: data.userId,
        },
      })
      console.log('User has been deleted')
    } catch (error) {
      console.log(error)
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
        {t.modals.deleteUser}
      </Button>
    </>
  )
}
