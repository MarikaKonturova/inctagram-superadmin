import { subDays } from 'date-fns'
import { DateRange } from 'react-day-picker'

import { calculateDaysDifference } from 'features/statistics/model/calculateDaysDifference'

import { useStatisticsPaidAccountsQuery } from './getPaidAccounts.types'

export const useStatisticsPaidAccountsQueryForChart = ({ from, to }: DateRange) => {
  const { data } = useStatisticsPaidAccountsQuery({
    variables: {
      startDate: from,
      endDate: to,
      comparisonStartDate: subDays(from as Date, calculateDaysDifference(from!, to!)),
      comparisonEndDate: from,
    },
  })

  const alLMetrics = data?.statisticsPaidAccounts?.data
  const metrics = alLMetrics?.metrics
  const metricsComparison = alLMetrics?.metricsComparison

  const countUsersMetrics = metrics?.countUsers
  const countUsersComparisonMonth = metricsComparison?.countUsers

  const dataChart = countUsersMetrics?.map((countUsersCurrentMont, index) => ({
    name: (index + 1).toString(),
    lastMonth: countUsersCurrentMont,
    currentMonth: countUsersComparisonMonth![index],
  }))

  return dataChart
}
