// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
'use client'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import {
  ChangeEvent,
  ComponentProps,
  ComponentPropsWithoutRef,
  MouseEventHandler,
  forwardRef,
  useState,
} from 'react'

import { Eye, EyeOff, Search } from 'shared/assets/icons'
import { Label } from 'shared/ui'
import { cn } from 'shared/utils'

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  errorMessage?: string
  label?: string
  labelProps?: ComponentProps<'label'>
  onValueChange?: (value: string) => void
  rootContainerProps?: ComponentProps<'div'>
  type?: 'password' | 'search' | 'text'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      errorMessage,
      label,
      labelProps,
      onChange,
      onValueChange,
      placeholder,
      rootContainerProps,
      type,
      value,
      ...restProps
    },
    ref
  ) => {
    const radius = 100 // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = ({
      clientX,
      clientY,
      currentTarget,
    }) => {
      const { left, top } = currentTarget && currentTarget.getBoundingClientRect()

      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }

    const isShowPasswordButton = type === 'password'
    const isSearch = type === 'search'

    const setShowPasswordHandler = () => setShowPassword(prevValue => !prevValue)

    const getCurrentInputType = (type: InputProps['type'], showPassword: boolean) => {
      if (type === 'password' && showPassword) {
        return 'text'
      }

      return type
    }

    const currentInputType = getCurrentInputType(type, showPassword)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.currentTarget.value)
    }

    const classNames = {
      errorMessage: cn('text-red-500 text-sm'),
      field: cn(
        `
       flex h-10 w-full border-none bg-dark-500 border border-solid border-dark-300 text-light-100 shadow-input px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
            disabled:cursor-not-allowed disabled:opacity-50
          \tdark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
            group-hover/input:shadow-none transition duration-400`,
        isSearch && 'pl-10',
        !!errorMessage && 'text-danger-300 border-danger-300',
        className
      ),
      inputWrapper: 'relative p-[2px] rounded-lg transition duration-300 group/input',
      label: cn('block mb-2 text-sm', restProps.disabled && 'opacity-50', labelProps?.className),
      passwordButton: cn(
        'absolute inset-y-0 right-0 flex items-center px-3 text-sm',
        restProps.disabled && 'opacity-50'
      ),
      rootContainer: cn('w-full w-[330px]', rootContainerProps?.className),
      searchIcon: cn(
        'absolute left-3 top-1/2 transform -translate-y-1/2',
        restProps.disabled && 'opacity-50'
      ),
    }

    return (
      <div className={classNames.rootContainer}>
        {label && <Label className={classNames.label}>{label}</Label>}
        <motion.div
          className={classNames.inputWrapper}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          onMouseMove={handleMouseMove}
          style={{
            background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
          }}
        >
          {isSearch && <Search className={classNames.searchIcon} />}
          <input
            autoFocus
            className={classNames.field}
            onChange={onChangeHandler}
            placeholder={placeholder}
            ref={ref}
            type={currentInputType}
            value={value}
            {...restProps}
          />

          {isShowPasswordButton && (
            <button
              className={classNames.passwordButton}
              disabled={restProps.disabled}
              onClick={setShowPasswordHandler}
              type={'button'}
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          )}
        </motion.div>
        {!!errorMessage && <p className={classNames.errorMessage}>{errorMessage}</p>}
      </div>
    )
  }
)
