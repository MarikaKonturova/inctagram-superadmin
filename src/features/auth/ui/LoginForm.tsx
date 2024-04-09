import { useQuery } from '@apollo/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from 'features/auth/lib/loginFormSchema'
import { GET_DATA } from 'features/auth/model/getData'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { Button, FormInput, FormWrapper } from 'shared/ui'
import { z } from 'zod'

export type LoginFormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const { data, refetch } = useQuery(GET_DATA, {
    fetchPolicy: 'no-cache',
  })

  const { control, handleSubmit } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })

  const handleFormSubmit = async ({ email, password }: LoginFormValues) => {
    const encoder = new TextEncoder()

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
    <FormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <h2>Sign In</h2>
      <FormInput
        control={control}
        label={'Email'}
        name={'email'}
        placeholder={'Enter your email'}
      />
      <FormInput
        control={control}
        label={'Password'}
        name={'password'}
        placeholder={'Enter your password'}
        type={'password'}
      />
      <Button block type={'submit'}>
        Sign In
      </Button>
    </FormWrapper>
  )
}
