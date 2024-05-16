import { DateRange } from 'react-day-picker'

import { DatePickerWithRange, LineChart } from 'shared/ui'

import { useNewUsersStatisticsQuery } from 'entities/statistics'
const mockDate = new Date()

const mockDataChart = [
  {
    name: '1',
    first: 4000,
    second: 2400,
  },
  {
    name: '2',
    first: 3000,
    second: 1398,
  },
  {
    name: '3',
    first: 2000,
    second: 9800,
  },
  {
    name: '4',
    first: 2780,
    second: 3908,
  },
  {
    name: '5',
    first: 1890,
    second: 4800,
  },
  {
    name: '6',
    first: 2390,
    second: 3800,
  },
  {
    name: '7',
    first: 3490,
    second: 4300,
  },
  {
    name: '8',
    first: 3490,
    second: 4300,
  },
  {
    name: '9',
    first: 3490,
    second: 4300,
  },
  {
    name: '10',
    first: 3490,
    second: 4300,
  },
  {
    name: '11',
    first: 3490,
    second: 4300,
  },
  {
    name: '12',
    first: 3490,
    second: 4300,
  },
  {
    name: '13',
    first: 3490,
    second: 4300,
  },
  {
    name: '14',
    first: 3490,
    second: 4300,
  },
]

export const NewUsersStatistics = () => {
  const { data } = useNewUsersStatisticsQuery({
    variables: {
      endDate: mockDate,
      startDate: mockDate,
      comparisonEndDate: mockDate,
      comparisonStartDate: mockDate,
    },
  })

  console.log(data)

  return (
    <div className={'w-fit h-fit relative'}>
      <DatePickerWithRange
        onDataChange={(data: DateRange | undefined) => console.log(data)}
        className={'absolute top-0 right-5 z-10'}
      />
      <LineChart
        data={mockDataChart}
        dataKey={{ first: 'Firstik', second: 'Secondik' }}
        colors={{ first: '#FFD073', second: '#664400' }}
      />
    </div>
  )
}
