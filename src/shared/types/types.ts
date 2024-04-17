export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
  | T
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  Boolean: { input: boolean; output: boolean }
  DateTime: { input: any; output: any }
  Float: { input: number; output: number }
  ID: { input: string; output: string }
  Int: { input: number; output: number }
  String: { input: string; output: string }
  Timestamp: { input: any; output: any }
}

/** Reasons for banning a post */
export enum BanReasonForPostInputType {
  ControversialTopics = 'CONTROVERSIAL_TOPICS',
  CopyrightInfringement = 'COPYRIGHT_INFRINGEMENT',
  DiscriminationAndHate = 'DISCRIMINATION_AND_HATE',
  IllegalActivities = 'ILLEGAL_ACTIVITIES',
  InappropriateBehavior = 'INAPPROPRIATE_BEHAVIOR',
  PrivacyViolation = 'PRIVACY_VIOLATION',
  SexualContent = 'SEXUAL_CONTENT',
  ShockingOrDisturbingContent = 'SHOCKING_OR_DISTURBING_CONTENT',
  SpamAndScams = 'SPAM_AND_SCAMS',
  ViolenceAndCruelty = 'VIOLENCE_AND_CRUELTY',
}

/** Reasons for banning a user */
export enum BanReasonInputType {
  AdvertisingPlacement = 'Advertising_placement',
  AnotherReason = 'Another_reason',
  BadBehavior = 'Bad_behavior',
}

/** Grouping Type [day, week, month, year] */
export enum GroupingType {
  Day = 'DAY',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR',
}

export type Mutation = {
  __typename?: 'Mutation'
  deleteUser: Scalars['Boolean']['output']
  updatePostStatus: Scalars['Boolean']['output']
  updateUserStatus: Scalars['Boolean']['output']
}

export type MutationDeleteUserArgs = {
  userId: Scalars['Float']['input']
}

export type MutationUpdatePostStatusArgs = {
  banReason?: InputMaybe<BanReasonForPostInputType>
  details?: InputMaybe<Scalars['String']['input']>
  isBanned: Scalars['Boolean']['input']
  postId: Scalars['Int']['input']
}

export type MutationUpdateUserStatusArgs = {
  banReason?: InputMaybe<BanReasonInputType>
  details?: InputMaybe<Scalars['String']['input']>
  isBanned: Scalars['Boolean']['input']
  userId: Scalars['Int']['input']
}

export type PaymentListViewModel = {
  __typename?: 'PaymentListViewModel'
  amount: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  paymentType: PaymentMethod
  paymentTypeText: Scalars['String']['output']
  status: StatusSubscriptionType
  statusUser: UserStatusType
  typeSubscription: Scalars['String']['output']
  urlAvatar?: Maybe<Scalars['String']['output']>
  userId: Scalars['Int']['output']
  userName: Scalars['String']['output']
}

/** Payment Method [STRIPE, PAYPAL] */
export enum PaymentMethod {
  Paypal = 'PAYPAL',
  Stripe = 'STRIPE',
}

export type PaymentsListWithPaginationViewModel = {
  __typename?: 'PaymentsListWithPaginationViewModel'
  items: Array<PaymentListViewModel>
  page: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  pagesCount: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}

export type PostDeletedViewModel = {
  __typename?: 'PostDeletedViewModel'
  postId: Scalars['Int']['output']
  userId: Scalars['Int']['output']
}

export type PostForSuperAdminViewModel = {
  __typename?: 'PostForSuperAdminViewModel'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  images: Array<PostImageForSuperAdminViewModel>
  ownerId: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type PostImageForSuperAdminViewModel = {
  __typename?: 'PostImageForSuperAdminViewModel'
  createdAt: Scalars['DateTime']['output']
  fileSize: Scalars['Int']['output']
  postId: Scalars['Int']['output']
  status: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  url: Scalars['String']['output']
}

export type PostListViewModel = {
  __typename?: 'PostListViewModel'
  banReasonText?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  postId: Scalars['Int']['output']
  postStatus: PostStatusForPostsListInputType
  status: UserStatusType
  urlAvatar?: Maybe<Scalars['String']['output']>
  urlsPostsImages?: Maybe<Array<Scalars['String']['output']>>
  userId: Scalars['Int']['output']
  userName: Scalars['String']['output']
}

/** Post Status [published, banned] */
export enum PostStatusForPostsListInputType {
  Banned = 'BANNED',
  Published = 'PUBLISHED',
}

export type PostsListWithCursorPaginationViewModel = {
  __typename?: 'PostsListWithCursorPaginationViewModel'
  items: Array<PostListViewModel>
  nextCursor: Scalars['Int']['output']
  page: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  pagesCount: Scalars['Int']['output']
  prevCursor: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}

export type Query = {
  __typename?: 'Query'
  paymentsList: PaymentsListWithPaginationViewModel
  postsList: PostsListWithCursorPaginationViewModel
  statisticsPaidAccounts: StatisticsForGraphicsAdminViewModel
  statisticsUploadedImages: StatisticsForGraphicsByImagesAdminViewModel
  statisticsUsers: StatisticsForGraphicsAdminViewModel
  user: UserForSuperAdminViewModel
  users: UsersListWithPaginationViewModel
}

export type QueryPaymentsListArgs = {
  pageNumber?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sortBy?: InputMaybe<SortByForPaymentsListInputType>
  sortDirection?: InputMaybe<SortDirectionType>
}

export type QueryPostsListArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>
  pageNumber?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sortBy?: InputMaybe<SortByForPostsListInputType>
  sortDirection?: InputMaybe<SortDirectionType>
  status?: InputMaybe<PostStatusForPostsListInputType>
}

