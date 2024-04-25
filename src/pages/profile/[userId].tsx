import Head from 'next/head'
import React from 'react'

import { UserProfilePage } from '../../templates/profile/ui/userProfilePage/UserProfilePage'

export default function Profile() {
  return (
    <>
      <Head>
        <title>Inctagram Admin</title>
        <meta content={'Generated by create next app'} name={'description'} />
        <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />

        <link href={'/favicon.ico'} rel={'icon'} />
      </Head>
      <main className={'w-[100vw] h-[100vh] flex pt-10 justify-center'}>
        <UserProfilePage />
      </main>
    </>
  )
}
