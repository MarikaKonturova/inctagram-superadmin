import React, { useState } from 'react'

type PostDescriptionType = {
  createdAt: string
  description: string
}

export const PostDescription = ({ createdAt, description }: PostDescriptionType) => {
  const [showMore, setShowMore] = useState(false)
  const [buttonText, setButtonText] = useState('Show more')

  const handleToggle = () => {
    setShowMore(!showMore)
    setButtonText(showMore ? 'Show more' : 'Hide')
  }

  return (
    <div className={'mt-3'}>
      <span className={'font-inter text-xs font-normal leading-4 tracking-normal text-light-900'}>
        {createdAt}
      </span>
      <p className={'mt-1 font-inter text-sm font-normal leading-6 tracking-normal text-left'}>
        {showMore ? description : description.slice(0, 83) + '...'}
        {description.length > 83 && (
          <span className={'underline text-primary-900 cursor-pointer'} onClick={handleToggle}>
            {buttonText}
          </span>
        )}
      </p>
    </div>
  )
}
