import { ColumnDef } from '@tanstack/react-table'
import { Button, DataTable, DataTableRowActions } from '@topcoder/components'
import { TypeAny } from '@topcoder/types'
import { parseAsString, useQueryState } from 'nuqs'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

const mockData = Array.from({ length: 0 }).map((_, index) => {
  const types = [
    'Kompyuter texnikasi',
    'Printer va nusxalash',
    'Tarmoq qurilmalari',
    'Server uskunalari',
    'Proyektorlar',
  ]
  const names = ['HP Pavilion 15', 'Canon i-SENSYS', 'TP-Link Archer', 'Dell PowerEdge', 'Epson EB-X06']

  return {
    id: index + 1,
    equipmentType: types[index % types.length],
    name: `${names[index % names.length]} - Model ${index + 1}`,
  }
})

export function App() {
  const data = mockData
  const [key] = useQueryState('search', parseAsString.withDefault(''))
  const navigate = useNavigate()
  console.log(key, 'key')
  const isLoading = false
  const totalElements = mockData.length
  const totalPages = Math.ceil(totalElements / 10)

  const onEdit = (data: TypeAny) => console.log(data, 'onEdit')
  const onView = (data: TypeAny) => console.log(data, 'onView')

  const columns = useMemo<ColumnDef<TypeAny, TypeAny>[]>(
    () => [
      {
        accessorKey: 'equipmentType',
        header: 'Test',
        meta: {
          filter: {
            key: 'search',
            type: 'search',
            options: mockData,
          },
        },
      },
      {
        id: 'actions',
        header: 'Amallar',
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
    ],
    []
  )

  return (
    <>
      <div className="mb-2 flex items-center justify-end gap-2">
        <Button onClick={() => navigate('form')}>Form</Button>
      </div>
      <DataTable
        columns={columns}
        showFilters={true}
        isLoading={isLoading}
        data={data}
        totalElements={totalElements}
        totalPages={totalPages}
      />
    </>
  )
}
