import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    if (!Cookies.get('authToken')) {
      router.push('/auth/login')
    } else {
      router.push('/usersList')
    }
  }, [router])

  return null
}
