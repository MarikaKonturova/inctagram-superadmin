import { CSSProperties, ComponentPropsWithoutRef } from 'react'
import { cn } from 'shared/utils'

export interface FormWrapperProps extends ComponentPropsWithoutRef<'form'> {
  containerStyles?: CSSProperties
}

export const FormWrapper = ({ className, containerStyles, ...restProps }: FormWrapperProps) => {
  return (
    <div className={cn('', containerStyles)}>
      <form
        className={cn(
          `flex flex-col items-center gap-6 pt-6 px-6 pb-9 w-fit-content bg-dark-500 border border-dark-500 rounded-md`,
          className
        )}
        {...restProps}
      />
    </div>
  )
}
