import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@topcoder/components'

const users = [
  { id: 1, name: 'Ali Valiyev', role: 'Admin' },
  { id: 2, name: 'Olim Hakimov', role: 'User' },
  { id: 2, name: 'Olim Hakimov', role: 'User' },
]

export function App() {
  return (
    // <div className="rounded-md border">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Ism</TableHead>
          <TableHead>Rol</TableHead>
          <TableHead>Rol</TableHead>
          <TableHead>Rol</TableHead>
          <TableHead>Rol</TableHead>
          <TableHead>Rol</TableHead>
          <TableHead>Rol</TableHead>
          <TableHead>Rol</TableHead>
          <TableHead>Rol</TableHead>
          <TableHead>Rol</TableHead>
          <TableHead>Rol</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    // </div>
  )
}
