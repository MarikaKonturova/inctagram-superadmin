import { gql } from '@apollo/client'

export const GET_DATA = gql`
  query {
    users {
      items {
        userId
      }
    }
  }
`
