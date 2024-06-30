import { Ban, UserPlus } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { User } from 'shared/types'
import { Button } from 'shared/ui'
import { UnBanModal } from 'shared/ui/UnBanModal'

import { GetPostsDocument } from 'entities/postsList/api/getPosts.types'
import { GetAllUsersDocument } from 'entities/users/api/getAllUsers.types'

import { useUpdateUserStatusMutation } from 'features/banOrUnbanUser/api/updateUserStatus.types'

type UnBanUserProps = User & {
  showText: boolean
}

export const UnBanUser = ({ showText, ...data }: UnBanUserProps) => {
  const [open, setOpen] = useState(false)

  const [updateUserStatus] = useUpdateUserStatusMutation()

  const onConfirm = async () => {
    try {
      await updateUserStatus({
        variables: {
          userId: data.userId,
          isBanned: false,
        },
        refetchQueries: [GetAllUsersDocument, GetPostsDocument],
      })
      toast.success('User has been unbanned')
    } catch (error) {
      toast.error(error?.toString())
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
      {showText ? (
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
      ) : (
        <Button className={'w-4 p-0'} variant={'clear'}>
          <UserPlus className={`mr-2 h-4 w-4 text-light-100`} onClick={() => setOpen(true)} />
        </Button>
      )}
    </>
  )
}
