import { ColumnDef } from '@tanstack/react-table'
import { DataTable, DataTableRowActions } from '@topcoder/components'
import { TypeAny } from '@topcoder/types'

// 200 ta soxta ma'lumot generatsiya qilish
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
    equipmentType: types[index % types.length], // Har xil tur bo'lishi uchun aylantiramiz
    name: `${names[index % names.length]} - Model ${index + 1}`, // Har xil nom bo'lishi uchun
  }
})

export function App() {
  // const [page] = useQueryState('page', parseAsString.withDefault('1'))
  // const [size] = useQueryState('size', parseAsString.withDefault(String(PAGE_SIZE)))

  const data = mockData
  const isLoading = false
  const totalElements = mockData.length
  // Agar pagination ishlayotganini ko'rmoqchi bo'lsangiz, buni 20 (200/10) qilib qo'yishingiz mumkin
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
      meta: {
        className: 'w-1',
      } as any,
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
