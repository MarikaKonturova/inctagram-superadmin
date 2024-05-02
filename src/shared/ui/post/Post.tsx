import React from 'react'

import { PostDescription } from 'shared/ui/post/components/PostDescription'
import { PostPhotos } from 'shared/ui/post/components/PostPhotos'
import { mockData } from 'shared/ui/post/mockData'

type PostPropsType = {
  image?: string[]
  avatar?: string
  description?: string
  userName?: string
}

export const Post = ({ image, avatar, description, userName }: PostPropsType) => {
  return (
    <div className={'w-60 h-[391px]'}>
      <PostPhotos photos={image ?? mockData.mockImage} />
      <PostDescription
        avatar={avatar ?? mockData.mockImageProfile}
        banned={false}
        createdAt={'22 min ago'}
        description={description ?? mockData.mockDescription}
        userName={userName ?? mockData.mockUserName}
      />
    </div>
  )
}
