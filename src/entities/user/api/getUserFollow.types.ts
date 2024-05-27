import * as Types from '../../../shared/lib/apollo/schema.types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetUserFollowQueryVariables = Types.Exact<{
  userId: Types.Scalars['Int']['input']
  pageSize: Types.Scalars['Int']['input']
  pageNumber: Types.Scalars['Int']['input']
  sortBy?: Types.InputMaybe<Types.SortByForUsers>
  sortDirection?: Types.InputMaybe<Types.SortDirectionType>
}>

export type GetUserFollowQuery = {
  __typename?: 'Query'
  user: {
    followersUser: {
      __typename?: 'UserFollowsWithPaginationViewModel'
      totalCount: number
      pagesCount: number
      page: number
      pageSize: number
      items: Array<{
        followersUser: any
        profileLink: any
        __typename?: 'UserFollowsForSuperAdminViewModel'
        userId: number
        fullName: string
        userName: string
        createdAt: any
      }>
    }
    followingUser: {
      __typename?: 'UserFollowsWithPaginationViewModel'
      totalCount: number
      pagesCount: number
      page: number
      pageSize: number
      items: Array<{
        followersUser: any
        profileLink: any
        __typename?: 'UserFollowsForSuperAdminViewModel'
        userId: number
        fullName: string
        userName: string
        createdAt: any
      }>
    }
  }
}
export const GetUserFollowDocument = gql`
  query GetUserFollow(
    $userId: Int!
    $pageSize: Int!
    $pageNumber: Int!
    $sortDirection: SortDirectionType
    $sortBy: SortByForUser
  ) {
    user(
      userId: $userId
      pageSize: $pageSize
      pageNumber: $pageNumber
      sortDirection: $sortDirection
      sortBy: $sortBy
    ) {
      followersUser {
        totalCount
        pagesCount
        page
        pageSize
        items {
          userId
          fullName
          userName
          createdAt
        }
      }
      followingUser {
        totalCount
        pagesCount
        page
        pageSize
        items {
          userId
          fullName
          userName
          createdAt
        }
      }
    }
  }
`

/**
 * __useGetUserFollowQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserFollowQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserFollowQuery, GetUserFollowQueryVariables> &
    ({ variables: GetUserFollowQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserFollowQuery, GetUserFollowQueryVariables>(
    GetUserFollowDocument,
    options
  )
}
export function useGetUserFollowLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserFollowQuery, GetUserFollowQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserFollowQuery, GetUserFollowQueryVariables>(
    GetUserFollowDocument,
    options
  )
}
export function useGetUserFollowSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserFollowQuery, GetUserFollowQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetUserFollowQuery, GetUserFollowQueryVariables>(
    GetUserFollowDocument,
    options
  )
}
export type GetUserFollowQueryHookResult = ReturnType<typeof useGetUserFollowQuery>
export type GetUserFollowLazyQueryHookResult = ReturnType<typeof useGetUserFollowLazyQuery>
export type GetUserFollowSuspenseQueryHookResult = ReturnType<typeof useGetUserFollowSuspenseQuery>
export type GetUserFollowQueryResult = Apollo.QueryResult<
  GetUserFollowQuery,
  GetUserFollowQueryVariables
>
