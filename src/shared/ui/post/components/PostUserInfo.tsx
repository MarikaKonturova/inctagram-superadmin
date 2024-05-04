import { Ban, UserPlus } from 'lucide-react'
import Image from 'next/image'

import { Button } from 'shared/ui'

type PostUserInfoType = {
  avatar: string
  banned: boolean
  userName: string
  darkTheme: boolean
}

export const PostUserInfo = ({ avatar, banned, userName, darkTheme }: PostUserInfoType) => {
  return (
    <div className={'flex flex-row justify-between items-center mb-3'}>
      <div className={'flex flex-row items-center'}>
        <Image
          alt={'sd'}
          className={'h-9 w-9 object-cover rounded-full mr-2'}
          src={avatar}
          width={500}
          height={100}
        />
        <p
          className={`font-inter text-base font-semibold leading-6 tracking-normal ${darkTheme ? 'text-light-900' : 'text-dark-900'}`}
        >
          {userName}
        </p>
      </div>
      <Button className={'w-4 p-0'} variant={'clear'}>
        {banned ? (
          <UserPlus
            className={`mr-2 h-4 w-4 ${darkTheme ? 'text-light-900' : 'text-dark-900'}`}
            onClick={() => alert('Unban')}
          />
        ) : (
          <Ban
            className={`mr-2 h-4 w-4 ${darkTheme ? 'text-light-900' : 'text-dark-900'}`}
            onClick={() => alert('Ban')}
          />
        )}
      </Button>
    </div>
  )
}
