import { ColumnDef } from '@tanstack/react-table'
import { DataTable, DataTableRowActions } from '@topcoder/components'
import { TypeAny } from '@topcoder/types'
import { parseAsString, useQueryState } from 'nuqs'
import { useMemo } from 'react' // useMemo import qilindi

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
  // Bu yerdagi parser ham stabil bo'lishi kerak yoki oddiy holatda qoldirsa ham bo'ladi,
  // chunki bu o'qish uchun.
  const [key] = useQueryState('search', parseAsString.withDefault(''))

  console.log(key, 'key')
  const isLoading = false
  const totalElements = mockData.length
  const totalPages = Math.ceil(totalElements / 10)

  const onEdit = (data: TypeAny) => console.log(data, 'onEdit')
  const onView = (data: TypeAny) => console.log(data, 'onView')

  // MUHIM: columns o'zgaruvchisini useMemo ichiga olamiz.
  const columns = useMemo<ColumnDef<TypeAny, TypeAny>[]>(
    () => [
      {
        accessorKey: 'equipmentType',
        header: 'Qurilmaning turi',
        meta: {
          filter: {
            key: 'search',
            type: 'search',
            options: mockData,
          },
        },
      },
      {
        accessorKey: 'name',
        header: 'Qurilmaning quyi turi',
        meta: {
          filter: {
            key: 'search1',
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
    [] // Hech qanday tashqi o'zgaruvchiga bog'liq emas (onEdit/onView dan tashqari, ular o'zgarmas deb hisoblaymiz)
  )

  return (
    <>
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
