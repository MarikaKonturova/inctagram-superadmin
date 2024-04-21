import React, { ButtonHTMLAttributes, ReactNode, forwardRef, memo } from 'react'
import { cn } from 'shared/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean
  children?: ReactNode
  className?: string
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  variant?: 'clear' | 'default' | 'outline' | 'primary' | 'secondary' | 'textButton'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
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
    default:
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300',
    outline: `text-primary-500 bg-transparent border border-primary-500 hover:bg-primary-100 hover:border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-700 ${
      disabled ? 'text-primary-900 border-primary-900' : ''
    }`,
    primary: `text-white bg-primary-500 hover:bg-primary-100 focus:bg-primary-700 ${
      disabled ? 'text-light-900 bg-primary-900' : ''
    }`,
    secondary: `text-dark bg-light hover:bg-light-900 ${
      disabled ? 'text-dark-100 bg-light-900' : ''
    }`,
    textButton: `text-primary-500 bg-transparent border-none hover:text-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-700 ${
      disabled ? 'cursor-not-allowed text-primary-900' : ''
    }`,
  }

  const finalClassName = cn(block ? 'w-full' : '', baseStyles, variantStyles[variant], className)

  return (
    <button
      className={finalClassName}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      type={'button'}
      {...otherProps}
    >
      {children}
    </button>
  )
})
