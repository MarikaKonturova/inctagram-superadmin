import * as Types from '../../../shared/lib/apollo/schema.types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetUserImagesQueryVariables = Types.Exact<{
  userId: Types.Scalars['Int']['input']
  pageNumber?: Types.InputMaybe<Types.Scalars['Int']['input']>
  pageSize?: Types.InputMaybe<Types.Scalars['Int']['input']>
  sortBy?: Types.InputMaybe<Types.SortByForUser>
  sortDirection?: Types.InputMaybe<Types.SortDirectionType>
}>

export type GetUserImagesQuery = {
  __typename?: 'Query'
  user: {
    __typename?: 'UserForSuperAdminViewModel'
    imagesUser: {
      __typename?: 'UserImagesWithPaginationViewModel'
      page: number
      pageSize: number
      pagesCount: number
      totalCount: number
      items: Array<{ __typename?: 'UserImagesForSuperAdminViewModel'; url: string; createdAt: any }>
    }
  }
}

export const GetUserImagesDocument = gql`
  query getUserImages(
    $userId: Int!
    $pageNumber: Int
    $pageSize: Int
    $sortBy: SortByForUser = createdAt
    $sortDirection: SortDirectionType = Desc
  ) {
    user(
      userId: $userId
      pageNumber: $pageNumber
      pageSize: $pageSize
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      imagesUser {
        page
        pageSize
        pagesCount
        totalCount
        items {
          url
          createdAt
        }
      }
    }
  }
`

/**
 * __useGetUserImagesQuery__
 *
 * To run a query within a React component, call `useGetUserImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserImagesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      pageNumber: // value for 'pageNumber'
 *      pageSize: // value for 'pageSize'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *   },
 * });
 */
export function useGetUserImagesQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserImagesQuery, GetUserImagesQueryVariables> &
    ({ variables: GetUserImagesQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserImagesQuery, GetUserImagesQueryVariables>(
    GetUserImagesDocument,
    options
  )
}
export function useGetUserImagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserImagesQuery, GetUserImagesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserImagesQuery, GetUserImagesQueryVariables>(
    GetUserImagesDocument,
    options
  )
}
export function useGetUserImagesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserImagesQuery, GetUserImagesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetUserImagesQuery, GetUserImagesQueryVariables>(
    GetUserImagesDocument,
    options
  )
}
export type GetUserImagesQueryHookResult = ReturnType<typeof useGetUserImagesQuery>
export type GetUserImagesLazyQueryHookResult = ReturnType<typeof useGetUserImagesLazyQuery>
export type GetUserImagesSuspenseQueryHookResult = ReturnType<typeof useGetUserImagesSuspenseQuery>
export type GetUserImagesQueryResult = Apollo.QueryResult<
  GetUserImagesQuery,
  GetUserImagesQueryVariables
>
