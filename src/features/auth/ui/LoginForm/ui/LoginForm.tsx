import { Button, FormWrapper, Input } from 'shared/ui'

export const LoginForm = () => {
  return (
    <FormWrapper>
      <h2>Sign In</h2>
      <Input label={'Email'} placeholder={'Enter your email'} />
      <Input label={'Password'} placeholder={'Enter your password'} type={'password'} />
      <Button block type={'submit'}>
        Sign In
      </Button>
    </FormWrapper>
  )
}
