import { UserFollowType, UserTypeFromServer } from 'shared/types/user'

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

export const formatUser = (user: UserTypeFromServer) => ({
  ban: user.status === 'BANNED' ? 'Active' : '',
  dataAdded: convertDateFormat(user.createdAt),
  profileLink: user.fullName,
  userId: Number(user.userId),
  userName: user.userName,
})

export const formatFollowUser = (user: UserFollowType) => ({
  userId: Number(user.userId),
  profileLink: user.userName,
  userName: user.fullName,
  createdAt: convertDateFormat(user.createdAt),
})
