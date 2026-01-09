import { ColumnDef } from '@tanstack/react-table'
import { DataTable, DataTableRowActions } from '@topcoder/components'
import { TypeAny } from '@topcoder/types'

const mockData = Array.from({ length: 200 }).map((_, index) => {
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
  const isLoading = false
  const totalElements = mockData.length
  const totalPages = Math.ceil(totalElements / 10)

  const onEdit = (data: TypeAny) => console.log(data, 'onEdit')

  const onView = (data: TypeAny) => console.log(data, 'onView')

  const columns: ColumnDef<TypeAny, TypeAny>[] = [
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
