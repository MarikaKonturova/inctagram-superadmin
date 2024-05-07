export function convertDateFormat(inputDate: string) {
  // Create a new Date object
  const date = new Date(inputDate)

  // Convert the date to the desired format
  return date.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}
