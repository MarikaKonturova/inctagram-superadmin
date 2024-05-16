import * as Types from '../../../shared/lib/apollo/schema.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type NewUsersStatisticsQueryVariables = Types.Exact<{
  startDate: Types.Scalars['Timestamp']['input'];
  endDate: Types.Scalars['Timestamp']['input'];
  comparisonStartDate?: Types.InputMaybe<Types.Scalars['Timestamp']['input']>;
  comparisonEndDate?: Types.InputMaybe<Types.Scalars['Timestamp']['input']>;
}>;


export type NewUsersStatisticsQuery = { __typename?: 'Query', statisticsUsers: { __typename?: 'StatisticsForGraphicsAdminViewModel', query?: { __typename?: 'StatisticsQuery', dateStart: any, dateEnd: any, comparisonStartDate?: any | null, comparisonEndDate?: any | null } | null, data?: { __typename?: 'StatisticsDataByUsers', metrics: { __typename?: 'StatisticsMetricsUsers', countUsers?: Array<number> | null, total_rows: number, time_intervals: Array<any>, maxCountUsers: number, maxRoundUsers: number, sumUsers: number }, metricsComparison?: { __typename?: 'StatisticsMetricsUsers', countUsers?: Array<number> | null, total_rows: number, time_intervals: Array<any>, maxCountUsers: number, maxRoundUsers: number, sumUsers: number } | null } | null } };


export const NewUsersStatisticsDocument = gql`
    query newUsersStatistics($startDate: Timestamp!, $endDate: Timestamp!, $comparisonStartDate: Timestamp, $comparisonEndDate: Timestamp) {
  statisticsUsers(
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
    `;

/**
 * __useNewUsersStatisticsQuery__
 *
 * To run a query within a React component, call `useNewUsersStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewUsersStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewUsersStatisticsQuery({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *      comparisonStartDate: // value for 'comparisonStartDate'
 *      comparisonEndDate: // value for 'comparisonEndDate'
 *   },
 * });
 */
export function useNewUsersStatisticsQuery(baseOptions: Apollo.QueryHookOptions<NewUsersStatisticsQuery, NewUsersStatisticsQueryVariables> & ({ variables: NewUsersStatisticsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NewUsersStatisticsQuery, NewUsersStatisticsQueryVariables>(NewUsersStatisticsDocument, options);
      }
export function useNewUsersStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewUsersStatisticsQuery, NewUsersStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NewUsersStatisticsQuery, NewUsersStatisticsQueryVariables>(NewUsersStatisticsDocument, options);
        }
export function useNewUsersStatisticsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<NewUsersStatisticsQuery, NewUsersStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<NewUsersStatisticsQuery, NewUsersStatisticsQueryVariables>(NewUsersStatisticsDocument, options);
        }
export type NewUsersStatisticsQueryHookResult = ReturnType<typeof useNewUsersStatisticsQuery>;
export type NewUsersStatisticsLazyQueryHookResult = ReturnType<typeof useNewUsersStatisticsLazyQuery>;
export type NewUsersStatisticsSuspenseQueryHookResult = ReturnType<typeof useNewUsersStatisticsSuspenseQuery>;
export type NewUsersStatisticsQueryResult = Apollo.QueryResult<NewUsersStatisticsQuery, NewUsersStatisticsQueryVariables>;