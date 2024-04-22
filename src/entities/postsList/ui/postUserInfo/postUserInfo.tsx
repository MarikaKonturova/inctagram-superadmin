import React from 'react'

type PostType = {
  avatar: string
}

export const PostUserInfo = ({ avatar }: PostType) => {
  return (
    <div className={'flex flex-row justify-between items-center'}>
      <div className={'flex flex-row items-center'}>
        <img alt={'sd'} className={'h-9 w-9 object-cover rounded-full mr-2'} src={avatar} />
        <p className={'font-inter text-base font-semibold leading-6 tracking-normal'}>URLProfile</p>
      </div>
      <p>x</p>
    </div>
  )
}
