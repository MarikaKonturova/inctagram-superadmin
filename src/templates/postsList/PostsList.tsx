import React, { useState } from 'react'

import { UseDebounce } from 'shared/hooks/UseDebounce'
import { UserStatusType } from 'shared/types/user'
import { Input } from 'shared/ui'
import { Post } from 'shared/ui/post'

import { useGetPostsQuery } from 'entities/postsList/api/getPosts.types'

import { UnBanUser, BanUser } from 'features/banOrUnbanUser'

export const PostsList = () => {
  const [searchInput, setSearchInput] = useState<string>('')

  const search = UseDebounce(searchInput, 500)

  const { data, loading, error } = useGetPostsQuery({
    variables: {
      pageSize: 12,
      search,
    },
  })

  const posts = data?.postsList?.items

  /*  */
  return (
    <div className={'my-16  mt-14'}>
      <Input
        placeholder={'Search'}
        type={'search'}
        value={searchInput}
        onChange={event => setSearchInput(event.target.value)}
        className={'w-full'}
        rootContainerProps={{ className: 'w-full' }}
      />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {!loading && !error && posts && posts.length > 0 && (
        <div className={'grid-postlists mt-9'}>
          {posts.map((post, index) => (
            <Post key={index} post={post}>
              {post.status === UserStatusType.Banned ? (
                <UnBanUser
                  ban={UserStatusType.Active}
                  dataAdded={post.createdAt}
                  profileLink={post.userName}
                  userId={post.userId}
                  userName={post.userName || 'userName'}
                  showText={false}
                />
              ) : (
                <BanUser
                  ban={UserStatusType.Active}
                  dataAdded={post.createdAt}
                  profileLink={post.userName}
                  userId={post.userId}
                  userName={post.userName || 'userName'}
                  showText={false}
                />
              )}
            </Post>
          ))}
        </div>
      )}
      {!loading && !error && posts && posts.length === 0 && <div>No posts available</div>}
      <div className={'mb-12'}>Pagination</div>
    </div>
  )
}
