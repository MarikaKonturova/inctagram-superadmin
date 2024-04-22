import { ApolloProvider } from '@apollo/client'

import { client } from 'shared/config'

import type { AppProps } from 'next/app'

import 'app/styles/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
