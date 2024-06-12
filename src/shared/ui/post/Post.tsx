import React, { ReactNode } from 'react'

import { PostStatusForPostsListInputType, UserStatusType } from 'shared/lib/apollo/schema.types'
import { PostDescription } from 'shared/ui/post/PostDescription'
import { PostPhotos } from 'shared/ui/post/PostPhotos'

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
  children: ReactNode
}

export const Post = ({ post, children }: PostPropsType) => {
  const { urlsPostsImages, ...postArgs } = post

  return (
    <div className={'w-[234px] h-[391px] mb-4'}>
      <PostPhotos photos={urlsPostsImages} />
      <PostDescription post={postArgs}>{children}</PostDescription>
    </div>
  )
}
