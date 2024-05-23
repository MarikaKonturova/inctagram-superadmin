import moment from 'moment'
import React from 'react'

import { UserStatusType } from 'shared/lib/apollo/schema.types'
import { PostDescription } from 'shared/ui/post/components/PostDescription'
import { PostPhotos } from 'shared/ui/post/components/PostPhotos'

type PostPropsType = {
  post: {
    urlsPostsImages?: string[] | null
    urlAvatar?: string | null
    description?: string | null
    userName?: string | null
    createdAt: string | null
    status: UserStatusType
  }
}

export const Post = ({ post }: PostPropsType) => {
  const { urlsPostsImages, urlAvatar, description, userName, createdAt, status } = post

  const formattedDate = moment(createdAt).fromNow()

  return (
    <div className={'w-60 h-[391px] mb-4'}>
      <PostPhotos photos={urlsPostsImages} />
      <PostDescription
        avatar={urlAvatar}
        banned={status}
        createdAt={formattedDate}
        description={description}
        userName={userName}
      />
    </div>
  )
}
