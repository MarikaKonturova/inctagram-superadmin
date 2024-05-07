import { ApolloClient, createHttpLink, InMemoryCache, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'
import Cookies from 'js-cookie'

const httpLink = createHttpLink({
  uri: 'https://twin.cygan.lol/graphql',
})

const wsLink = new GraphQLWsLink(
  createClient({
    connectionParams: () => {
      return {
        headers: {
          authorization: `Basic ${Cookies.get('authToken')}`,
        },
      }
    },
    url: 'wss://twin.cygan.lol/subscriptions',
  })
)

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Basic ${Cookies.get('authToken')}`,
    },
  }
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)

    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  },
  wsLink,
  authLink.concat(httpLink)
)

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
})
