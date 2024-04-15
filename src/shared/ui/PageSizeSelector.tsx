import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './Select'

type PageSizeSelectorProps = {
  pageSize: string
  setPageSize: (pageSize: string) => void
}

const PageSizeVariants = [10, 20, 30, 40, 50]

export function PageSizeSelector({ pageSize, setPageSize }: PageSizeSelectorProps) {
  return (
    <Select onValueChange={setPageSize} value={pageSize}>
      <SelectTrigger className={'w-[100px]'}>
        <SelectValue placeholder={pageSize} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {PageSizeVariants.map(size => (
            <SelectItem key={size} value={size.toString()}>
              {size}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
