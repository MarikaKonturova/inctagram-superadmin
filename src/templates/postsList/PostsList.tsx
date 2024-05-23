import React from 'react'

import { Post } from 'shared/ui/post'

import { useGetPostsQuery } from 'entities/postsList/api/getPosts.types'

export const PostsList = () => {
  const { data, loading, error } = useGetPostsQuery({
    variables: {
      pageSize: 12,
    },
  })

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
        <div className={'mt-4'}>Search input</div>
        <div className={'flex flex-row gap-3 flex-wrap mt-9'}>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
        <div className={'mb-12'}>Pagination</div>
      </>
    )
  }

  return <div>No posts available</div>
}
