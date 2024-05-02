export const getFormattedDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }

  if (date) {
    const inputDate = new Date(date)

    return inputDate.toLocaleString('ru-RU', options)
  }

  return null
}
