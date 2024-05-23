import React, { useState } from 'react'

import user from 'shared/assets/images/user.png'
import { UserStatusType } from 'shared/lib/apollo/schema.types'
import { PostUserInfo } from 'shared/ui/post/components/PostUserInfo'

type PostDescriptionType = {
  avatar?: string | null
  banned: UserStatusType
  createdAt: string
  description?: string | null
  userName?: string | null
}

export const PostDescription = ({
  avatar,
  banned,
  createdAt,
  description,
  userName,
}: PostDescriptionType) => {
  const [showMore, setShowMore] = useState(false)
  const [buttonText, setButtonText] = useState('Show more')

  const handleToggle = () => {
    setShowMore(!showMore)
    setButtonText(showMore ? 'Show more' : 'Hide')
  }

  return (
    <div className={`pt-3 ${showMore ? 'relative -top-24' : ''} 'bg-dark-700'`}>
      <PostUserInfo
        avatar={avatar || user}
        banned={banned === UserStatusType.Banned}
        userName={userName || 'userName'}
      />
      <span
        className={`font-inter text-xs font-normal leading-4 tracking-normal text-light-900 mt-3`}
      >
        {createdAt}
      </span>
      <p
        className={`mt-1 font-inter text-sm font-normal leading-6 tracking-normal text-left text-light-100`}
      >
        {showMore ? description?.slice(0, 240) + '...' : description?.slice(0, 83) + '...'}
        {description && description?.length > 83 && (
          <span className={'underline text-primary-300 cursor-pointer'} onClick={handleToggle}>
            {buttonText}
          </span>
        )}
      </p>
    </div>
  )
}
