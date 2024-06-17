import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

type PostUserInfoType = {
  avatar: string | StaticImageData
  userName: string
  children: ReactNode
}

export const PostUserInfo = ({ avatar, userName, children }: PostUserInfoType) => {
  return (
    <>
      <div className={'flex flex-row justify-between items-center mb-2'}>
        <div className={'flex flex-row items-center'}>
          <Image
            alt={'User Avatar'}
            className={'h-9 w-9 object-cover rounded-full mr-2'}
            src={avatar}
            width={36}
            height={36}
          />
          <p
            className={
              'font-inter text-base font-semibold leading-6 tracking-normal text-light-100'
            }
          >
            {userName}
          </p>
        </div>

        {children}
      </div>
    </>
  )
}
