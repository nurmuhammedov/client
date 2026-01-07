import { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@topcoder/components'
import { TypeAny } from '@topcoder/types'

const users = [
  { id: 1, name: 'Ali Valiyev', role: 'Admin' },
  { id: 2, name: 'Olim Hakimov', role: 'User' },
  { id: 2, name: 'Olim Hakimov', role: 'User' },
  { id: 2, name: 'Olim Hakimov', role: 'User' },
  { id: 2, name: 'Olim Hakimov', role: 'User' },
  { id: 2, name: 'Olim Hakimov', role: 'User' },
  { id: 2, name: 'Olim Hakimov', role: 'User' },
  { id: 2, name: 'Olim Hakimov', role: 'User' },
  { id: 2, name: 'Olim Hakimov', role: 'User' },
  { id: 2, name: 'Olim Hakimov', role: 'User' },
  { id: 2, name: 'Olim Hakimov', role: 'User' },
  { id: 2, name: 'Olim Hakimov', role: 'User' },
  { id: 2, name: 'Olim Hakimov', role: 'User' },
  { id: 2, name: 'Olim Hakimov', role: 'User' },
]

export function App() {
  const columns: ColumnDef<TypeAny, TypeAny>[] = [
    {
      accessorKey: 'id',
      header: 'Ekspert tashkiloti nomi',
    },
    {
      accessorKey: 'name',
      header: 'Ekspert tashkiloti STIRi',
    },
    {
      accessorKey: 'name',
      header: 'Tashkilot nomi',
    },
    {
      accessorKey: 'role',
      header: 'Tashkilot STIR',
    },
    {
      accessorKey: 'role',
      header: 'Reysterdagi obyektning nomi',
    },
    {
      accessorKey: 'name',
      header: 'Tashkilot nomi',
    },
    {
      accessorKey: 'role',
      header: 'Tashkilot STIR',
    },
    {
      accessorKey: 'role',
      header: 'Reysterdagi obyektning nomi',
    },
  ]

  return <DataTable columns={columns} data={users} totalElements={100} totalPages={1000000} />
}
