import { ApolloClient, InMemoryCache, createHttpLink, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'
import * as process from 'process'

const httpLink = createHttpLink({
  uri: 'https://twin.cygan.lol/graphql',
})

const wsLink = new GraphQLWsLink(
  createClient({
    connectionParams: () => {
      return {
        headers: {
          authorization: `Basic ${process.env.NEXT_PUBLIC_SECRET_TOKEN}`,
        },
      }
    },
    url: 'https://twin.cygan.lol/subscriptions',
  })
)

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Basic ${process.env.NEXT_PUBLIC_SECRET_TOKEN}`,
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
