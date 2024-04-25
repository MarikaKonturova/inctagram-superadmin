import { Ban, UserPlus } from 'lucide-react'
import React from 'react'
import { Button } from 'shared/ui'

type PostUserInfoType = {
  avatar: string
  banned: boolean
  userName: string
}

export const PostUserInfo = ({ avatar, banned, userName }: PostUserInfoType) => {
  return (
    <div className={'flex flex-row justify-between items-center mb-3'}>
      <div className={'flex flex-row items-center'}>
        <img alt={'sd'} className={'h-9 w-9 object-cover rounded-full mr-2'} src={avatar} />
        <p className={'font-inter text-base font-semibold leading-6 tracking-normal'}>{userName}</p>
      </div>
      <Button className={'w-4 p-0'} variant={'clear'}>
        {banned ? (
          <UserPlus className={'mr-2 h-4 w-4'} onClick={() => alert('Unban')} />
        ) : (
          <Ban className={'mr-2 h-4 w-4'} onClick={() => alert('Ban')} />
        )}
      </Button>
    </div>
  )
}
