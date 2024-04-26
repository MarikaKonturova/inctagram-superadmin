import { gql } from '@apollo/client'

export const GET_DATA = gql`
  query getData {
    users {
      items {
        userId
      }
    }
  }
`
