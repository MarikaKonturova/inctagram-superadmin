import Head from 'next/head'

import { getLayoutWithSidebar } from 'layouts'
import { PaymentsList } from 'templates/paymentsList'

export default function PaymentsListPage() {
  return (
    <>
      <Head>
        <title>Inctagram Admin</title>
        <meta content={'Generated by create next app'} name={'description'} />
        <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />

        <link href={'/favicon.ico'} rel={'icon'} />
      </Head>
      <main className={'w-full'}>
        <PaymentsList />
      </main>
    </>
  )
}

PaymentsListPage.getLayout = getLayoutWithSidebar
