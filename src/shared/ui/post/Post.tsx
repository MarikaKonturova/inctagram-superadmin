import React from 'react'

import { PostStatusForPostsListInputType, UserStatusType } from 'shared/lib/apollo/schema.types'
import { PostDescription } from 'shared/ui/post/components/PostDescription'
import { PostPhotos } from 'shared/ui/post/components/PostPhotos'

export type PostType = {
  createdAt: string
  userId: number
  userName: string
  postId: number
  status: UserStatusType
  description?: string | null
  urlAvatar?: string | null
  urlsPostsImages?: Array<string> | null
  postStatus: PostStatusForPostsListInputType
}

type PostPropsType = {
  post: PostType
}

export const Post = ({ post }: PostPropsType) => {
  const { urlsPostsImages, ...postArgs } = post

  return (
    <div className={'w-[234px] h-[391px] mb-4'}>
      <PostPhotos photos={urlsPostsImages} />
      <PostDescription post={postArgs} />
    </div>
  )
}