export type QueryStatisticsPaidAccountsArgs = {
  comparisonEndDate?: InputMaybe<Scalars['Timestamp']['input']>
  comparisonStartDate?: InputMaybe<Scalars['Timestamp']['input']>
  endDate: Scalars['Timestamp']['input']
  grouping?: InputMaybe<GroupingType>
  startDate: Scalars['Timestamp']['input']
}

export type QueryStatisticsUploadedImagesArgs = {
  comparisonEndDate?: InputMaybe<Scalars['Timestamp']['input']>
  comparisonStartDate?: InputMaybe<Scalars['Timestamp']['input']>
  endDate: Scalars['Timestamp']['input']
  grouping?: InputMaybe<GroupingType>
  startDate: Scalars['Timestamp']['input']
}

export type QueryStatisticsUsersArgs = {
  comparisonEndDate?: InputMaybe<Scalars['Timestamp']['input']>
  comparisonStartDate?: InputMaybe<Scalars['Timestamp']['input']>
  endDate: Scalars['Timestamp']['input']
  grouping?: InputMaybe<GroupingType>
  startDate: Scalars['Timestamp']['input']
}

export type QueryUserArgs = {
  pageNumber?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  sortBy?: InputMaybe<SortByForUser>
  sortDirection?: InputMaybe<SortDirectionType>
  userId: Scalars['Int']['input']
}

export type QueryUsersArgs = {
  pageNumber?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sortBy?: InputMaybe<SortByForUsers>
  sortDirection?: InputMaybe<SortDirectionType>
  status?: InputMaybe<UserStatusInputType>
}

/** Sort By [id, createdAt, price,  paymentType] */
export enum SortByForPaymentsListInputType {
  CreatedAt = 'createdAt',
  Id = 'id',
  PaymentType = 'paymentType',
  Price = 'price',
}

/** Sort By [id, createdAt] */
export enum SortByForPostsListInputType {
  CreatedAt = 'createdAt',
  Id = 'id',
}

/** Sort By [id, createdAt] */
export enum SortByForUser {
  CreatedAt = 'createdAt',
  Id = 'id',
}

/** Sort By [id, userName, createdAt, lastSeen] */
export enum SortByForUsers {
  CreatedAt = 'createdAt',
  Id = 'id',
  LastSeen = 'lastSeen',
  UserName = 'userName',
}

/** Sort Direction [asc, desc] */
export enum SortDirectionType {
  Asc = 'Asc',
  Desc = 'Desc',
}

export type StatisticsDataByImages = {
  __typename?: 'StatisticsDataByImages'
  metrics: StatisticsMetricsImages
  metricsComparison?: Maybe<StatisticsMetricsImages>
}

export type StatisticsDataByUsers = {
  __typename?: 'StatisticsDataByUsers'
  metrics: StatisticsMetricsUsers
  metricsComparison?: Maybe<StatisticsMetricsUsers>
}

export type StatisticsForGraphicsAdminViewModel = {
  __typename?: 'StatisticsForGraphicsAdminViewModel'
  data?: Maybe<StatisticsDataByUsers>
  query?: Maybe<StatisticsQuery>
}

export type StatisticsForGraphicsByImagesAdminViewModel = {
  __typename?: 'StatisticsForGraphicsByImagesAdminViewModel'
  data?: Maybe<StatisticsDataByImages>
  query?: Maybe<StatisticsQuery>
}

export type StatisticsMetricsImages = {
  __typename?: 'StatisticsMetricsImages'
  countImages?: Maybe<Array<Scalars['Float']['output']>>
  maxCountImages: Scalars['Float']['output']
  maxRoundImages: Scalars['Float']['output']
  sumImages: Scalars['Float']['output']
  time_intervals: Array<Scalars['DateTime']['output']>
  total_rows: Scalars['Float']['output']
}

