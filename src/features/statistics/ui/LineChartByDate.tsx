import { DateRange } from 'react-day-picker'
import { XAxis, YAxis, Legend, Line, LineChart, ResponsiveContainer } from 'recharts'

import { useTranslation } from 'shared/hooks'
import { DatePickerWithRange } from 'shared/ui'

export type LineChartByDateProps = {
  title: string
  colors: {
    lastMonth: string
    currentMonth: string
  }
  data:
    | {
        name: string
        lastMonth: number
        currentMonth: number
      }[]
    | undefined
  onDataChange: (data: DateRange) => void
}

export const LineChartByDate = ({ data, onDataChange, colors, title }: LineChartByDateProps) => {
  const t = useTranslation()

  return (
    <div className={'flex flex-col gap-6'}>
      <div className={'flex justify-between pl-10 w-5/6'}>
        <h3
          className={
            'text-lg font-medium  text-tremor-content-strong dark:text-dark-tremor-content-strong '
          }
        >
          {title}
        </h3>
        <DatePickerWithRange onDateChange={onDataChange} />
      </div>
      <ResponsiveContainer width={'80%'} height={350}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey={'name'} />
          <YAxis />
          <Legend verticalAlign={'top'} />
          <Line
            name={t.statistics.lastMonth}
            type={'monotone'}
            dataKey={'lastMonth'}
            stroke={colors.lastMonth}
            dot={false}
          />
          <Line
            name={t.statistics.currentMonth}
            type={'monotone'}
            dataKey={'currentMonth'}
            stroke={colors.currentMonth}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
