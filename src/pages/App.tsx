import { ColumnDef } from '@tanstack/react-table'
import { usePaginatedData } from '@topcoder/api'
import { DataTable, DataTableRowActions } from '@topcoder/components'
import { PAGE_SIZE } from '@topcoder/config'
import { TypeAny } from '@topcoder/types'
import { parseAsString, useQueryState } from 'nuqs'

export function App() {
  const [page] = useQueryState('page', parseAsString.withDefault('1'))
  const [size] = useQueryState('size', parseAsString.withDefault(String(PAGE_SIZE)))

  const { data, isLoading, totalPages, totalElements } = usePaginatedData<TypeAny>(
    'child-equipments',
    'child-equipment',
    {
      page,
      size,
    }
  )

  const onEdit = (data: TypeAny) => console.log(data, 'onEdit')

  const onView = (data: TypeAny) => console.log(data, 'onView')

  const columns: ColumnDef<TypeAny, TypeAny>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'equipmentType',
      header: 'Qurilmaning turi',
    },
    {
      accessorKey: 'name',
      header: 'Qurilmaning quyi turi',
    },
    {
      id: 'actions',
      cell: (cell) => (
        <DataTableRowActions
          deleteEndpoint="child-equipments/"
          deleteQueryKey="child-equipment"
          cell={cell}
          onEdit={onEdit}
          onView={onView}
        />
      ),
    },
  ]

  return (
    <>
      <DataTable
        columns={columns}
        isLoading={isLoading}
        data={data}
        totalElements={totalElements}
        totalPages={totalPages}
      />
    </>
  )
}
