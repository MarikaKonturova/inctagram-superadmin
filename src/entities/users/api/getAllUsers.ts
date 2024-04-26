import { gql } from '@apollo/client'

export const GET_ALL_USERS = gql`
  query GetAllUsers(
    $pageSize: Int!
    $pageNumber: Int!
    $status: UserStatusInputType
    $search: String
    $sortBy: SortByForUsers
    $sortDirection: SortDirectionType
  ) {
    users(
      pageSize: $pageSize
      pageNumber: $pageNumber
      status: $status
      search: $search
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      totalCount
      pagesCount
      items {
        userId
        userName
        fullName
        lastSeen
        createdAt
        status
      }
    }
  }
`
