export const calculateDaysDifference = (firstDate: Date, secondDate: Date) => {
  const differenceInTime = secondDate.getTime() - firstDate.getTime()
  const differenceInDays = differenceInTime / (1000 * 3600 * 24)

  return differenceInDays
}
