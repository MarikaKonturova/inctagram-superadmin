import { gql } from '@apollo/client'

export const GET_NEW_USERS = gql`
  query newUsersStatistics(
    $startDate: Timestamp!
    $endDate: Timestamp!
    $comparisonStartDate: Timestamp
    $comparisonEndDate: Timestamp
  ) {
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
`
