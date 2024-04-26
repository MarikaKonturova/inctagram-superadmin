import React, { type ButtonHTMLAttributes, type ReactNode, memo } from 'react'

import { cn } from 'shared/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean
  children?: ReactNode
  className?: string
  disabled?: boolean
  moreOptions?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  variant?: 'clear' | 'destructive' | 'ghost' | 'outline' | 'primary' | 'secondary' | 'textButton'
}

export const Button = memo((props: ButtonProps) => {
  const {
    block,
    children,
    className,
    disabled,
    onClick,
    variant = 'primary',
    ...otherProps
  } = props

  const baseStyles = `cursor-pointer px-6 py-1.5 font-h3 text-white rounded transition duration-500 ease-in-out ${
    disabled ? 'cursor-not-allowed' : ''
  }`

  const variantStyles = {
    clear: `font-regular-400 bg-transparent border-none outline-none`,
    destructive:
      'bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90',
    ghost:
      'hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50',
    outline: `text-primary-500 bg-transparent border border-primary-500 hover:bg-primary-100 hover:border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-700 ${disabled ? 'text-primary-900 border-primary-900' : ''}`,
    primary: `text-white bg-primary-500 hover:bg-primary-100 focus:bg-primary-700 ${disabled ? 'text-light-900 bg-primary-900' : ''}`,
    secondary: `text-dark bg-light hover:bg-light-900 ${disabled ? 'text-dark-100 bg-light-900' : ''}`,
    textButton: `text-primary-500 bg-transparent border-none hover:text-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-700 ${disabled ? 'cursor-not-allowed text-primary-900' : ''}`,
  }

  const finalClassName = cn(block ? 'w-full' : '', baseStyles, variantStyles[variant], className)

  return (
    <button
      className={finalClassName}
      disabled={disabled}
      onClick={onClick}
      type={'button'}
      {...otherProps}
    >
      {children}
    </button>
  )
})
