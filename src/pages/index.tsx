import Head from 'next/head'

import { Home } from 'templates'

export default function Page() {
  return (
    <>
      <Head>
        <title>Inctagram Admin</title>
        <meta content={'Generated by create next app'} name={'description'} />
        <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />

        <link href={'/favicon.ico'} rel={'icon'} />
      </Head>
      <main data-theme={'dark'}>
        <Home />
        <h1 className={'text-secondary-color h-10 w-sidebar'}>Hello world</h1>
      </main>
    </>
  )
}
