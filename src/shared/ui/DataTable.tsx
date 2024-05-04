'use client'

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Dispatch, SetStateAction, useState } from 'react'

import {
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'shared/ui'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  searchKey?: string
  showBlocked?: 'Not Selected' | 'Blocked' | 'Not Blocked'
  setShowBlocked?: Dispatch<SetStateAction<'Not Selected' | 'Blocked' | 'Not Blocked'>>
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  showBlocked,
  setShowBlocked,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const usersToShow = [{ value: 'Not Selected' }, { value: 'Blocked' }, { value: 'Not Blocked' }]

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    state: {
      columnFilters,
      columnVisibility,
      rowSelection,
      sorting,
    },
  })

  return (
    <div>
      <div className={'flex items-center justify-between'}>
        {searchKey && (
          <div className={'flex items-center py-4'}>
            <Input
              placeholder={'Search'}
              value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ''}
              onChange={event => table.getColumn(searchKey)?.setFilterValue(event.target.value)}
              className={'max-w-sm'}
            />
          </div>
        )}
        {showBlocked && (
          <Select onValueChange={setShowBlocked as (value: string) => void} value={showBlocked}>
            <SelectTrigger className={'w-[200px]'}>
              <SelectValue placeholder={showBlocked} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {usersToShow.map(reason => (
                  <SelectItem key={reason.value} value={reason.value}>
                    {reason.value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      </div>
      <div
        className={
          'rounded-md border max-h-[700px] overflow-scroll lg:w-[1200px] md:w-[800px] sm:w-[500px]'
        }
      >
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow data-state={row.getIsSelected() && 'selected'} key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell className={'h-24 text-center'} colSpan={columns.length}>
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
