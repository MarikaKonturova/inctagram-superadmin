import React from 'react'

import { PostDescription } from 'shared/ui/post/components/PostDescription'
import { PostPhotos } from 'shared/ui/post/components/PostPhotos'
import { mockData } from 'shared/ui/post/mockData'

type PostPropsType = {
  post: {
    urlsPostsImages?: string[] | null
    urlAvatar?: string | null
    description?: string | null
    userName?: string | null
  }
}

export const Post = ({ post }: PostPropsType) => {
  const { urlsPostsImages, urlAvatar, description, userName } = post

  return (
    <div className={'w-60 h-[391px]'}>
      <PostPhotos photos={urlsPostsImages ?? mockData.mockImage} />
      <PostDescription
        avatar={urlAvatar ?? mockData.mockImageProfile}
        banned={false}
        createdAt={'22 min ago'}
        description={description ?? mockData.mockDescription}
        userName={userName ?? mockData.mockUserName}
      />
    </div>
  )
}
