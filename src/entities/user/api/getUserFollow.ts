import { gql } from '@apollo/client'

export const GET_USER_FOLLOW = gql`
  query GetUserFollow(
    $userId: Int!
    $pageSize: Int!
    $pageNumber: Int!
    $sortDirection: SortDirectionType
    $sortBy: SortByForUser
  ) {
    user(
      userId: $userId
      pageSize: $pageSize
      pageNumber: $pageNumber
      sortDirection: $sortDirection
      sortBy: $sortBy
    ) {
      followerCount
      followingCount
      followersUser {
        totalCount
        pagesCount
        page
        pageSize
        items {
          userId
          fullName
          userName
          createdAt
        }
      }
      followingUser {
        totalCount
        pagesCount
        page
        pageSize
        items {
          userId
          fullName
          userName
          createdAt
        }
      }
    }
  }
`
