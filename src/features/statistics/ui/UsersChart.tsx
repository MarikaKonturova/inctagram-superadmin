import { subDays } from 'date-fns'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'

import { useTranslation } from 'shared/hooks'

import { useGetUserStatisticsForChart } from 'features/statistics'

import { LineChartByDate } from './LineChartByDate'

const colors = { lastMonth: '#234E99', currentMonth: '#73A5FF' }

export const UsersChart = () => {
  const t = useTranslation()
  const [date, setDate] = useState<DateRange>({
    from: subDays(new Date(), 30),
    to: new Date(),
  })
  const data = useGetUserStatisticsForChart(date)

  return (
    <LineChartByDate
      data={data}
      colors={colors}
      onDataChange={setDate}
      title={t.statistics.newUsers}
    />
  )
}
