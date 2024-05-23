import moment from 'moment/moment'
import React, { useState } from 'react'

import userImg from 'shared/assets/images/user.png'
import { UserStatusType } from 'shared/lib/apollo/schema.types'
import { PostUserInfo } from 'shared/ui/post/components/PostUserInfo'

type PostDescriptionType = {
  post: {
    urlAvatar?: string | null
    status: UserStatusType
    createdAt: string | null
    description?: string | null
    userName?: string | null
  }
}

export const PostDescription = ({ post }: PostDescriptionType) => {
  const { urlAvatar, status, createdAt, description, userName } = post
  const formattedDate = moment(createdAt).fromNow()

  const [showMore, setShowMore] = useState(false)
  const [buttonText, setButtonText] = useState('Show more')

  const handleToggle = () => {
    setShowMore(!showMore)
    setButtonText(showMore ? 'Show more' : 'Hide')
  }

  return (
    <div className={`pt-3 ${showMore ? 'relative -top-36' : ''} bg-dark-700`}>
      <PostUserInfo
        avatar={urlAvatar || userImg}
        isBanned={status === UserStatusType.Banned}
        userName={userName || 'userName'}
      />
      <span
        className={`font-inter text-xs font-normal leading-4 tracking-normal size-4 text-light-900 mt-0`}
      >
        {formattedDate}
      </span>
      <p
        className={`font-inter text-sm font-normal leading-6 tracking-normal text-left text-light-100`}
      >
        {showMore ? description?.slice(0, 240) + '...' : description?.slice(0, 60) + '...'}
        {description && description?.length > 60 && (
          <span className={'underline text-primary-300 cursor-pointer'} onClick={handleToggle}>
            {buttonText}
          </span>
        )}
      </p>
    </div>
  )
}
