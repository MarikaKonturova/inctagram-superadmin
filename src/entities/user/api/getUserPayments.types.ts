import * as Types from '../../../shared/lib/apollo/schema.types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetUserPaymentsQueryVariables = Types.Exact<{
  userId: Types.Scalars['Int']['input']
  pageNumber?: Types.InputMaybe<Types.Scalars['Int']['input']>
  pageSize?: Types.InputMaybe<Types.Scalars['Int']['input']>
  sortBy?: Types.InputMaybe<Types.SortByForUser>
  sortDirection?: Types.InputMaybe<Types.SortDirectionType>
}>

export type GetUserPaymentsQuery = {
  __typename?: 'Query'
  user: {
    __typename?: 'UserForSuperAdminViewModel'
    paymentsUser: {
      __typename?: 'UserPaymentsWithPaginationViewModel'
      page: number
      pageSize: number
      pagesCount: number
      totalCount: number
      items: Array<{
        __typename?: 'UserPaymentsForSuperAdminViewModel'
        dataOfPayment: any
        endDateOfSubscription: any
        price: string
        subscription: string
        paymentType: string
      }>
    }
  }
}

export const GetUserPaymentsDocument = gql`
  query getUserPayments(
    $userId: Int!
    $pageNumber: Int
    $pageSize: Int
    $sortBy: SortByForUser
    $sortDirection: SortDirectionType
  ) {
    user(
      userId: $userId
      pageNumber: $pageNumber
      pageSize: $pageSize
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      paymentsUser {
        page
        pageSize
        pagesCount
        totalCount
        items {
          dataOfPayment
          endDateOfSubscription
          price
          subscription
          paymentType
        }
      }
    }
  }
`

/**
 * __useGetUserPaymentsQuery__
 *
 * To run a query within a React component, call `useGetUserPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPaymentsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      pageNumber: // value for 'pageNumber'
 *      pageSize: // value for 'pageSize'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *   },
 * });
 */
export function useGetUserPaymentsQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserPaymentsQuery, GetUserPaymentsQueryVariables> &
    ({ variables: GetUserPaymentsQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserPaymentsQuery, GetUserPaymentsQueryVariables>(
    GetUserPaymentsDocument,
    options
  )
}
export function useGetUserPaymentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserPaymentsQuery, GetUserPaymentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserPaymentsQuery, GetUserPaymentsQueryVariables>(
    GetUserPaymentsDocument,
    options
  )
}
export function useGetUserPaymentsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserPaymentsQuery, GetUserPaymentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetUserPaymentsQuery, GetUserPaymentsQueryVariables>(
    GetUserPaymentsDocument,
    options
  )
}
export type GetUserPaymentsQueryHookResult = ReturnType<typeof useGetUserPaymentsQuery>
export type GetUserPaymentsLazyQueryHookResult = ReturnType<typeof useGetUserPaymentsLazyQuery>
export type GetUserPaymentsSuspenseQueryHookResult = ReturnType<
  typeof useGetUserPaymentsSuspenseQuery
>
export type GetUserPaymentsQueryResult = Apollo.QueryResult<
  GetUserPaymentsQuery,
  GetUserPaymentsQueryVariables
>
