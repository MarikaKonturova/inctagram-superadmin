import { gql } from '@apollo/client'

export const GET_POSTS = gql`
  query GetPosts(
    $search: String
    $pageNumber: Int
    $pageSize: Int
    $sortBy: SortByForPostsListInputType
    $sortDirection: SortDirectionType
    $status: PostStatusForPostsListInputType
    $cursor: Int
  ) {
    postsList(
      search: $search
      cursor: $cursor
      status: $status
      pageNumber: $pageNumber
      pageSize: $pageSize
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      page
      pageSize
      pagesCount
      totalCount
      nextCursor
      prevCursor
      items {
        createdAt
        userId
        userName
        postId
        status
        description
        urlAvatar
        urlsPostsImages
        postStatus
      }
    }
  }
`