export type StatisticsMetricsUsers = {
  __typename?: 'StatisticsMetricsUsers'
  countUsers?: Maybe<Array<Scalars['Float']['output']>>
  maxCountUsers: Scalars['Float']['output']
  maxRoundUsers: Scalars['Float']['output']
  sumUsers: Scalars['Float']['output']
  time_intervals: Array<Scalars['DateTime']['output']>
  total_rows: Scalars['Float']['output']
}

export type StatisticsQuery = {
  __typename?: 'StatisticsQuery'
  comparisonEndDate?: Maybe<Scalars['DateTime']['output']>
  comparisonStartDate?: Maybe<Scalars['DateTime']['output']>
  dateEnd: Scalars['DateTime']['output']
  dateStart: Scalars['DateTime']['output']
  grouping?: Maybe<Scalars['String']['output']>
}

/** StatusSubscriptionType [PENDING, ACTIVE, FINISHED, DELETED] */
export enum StatusSubscriptionType {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Finished = 'FINISHED',
  Pending = 'PENDING',
}

export type Subscription = {
  __typename?: 'Subscription'
  createdPost: PostListViewModel
  createdSubscription: PaymentListViewModel
  imagePostDeleted: PostListViewModel
  postDeleted: PostDeletedViewModel
}

/** Subscription Type [MONTHLY, SEMI_ANNUALLY, YEARLY] */
export enum SubscriptionType {
  Monthly = 'MONTHLY',
  SemiAnnually = 'SEMI_ANNUALLY',
  Yearly = 'YEARLY',
}

export type UserFollowsForSuperAdminViewModel = {
  __typename?: 'UserFollowsForSuperAdminViewModel'
  createdAt: Scalars['DateTime']['output']
  fullName: Scalars['String']['output']
  userId: Scalars['Int']['output']
  userName: Scalars['String']['output']
}

export type UserFollowsWithPaginationViewModel = {
  __typename?: 'UserFollowsWithPaginationViewModel'
  items: Array<UserFollowsForSuperAdminViewModel>
  page: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  pagesCount: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}

export type UserForSuperAdminViewModel = {
  __typename?: 'UserForSuperAdminViewModel'
  createdAt: Scalars['DateTime']['output']
  followerCount?: Maybe<Scalars['Int']['output']>
  followersUser: UserFollowsWithPaginationViewModel
  followingCount?: Maybe<Scalars['Int']['output']>
  followingUser: UserFollowsWithPaginationViewModel
  fullName: Scalars['String']['output']
  imagesCount: Scalars['Float']['output']
  imagesUser: UserImagesWithPaginationViewModel
  lastSeen?: Maybe<Scalars['DateTime']['output']>
  likePostsCount?: Maybe<Scalars['Int']['output']>
  paymentsUser: UserPaymentsWithPaginationViewModel
  posts: Array<PostForSuperAdminViewModel>
  postsCount: Scalars['Float']['output']
  profileLink?: Maybe<Scalars['String']['output']>
  publicationCount?: Maybe<Scalars['Int']['output']>
  status: UserStatusType
  userId: Scalars['Int']['output']
  userName: Scalars['String']['output']
}

export type UserImagesForSuperAdminViewModel = {
  __typename?: 'UserImagesForSuperAdminViewModel'
  createdAt: Scalars['DateTime']['output']
  fileSize: Scalars['Int']['output']
  ownerId: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
  url: Scalars['String']['output']
}

export type UserImagesWithPaginationViewModel = {
  __typename?: 'UserImagesWithPaginationViewModel'
  items: Array<UserImagesForSuperAdminViewModel>
  page: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  pagesCount: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}

export type UserPaymentsForSuperAdminViewModel = {
  __typename?: 'UserPaymentsForSuperAdminViewModel'
  dataOfPayment: Scalars['DateTime']['output']
  endDateOfSubscription: Scalars['DateTime']['output']
  ownerId: Scalars['Int']['output']
  paymentType: Scalars['String']['output']
  price: Scalars['String']['output']
  subscription: Scalars['String']['output']
  type: SubscriptionType
}

export type UserPaymentsWithPaginationViewModel = {
  __typename?: 'UserPaymentsWithPaginationViewModel'
  items: Array<UserPaymentsForSuperAdminViewModel>
  page: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  pagesCount: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}

/** User Status [all, active, banned, pending] */
export enum UserStatusInputType {
  Active = 'active',
  All = 'all',
  Banned = 'banned',
  Pending = 'pending',
}

/** User Status PENDING - user registered but not activated; ACTIVE - user registered and activated; BANNED - user banned by admin; DELETED - user deleted by admin */
export enum UserStatusType {
  Active = 'ACTIVE',
  Banned = 'BANNED',
  Deleted = 'DELETED',
  Pending = 'PENDING',
}

export type UsersListWithPaginationViewModel = {
  __typename?: 'UsersListWithPaginationViewModel'
  items: Array<UserForSuperAdminViewModel>
  page: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  pagesCount: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}
