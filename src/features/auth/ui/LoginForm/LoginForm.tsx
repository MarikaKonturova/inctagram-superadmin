import { zodResolver } from '@hookform/resolvers/zod'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button, FormInput, FormWrapper } from 'shared/ui'

import { loginSchema, useGetDataQuery } from 'features/auth'

export type LoginFormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const { refetch } = useGetDataQuery({ fetchPolicy: 'no-cache' })
  const router = useRouter()

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
        toast.success('refetched')
        !!data && router.push('/')
      })
      .catch(() => {
        toast.error('there is error')
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
