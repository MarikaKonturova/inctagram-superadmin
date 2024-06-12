export type User = {
  ban: string
  dataAdded: string
  profileLink: string
  userId: number
  userName: string
}

export type UserTypeFromServer = {
  status: string
  createdAt: string
  fullName: string
  userId: number
  userName: string
  lastSeen?: string
}

export type UserFollowType = {
  userId: number
  fullName: string
  userName: string
  createdAt: string
}

export type UserFollowTableType = {
  userId: number
  userName: string
  createdAt: string
  profileLink: string
}

export enum BanReasonInputType {
  AdvertisingPlacement = 'Advertising_placement',
  AnotherReason = 'Another_reason',
  BadBehavior = 'Bad_behavior',
}

export enum UserStatusInputType {
  Active = 'active',
  All = 'all',
  Banned = 'banned',
  Pending = 'pending',
}
export enum UserStatusType {
  Active = 'ACTIVE',
  Banned = 'BANNED',
  Deleted = 'DELETED',
  Pending = 'PENDING',
}
export type ItemsImagesType = {
  url: string
}

export interface ImagesUserType {
  totalCount: number
  items: ItemsImagesType[]
}
export interface UserPhotosType {
  imagesUser: ImagesUserType
}
export interface UserImagesType {
  user: UserPhotosType
}

export type ItemsUserPaymentsType = {
  dataOfPayment: Date
  endDateOfSubscription: Date
  price: string
  subscription: string
  paymentType: string
}

export interface PaymentsUser {
  page: number
  pageSize: number
  pagesCount: number
  totalCount: number
  items: ItemsUserPaymentsType[]
}
export interface UsersPaymentType {
  paymentsUser: PaymentsUser
}
export interface UserPaymentsType {
  user: UsersPaymentType
}

export type ConvertedUserPayments = {
  dataOfPayment: string
  endDateOfSubscription: string
  amount: string
  subscriptionType: string
  paymentType: string
}
