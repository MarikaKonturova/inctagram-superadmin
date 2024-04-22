/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from 'shared/lib/apollo/schema.types'
const defaultOptions = {} as const

export type GetAllUsersQueryVariables = Types.Exact<{
  pageNumber: Types.Scalars['Int']['input']
  pageSize: Types.Scalars['Int']['input']
  search?: Types.InputMaybe<Types.Scalars['String']['input']>
  sortBy?: Types.InputMaybe<Types.SortByForUsers>
  sortDirection?: Types.InputMaybe<Types.SortDirectionType>
  status?: Types.InputMaybe<Types.UserStatusInputType>
}>

export type GetAllUsersQuery = {
  __typename?: 'Query'
  users: {
    __typename?: 'UsersListWithPaginationViewModel'
    items: Array<{
      __typename?: 'UserForSuperAdminViewModel'
      createdAt: any
      fullName: string
      lastSeen?: any | null
      status: Types.UserStatusType
      userId: number
      userName: string
    }>
    pagesCount: number
    totalCount: number
  }
}

export const GetAllUsersDocument = gql`
  query GetAllUsers(
    $pageSize: Int!
    $pageNumber: Int!
    $status: UserStatusInputType
    $search: String
    $sortBy: SortByForUsers
    $sortDirection: SortDirectionType
  ) {
    users(
      pageSize: $pageSize
      pageNumber: $pageNumber
      status: $status
      search: $search
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      totalCount
      pagesCount
      items {
        userId
        userName
        fullName
        lastSeen
        createdAt
        status
      }
    }
  }
`

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *      pageSize: // value for 'pageSize'
 *      pageNumber: // value for 'pageNumber'
 *      status: // value for 'status'
 *      search: // value for 'search'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *   },
 * });
 */
export function useGetAllUsersQuery(
  baseOptions: ({ skip: boolean } | { skip?: boolean; variables: GetAllUsersQueryVariables }) &
    Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options)
}
export function useGetAllUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
    GetAllUsersDocument,
    options
  )
}
export function useGetAllUsersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
    GetAllUsersDocument,
    options
  )
}
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>
export type GetAllUsersSuspenseQueryHookResult = ReturnType<typeof useGetAllUsersSuspenseQuery>
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>
