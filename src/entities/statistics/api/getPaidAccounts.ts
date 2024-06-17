import { gql } from '@apollo/client'

export const GET_PAID_ACCOUNTS = gql`
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
