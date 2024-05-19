import { useMutation } from '@apollo/client'
import { Ban } from 'lucide-react'
import { useState } from 'react'

import { User } from 'shared/types/user'
import { Button } from 'shared/ui'
import { UnBanModal } from 'shared/ui/UnBanModal'

import { GetAllUsersDocument } from 'entities/users/api/getAllUsers.types'

import { UPDATE_USER_STATUS } from 'features/banOrUnbanUser/api/updateUserStatus'

export const UnBanUser = (data: User) => {
  const [open, setOpen] = useState(false)
  const [updateUserStatus] = useMutation(UPDATE_USER_STATUS)

  const onConfirm = async () => {
    try {
      await updateUserStatus({
        variables: {
          userId: data.userId,
          isBanned: false,
        },
        refetchQueries: [GetAllUsersDocument],
      })
    } catch (error) {
      console.log('Error', error)
    } finally {
      setOpen(false)
    }
  }

  return (
    <>
      <UnBanModal
        isOpen={open}
        onClose={() => setOpen(false)}
        userName={data.userName}
        onConfirm={onConfirm}
      />
      <Button
        variant={'ghost'}
        className={
          'w-full relative flex cursor-default text-black select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 dark:text-white'
        }
        onClick={() => setOpen(true)}
      >
        <Ban className={'mr-2 h-4 w-4'} />
        Unban in the system
      </Button>
    </>
  )
}
