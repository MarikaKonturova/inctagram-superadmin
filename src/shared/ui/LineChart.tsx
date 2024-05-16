import { XAxis, YAxis, Legend, Line, LineChart as LineChartLib } from 'recharts'

export type LineChartProps = {
  colors: {
    first: string
    second: string
  }
  dataKey: {
    first: string
    second: string
  }
  data: Array<{
    name: string
    first: number
    second: number
  }>
}

export const LineChart = ({ data, dataKey, colors }: LineChartProps) => {
  //to update properties of data  according to dataKeys
  const dataProperties = Object.values(dataKey)

  const dataChart = data.map(data => ({
    name: data.name,
    [dataProperties[0]]: data.first,
    [dataProperties[1]]: data.second,
  }))

  return (
    <LineChartLib
      width={972}
      height={415}
      data={dataChart}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      className={'w-[972px]'}
    >
      <XAxis dataKey={'name'} />
      <YAxis />
      <Legend verticalAlign={'top'} />
      <Line type={'monotone'} dataKey={dataKey.first} stroke={colors.first} dot={false} />
      <Line type={'monotone'} dataKey={dataKey.second} stroke={colors.second} dot={false} />
    </LineChartLib>
  )
}
