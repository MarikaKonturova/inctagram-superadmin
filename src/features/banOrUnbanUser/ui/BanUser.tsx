import { useMutation } from '@apollo/client'
import { Ban } from 'lucide-react'
import { useState } from 'react'

import { BanReasonInputType, User } from 'shared/types/user'
import { Button } from 'shared/ui'
import { BanModal } from 'shared/ui/BanModal'

import { GetAllUsersDocument } from 'entities/users/api/getAllUsers.types'

import { UPDATE_USER_STATUS } from 'features/banOrUnbanUser/api/updateUserStatus'

export const BanUser = (data: User) => {
  const [open, setOpen] = useState(false)
  const [updateUserStatus] = useMutation(UPDATE_USER_STATUS)
  const [banReason, setBanReason] = useState<BanReasonInputType>(BanReasonInputType.BadBehavior)
  const [details, setDetails] = useState<string>('')

  const onConfirm = async () => {
    try {
      await updateUserStatus({
        variables: {
          userId: data.userId,
          banReason: banReason,
          isBanned: true,
          details: details,
        },
        refetchQueries: [GetAllUsersDocument],
      })

      console.log('User has been banned')
    } catch (error) {
      console.log(error)
    } finally {
      setOpen(false)
    }
  }

  return (
    <>
      <BanModal
        isOpen={open}
        onClose={() => setOpen(false)}
        userData={data}
        onConfirm={onConfirm}
        banReason={banReason}
        setBanReason={setBanReason}
        details={details}
        setDetails={setDetails}
      />
      <Button
        variant={'ghost'}
        className={
          'w-full relative flex cursor-default text-black select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 dark:text-white'
        }
        onClick={() => setOpen(true)}
      >
        <Ban className={'mr-2 h-4 w-4'} />
        Ban in the system
      </Button>
    </>
  )
}
