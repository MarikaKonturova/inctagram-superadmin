import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: 'Email must contain A-Z, a-z , @' }),
  password: z
    .string()
    .regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-|=`]).{6,20}$/, {
      message: 'Password must contain 1-9, a-z, A-Z, and specified symbols',
    }),
})
