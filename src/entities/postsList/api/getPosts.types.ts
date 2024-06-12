import * as Types from '../../../shared/lib/apollo/schema.types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetPostsQueryVariables = Types.Exact<{
  search?: Types.InputMaybe<Types.Scalars['String']['input']>
  pageNumber?: Types.InputMaybe<Types.Scalars['Int']['input']>
  pageSize?: Types.InputMaybe<Types.Scalars['Int']['input']>
  sortBy?: Types.InputMaybe<Types.SortByForPostsListInputType>
  sortDirection?: Types.InputMaybe<Types.SortDirectionType>
  status?: Types.InputMaybe<Types.PostStatusForPostsListInputType>
  cursor?: Types.InputMaybe<Types.Scalars['Int']['input']>
}>

export type GetPostsQuery = {
  __typename?: 'Query'
  postsList: {
    __typename?: 'PostsListWithCursorPaginationViewModel'
    page: number
    pageSize: number
    pagesCount: number
    totalCount: number
    nextCursor: number
    prevCursor: number
    items: Array<{
      __typename?: 'PostListViewModel'
      createdAt: any
      userId: number
      userName: string
      postId: number
      status: Types.UserStatusType
      description?: string | null
      urlAvatar?: string | null
      urlsPostsImages?: Array<string> | null
      postStatus: Types.PostStatusForPostsListInputType
    }>
  }
}

export const GetPostsDocument = gql`
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

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *      search: // value for 'search'
 *      pageNumber: // value for 'pageNumber'
 *      pageSize: // value for 'pageSize'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *      status: // value for 'status'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useGetPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options)
}
export function useGetPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options)
}
export function useGetPostsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options)
}
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>
export type GetPostsSuspenseQueryHookResult = ReturnType<typeof useGetPostsSuspenseQuery>
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>
