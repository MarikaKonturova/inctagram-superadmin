import { subDays } from 'date-fns'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'

import { useGetUserStatisticsForChart } from 'features/statistics'

import { LineChartByDate } from './LineChartByDate'

const colors = { lastMonth: '#FFD073', currentMonth: '#664400' }

export const UsersChart = () => {
  const [date, setDate] = useState<DateRange>({
    from: subDays(new Date(), 30),
    to: new Date(),
  })
  const data = useGetUserStatisticsForChart(date)

  return <LineChartByDate data={data} colors={colors} onDataChange={setDate} title={'New users'} />
}
