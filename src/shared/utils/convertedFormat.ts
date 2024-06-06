import { ConvertedUserPayments, ItemsUserPaymentsType, UserTypeFromServer } from 'shared/types/user'

export function convertDateFormat(inputDate: string) {
  // Create a new Date object
  const date = new Date(inputDate)

  // Convert the date to the desired format
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

export const formatUser = (user: UserTypeFromServer) => ({
  ban: user.status === 'BANNED' ? 'Active' : '',
  dataAdded: convertDateFormat(user.createdAt),
  profileLink: user.fullName,
  userId: Number(user.userId),
  userName: user.userName,
})

export const formatUserPayment = (user: ItemsUserPaymentsType): ConvertedUserPayments => ({
  dataOfPayment: convertDateFormat(String(user.dataOfPayment)),
  endDateOfSubscription: convertDateFormat(String(user.endDateOfSubscription)),
  amount: String(user.price),
  subscriptionType: user.subscription,
  paymentType: user.paymentType,
})
