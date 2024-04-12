import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import * as Types from 'shared/lib/apollo/schema.types'
const defaultOptions = {} as const

export type GetDataQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetDataQuery = {
  __typename?: 'Query'
  users: {
    __typename?: 'UsersListWithPaginationViewModel'
    items: Array<{ __typename?: 'UserForSuperAdminViewModel'; userId: number }>
  }
}

export const GetDataDocument = gql`
  {
    users {
      items {
        userId
      }
    }
  }
`

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDataQuery(
  baseOptions?: Apollo.QueryHookOptions<GetDataQuery, GetDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetDataQuery, GetDataQueryVariables>(GetDataDocument, options)
}
export function useGetDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetDataQuery, GetDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetDataQuery, GetDataQueryVariables>(GetDataDocument, options)
}
export function useGetDataSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetDataQuery, GetDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetDataQuery, GetDataQueryVariables>(GetDataDocument, options)
}
export type QueryHookResult = ReturnType<typeof useGetDataQuery>
export type LazyQueryHookResult = ReturnType<typeof useGetDataLazyQuery>
export type SuspenseQueryHookResult = ReturnType<typeof useGetDataSuspenseQuery>
export type QueryResult = Apollo.QueryResult<GetDataQuery, GetDataQueryVariables>
