import { DateRange } from 'react-day-picker'
import { XAxis, YAxis, Legend, Line, LineChart } from 'recharts'

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
  return (
    <div className={'flex flex-col'}>
      <div className={'flex justify-between pl-10 w-full'}>
        <h3
          className={
            'text-lg font-medium  text-tremor-content-strong dark:text-dark-tremor-content-strong '
          }
        >
          {title}
        </h3>
        <DatePickerWithRange onDateChange={onDataChange} />
      </div>

      <LineChart
        width={750}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey={'name'} />
        <YAxis />
        <Legend verticalAlign={'top'} />
        <Line type={'monotone'} dataKey={'lastMonth'} stroke={colors.lastMonth} dot={false} />
        <Line type={'monotone'} dataKey={'currentMonth'} stroke={colors.currentMonth} dot={false} />
      </LineChart>
    </div>
  )
}
