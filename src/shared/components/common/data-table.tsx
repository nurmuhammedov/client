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
import { PAGE_SIZE } from '@topcoder/config'
import { parseAsInteger, useQueryState } from 'nuqs'
import { Fragment, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  isLoading?: boolean
  totalPages?: number
  totalElements?: number
  withSerial?: boolean
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isLoading,
  totalPages,
  totalElements,
  withSerial = true,
}: DataTableProps<TData, TValue>) {
  const { t } = useTranslation('common')

  const [page] = useQueryState('page', parseAsInteger.withDefault(1))
  const [size] = useQueryState('size', parseAsInteger.withDefault(Number(PAGE_SIZE)))

  const tableColumns = useMemo(() => {
    if (!withSerial) return columns

    const serialColumn: ColumnDef<TData, TValue> = {
      id: 'serial_number',
      header: t('serial_number'),
      cell: ({ row }) => (page - 1) * size + row.index + 1,
      meta: {
        className: 'w-[1%] whitespace-nowrap text-center',
      },
    }

    return [serialColumn, ...columns]
  }, [columns, withSerial, page, size, t])

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  })

  return (
    <Fragment>
      <Table isLoading={isLoading} className={''}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const meta = header.column.columnDef.meta as any
                return (
                  <TableHead key={header.id} className={meta?.className}>
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
              <TableCell colSpan={tableColumns.length} className="h-24 text-center">
                <ContentLoader opacity={0} />
              </TableCell>
            </TableRow>
          ) : table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map((cell) => {
                  const meta = cell.column.columnDef.meta as any
                  return (
                    <TableCell key={cell.id} className={meta?.className}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={tableColumns.length} className="h-24 text-center">
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
