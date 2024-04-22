import React, { type ButtonHTMLAttributes, type ReactNode, memo } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean
  children?: ReactNode
  className?: string
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  variant?: 'clear' | 'outline' | 'primary' | 'secondary' | 'textButton'
}

export const Button = memo((props: ButtonProps) => {
  const { block, children, className, disabled, onClick, variant, ...otherProps } = props

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={'button'}
      {...otherProps}
    >
      {children}
    </button>
  )
})
