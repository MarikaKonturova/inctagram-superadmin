import { gql } from '@apollo/client'

export const GET_USER_PAYMENTS = gql`
  query getUserPayments(
    $userId: Int!
    $pageNumber: Int
    $pageSize: Int
    $sortBy: SortByForUser
    $sortDirection: SortDirectionType
  ) {
    user(
      userId: $userId
      pageNumber: $pageNumber
      pageSize: $pageSize
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      paymentsUser {
        page
        pageSize
        pagesCount
        totalCount
        items {
          dataOfPayment
          endDateOfSubscription
          price
          subscription
          paymentType
        }
      }
    }
  }
`
