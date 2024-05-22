import React from 'react'

import { Post } from 'shared/ui/post'

import { useGetPostsQuery } from 'entities/postsList/api/getPosts.types'

export const PostsList = () => {
  const { data, loading, error } = useGetPostsQuery()

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  const posts = data?.postsList?.items

  if (posts && posts.length) {
    return (
      <>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </>
    )
  }

  return <div>No posts available</div>
}
