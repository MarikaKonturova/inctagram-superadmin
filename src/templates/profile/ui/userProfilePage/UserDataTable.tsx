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
import { useRouter } from 'next/router'
import { useState } from 'react'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'shared/ui'
import { formatFollowUser } from 'shared/utils/convertedFormat'

import { useGetUserQuery } from 'entities/user'

interface DataTableProps<TData> {
  columns: ColumnDef<TData>[]
  selector: 'Followers' | 'Following'
}

export function UserDataTable<TData>({ columns, selector }: DataTableProps<TData>) {
  const router = useRouter()
  const { userId } = router.query
  const { data } = useGetUserQuery({ variables: { userId: Number(userId) } })

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const userData =
    selector === 'Followers'
      ? data?.user.followersUser.items || []
      : data?.user.followingUser.items || []

  const formattedData = userData.map(formatFollowUser)

  const table = useReactTable({
    columns,
    data: formattedData as TData[],
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
      <div
        className={'border max-h-[700px] overflow-scroll lg:w-[1200px] md:w-[800px] sm:w-[500px]'}
      >
        <Table>
          <TableHeader className={'bg-dark-500'}>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow data-state={row.getIsSelected() ? 'selected' : undefined} key={row.id}>
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
