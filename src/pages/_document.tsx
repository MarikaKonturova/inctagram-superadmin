import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className={'dark'} lang={'en'}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
