import Image, { StaticImageData } from 'next/image'
import React from 'react'

// eslint-disable-next-line boundaries/element-types
import { BanUser, UnBanUser } from 'features/banOrUnbanUser'

type PostUserInfoType = {
  avatar: string | StaticImageData
  isBanned: boolean
  userName: string
  userId: number
  ban: string
  dataAdded: string
  profileLink: string
}

export const PostUserInfo = ({
  avatar,
  isBanned,
  userName,
  userId,
  ban,
  dataAdded,
  profileLink,
}: PostUserInfoType) => {
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

        {isBanned ? (
          <UnBanUser
            ban={ban}
            dataAdded={dataAdded}
            profileLink={profileLink}
            userId={userId}
            userName={userName}
            showText={false}
          />
        ) : (
          <BanUser
            ban={ban}
            dataAdded={dataAdded}
            profileLink={profileLink}
            userId={userId}
            userName={userName}
            showText={false}
          />
        )}
      </div>
    </>
  )
}
