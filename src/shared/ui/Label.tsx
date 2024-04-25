// Label component extends from shadcnui - https://ui.shadcn.com/docs/components/label

'use client'
import * as LabelPrimitive from '@radix-ui/react-label'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { cn } from 'shared/utils'

export const Label = forwardRef<
  ElementRef<typeof LabelPrimitive.Root>,
  ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    className={cn(
      'text-sm font-regular  text-light-900 dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className
    )}
    ref={ref}
    {...props}
  />
))
