import { clsx } from 'clsx'
import { type FC, type PropsWithChildren } from 'react'

interface ContainerProps {
  className?: string
  maxWidth?: 'large' | 'medium'
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
  maxWidth = 'large',
}) => {
  return (
    <div className={clsx('w-full h-full mx-auto px-60', [maxWidth], className)}>{children}</div>
  )
}
