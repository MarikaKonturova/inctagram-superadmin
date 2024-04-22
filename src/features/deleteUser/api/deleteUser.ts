import { gql } from '@apollo/client'

export const DELETE_USER = gql`
  mutation deleteUser($userId: Float!) {
    deleteUser(userId: $userId)
  }
`
