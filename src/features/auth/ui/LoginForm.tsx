import { useQuery } from '@apollo/client'
import Cookies from 'js-cookie'
import { Button, FormWrapper, Input } from 'shared/ui'

import { GET_DATA } from '../model/getData'

export const LoginForm = () => {
  const { data, refetch } = useQuery(GET_DATA, {
    fetchPolicy: 'no-cache',
  })

  const handleFormSubmit = async ({ email, password }: any) => {
    const encoder = new TextEncoder()

    email = 'admin@admin.me'
    password = 'admin'

    const data = encoder.encode(`${email}:${password}`)

    const binaryString = Array.from(data)
      .map(byte => String.fromCharCode(byte))
      .join('')

    const authorization = btoa(binaryString)

    Cookies.set('authToken', authorization)

    refetch()
      .then(() => {
        console.log('refetched')
      })
      .catch(() => {
        console.log('there is error')
      })
  }

  return (
    <FormWrapper>
      <h2>Sign In</h2>
      <Input label={'Email'} placeholder={'Enter your email'} />
      <Input label={'Password'} placeholder={'Enter your password'} type={'password'} />
      <Button block onClick={handleFormSubmit}>
        Sign In
      </Button>
    </FormWrapper>
  )
}
