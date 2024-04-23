import type { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import 'app/styles/index.css'
import { NextPage } from 'next'
import { ReactElement } from 'react'
import { client } from 'shared/config'
import ThemeProvider from 'shared/hooks/ThemeProvider'

export type NextPageWithLayout<P = Record<string, unknown>> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactElement
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        {getLayout(
          <>
            <Component {...pageProps} />
          </>
        )}
      </ThemeProvider>
    </ApolloProvider>
  )
}
