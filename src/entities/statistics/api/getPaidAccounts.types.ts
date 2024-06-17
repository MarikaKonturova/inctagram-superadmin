import * as Types from '../../../shared/lib/apollo/schema.types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type StatisticsPaidAccountsQueryVariables = Types.Exact<{
  startDate: Types.Scalars['Timestamp']['input']
  endDate: Types.Scalars['Timestamp']['input']
  comparisonStartDate?: Types.InputMaybe<Types.Scalars['Timestamp']['input']>
  comparisonEndDate?: Types.InputMaybe<Types.Scalars['Timestamp']['input']>
}>

export type StatisticsPaidAccountsQuery = {
  __typename?: 'Query'
  statisticsPaidAccounts: {
    __typename?: 'StatisticsForGraphicsAdminViewModel'
    query?: {
      __typename?: 'StatisticsQuery'
      dateStart: any
      dateEnd: any
      comparisonStartDate?: any | null
      comparisonEndDate?: any | null
    } | null
    data?: {
      __typename?: 'StatisticsDataByUsers'
      metrics: {
        __typename?: 'StatisticsMetricsUsers'
        countUsers?: Array<number> | null
        total_rows: number
        time_intervals: Array<any>
        maxCountUsers: number
        maxRoundUsers: number
        sumUsers: number
      }
      metricsComparison?: {
        __typename?: 'StatisticsMetricsUsers'
        countUsers?: Array<number> | null
        total_rows: number
        time_intervals: Array<any>
        maxCountUsers: number
        maxRoundUsers: number
        sumUsers: number
      } | null
    } | null
  }
}

export const StatisticsPaidAccountsDocument = gql`
  query statisticsPaidAccounts(
    $startDate: Timestamp!
    $endDate: Timestamp!
    $comparisonStartDate: Timestamp
    $comparisonEndDate: Timestamp
  ) {
    statisticsPaidAccounts(
      startDate: $startDate
      endDate: $endDate
      comparisonStartDate: $comparisonStartDate
      comparisonEndDate: $comparisonEndDate
    ) {
      query {
        dateStart
        dateEnd
        comparisonStartDate
        comparisonEndDate
      }
      data {
        metrics {
          countUsers
          total_rows
          time_intervals
          maxCountUsers
          maxRoundUsers
          sumUsers
        }
        metricsComparison {
          countUsers
          total_rows
          time_intervals
          maxCountUsers
          maxRoundUsers
          sumUsers
        }
      }
    }
  }
`

/**
 * __useStatisticsPaidAccountsQuery__
 *
 * To run a query within a React component, call `useStatisticsPaidAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStatisticsPaidAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStatisticsPaidAccountsQuery({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *      comparisonStartDate: // value for 'comparisonStartDate'
 *      comparisonEndDate: // value for 'comparisonEndDate'
 *   },
 * });
 */
export function useStatisticsPaidAccountsQuery(
  baseOptions: Apollo.QueryHookOptions<
    StatisticsPaidAccountsQuery,
    StatisticsPaidAccountsQueryVariables
  > &
    ({ variables: StatisticsPaidAccountsQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StatisticsPaidAccountsQuery, StatisticsPaidAccountsQueryVariables>(
    StatisticsPaidAccountsDocument,
    options
  )
}
export function useStatisticsPaidAccountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StatisticsPaidAccountsQuery,
    StatisticsPaidAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StatisticsPaidAccountsQuery, StatisticsPaidAccountsQueryVariables>(
    StatisticsPaidAccountsDocument,
    options
  )
}
export function useStatisticsPaidAccountsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    StatisticsPaidAccountsQuery,
    StatisticsPaidAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<StatisticsPaidAccountsQuery, StatisticsPaidAccountsQueryVariables>(
    StatisticsPaidAccountsDocument,
    options
  )
}
export type StatisticsPaidAccountsQueryHookResult = ReturnType<
  typeof useStatisticsPaidAccountsQuery
>
export type StatisticsPaidAccountsLazyQueryHookResult = ReturnType<
  typeof useStatisticsPaidAccountsLazyQuery
>
export type StatisticsPaidAccountsSuspenseQueryHookResult = ReturnType<
  typeof useStatisticsPaidAccountsSuspenseQuery
>
export type StatisticsPaidAccountsQueryResult = Apollo.QueryResult<
  StatisticsPaidAccountsQuery,
  StatisticsPaidAccountsQueryVariables
>
