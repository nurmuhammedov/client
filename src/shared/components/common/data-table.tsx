import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import {
  ContentLoader,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@topcoder/components'
import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  isLoading?: boolean
  totalPages?: number
  totalElements?: number
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isLoading,
  totalPages,
  totalElements,
}: DataTableProps<TData, TValue>) {
  const { t } = useTranslation('common')

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  })

  return (
    <Fragment>
      <Table isLoading={isLoading}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow className="relative">
              <TableCell colSpan={columns.length} className="h-24 text-center">
                <ContentLoader opacity={0} />
              </TableCell>
            </TableRow>
          ) : table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                {t('no_results')}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {totalPages && totalPages > 0 ? (
        <Pagination isLoading={isLoading} totalPages={totalPages} totalElements={totalElements} />
      ) : null}
    </Fragment>
  )
}
