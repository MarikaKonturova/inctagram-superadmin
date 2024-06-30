import { subDays } from 'date-fns'
import { DateRange } from 'react-day-picker'

import { useNewUsersStatisticsQuery } from './getNewUsers.types'

export const useGetUserStatisticsForChart = ({ from, to }: DateRange) => {
  const { data } = useNewUsersStatisticsQuery({
    variables: {
      startDate: from,
      endDate: to,
      comparisonStartDate: subDays(from as Date, 60),
      comparisonEndDate: subDays(to as Date, 30),
    },
  })

  const alLMetrics = data?.statisticsUsers?.data
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
