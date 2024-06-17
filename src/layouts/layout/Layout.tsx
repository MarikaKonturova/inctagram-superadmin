import Cookies from 'js-cookie'
import { type NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Loader from 'public/images/loader.gif'
import { useEffect, useState, type PropsWithChildren } from 'react'

import { Header } from 'widgets/header'

interface LayoutProps extends PropsWithChildren {
  withAuth?: boolean
}

export const Layout: NextPage<LayoutProps> = props => {
  const router = useRouter()
  const [cookie, setCookie] = useState(false)

  useEffect(() => {
    if (!Cookies.get('authToken')) {
      router.push('/auth/login')
    } else {
      setCookie(true)
    }
  }, [router, setCookie])

  const { children } = props

  return (
    <div>
      <Header />
      {!cookie ? (
        <Image
          src={Loader}
          alt={''}
          style={{
            width: '60px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginLeft: '-60px',
            marginTop: '-60px',
          }}
        />
      ) : (
        <main className={'h-[calc(100vh-60px)][transition:background-color_0.5s]'}>{children}</main>
      )}
    </div>
  )
}
