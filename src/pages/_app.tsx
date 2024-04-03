import type { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import 'app/styles/index.css'

import { client } from '../shared/config'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
