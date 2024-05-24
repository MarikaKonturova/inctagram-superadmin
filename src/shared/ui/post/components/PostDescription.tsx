import React, { useState } from 'react'

import { PostUserInfo } from 'shared/ui/post/components/PostUserInfo'

type PostDescriptionType = {
  avatar: string
  banned: boolean
  createdAt: string
  description: string
  userName: string
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

  const darkTheme = true

  return (
    <div
      className={`pt-3 ${showMore ? 'relative -top-24' : ''} ${darkTheme ? 'bg-dark-700' : 'bg-light-100'}`}
    >
      <PostUserInfo avatar={avatar} banned={banned} userName={userName} darkTheme={darkTheme} />
      <span
        className={`font-inter text-xs font-normal leading-4 tracking-normal ${darkTheme ? 'text-light-900' : 'text-dark-100'}`}
      >
        {createdAt}
      </span>
      <p
        className={`mt-1 font-inter text-sm font-normal leading-6 tracking-normal text-left ${darkTheme ? 'text-light-900' : 'text-dark-900'}`}
      >
        {showMore ? description.slice(0, 240) + '...' : description.slice(0, 83) + '...'}
        {description.length > 83 && (
          <span className={'underline text-primary-900 cursor-pointer'} onClick={handleToggle}>
            {buttonText}
          </span>
        )}
      </p>
    </div>
  )
}