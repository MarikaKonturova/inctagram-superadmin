import { Ban, UserPlus } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

import { Button } from 'shared/ui'

type PostUserInfoType = {
  avatar: string | StaticImageData
  isBanned: boolean
  userName: string
}

export const PostUserInfo = ({ avatar, isBanned, userName }: PostUserInfoType) => {
  return (
    <div className={'flex flex-row justify-between items-center mb-2'}>
      <div className={'flex flex-row items-center'}>
        <Image
          alt={'sd'}
          className={'h-9 w-9 object-cover rounded-full mr-2'}
          src={avatar}
          width={500}
          height={100}
        />
        <p
          className={`font-inter text-base font-semibold leading-6 tracking-normal text-light-100`}
        >
          {userName}
        </p>
      </div>
      <Button className={'w-4 p-0'} variant={'clear'}>
        {isBanned ? (
          <UserPlus className={`mr-2 h-4 w-4 text-light-100`} onClick={() => alert('Unban')} />
        ) : (
          <Ban className={`mr-2 h-4 w-4 text-light-100`} onClick={() => alert('Ban')} />
        )}
      </Button>
    </div>
  )
}
