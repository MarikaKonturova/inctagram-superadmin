import { ApolloProvider } from '@apollo/client'
import { NextPage } from 'next'
import { ReactElement } from 'react'

import { client } from 'shared/config'
import { Theme } from 'shared/constants/theme'
import ThemeProvider from 'shared/context/ThemeProvider'

import type { AppProps } from 'next/app'

import 'app/styles/index.css'

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
      <ThemeProvider initialTheme={Theme.DARK}>
        {getLayout(
          <>
            <Component {...pageProps} />
          </>
        )}
      </ThemeProvider>
    </ApolloProvider>
  )
}
