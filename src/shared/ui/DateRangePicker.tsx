/* eslint-disable no-nested-ternary */
'use client'

import { CalendarIcon } from '@radix-ui/react-icons'
import { addDays, format } from 'date-fns'
import * as React from 'react'
import { DateRange } from 'react-day-picker'

import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from 'shared/ui'
import { cn } from 'shared/utils'

export function DatePickerWithRange({
  className,
  onDataChange,
}: React.HTMLAttributes<HTMLDivElement> & {
  onDataChange: (newDate: DateRange | undefined) => void
}) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 30),
  })

  const onDateChange = (newDate: DateRange | undefined) => {
    setDate(newDate)
    onDataChange(newDate)
  }

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id={'date'}
            variant={'ghost'}
            className={cn(
              'w-[300px] flex justify-between text-left font-normal border-[1.5px] rounded-sm border-dark-300 bg-dark-500 px-[6px] py-[6px]',
              !date && 'text-muted-foreground'
            )}
          >
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'MM/dd/yyyy')} - {format(date.to, 'MM/dd/yyyy')}
                </>
              ) : (
                format(date.from, 'MM/dd/yyyy')
              )
            ) : (
              <span>Pick a date</span>
            )}
            <CalendarIcon className={' h-6 w-6'} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className={'w-auto p-0'} align={'start'}>
          <Calendar
            initialFocus
            mode={'range'}
            defaultMonth={date?.from}
            selected={date}
            onSelect={onDateChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
