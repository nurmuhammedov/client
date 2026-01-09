// import { ColumnDef } from '@tanstack/react-table'
// import { Input } from '@topcoder/components'
// import { cn } from '@topcoder/lib'
// import { SearchIcon } from 'lucide-react'
// import { parseAsString, useQueryState } from 'nuqs'
// import React, { useMemo, useState } from 'react'
//
// interface BaseFilterProps {
//   filterKey: string
//   placeholder?: string
//   className?: string
// }
//
// const FilterSearch = ({ filterKey, className, maxLength }: BaseFilterProps & { maxLength?: number }) => {
//   // MUHIM: Parserni useMemo bilan o'rab, uning referensini stabil qilamiz.
//   // Aks holda har renderda yangi parser obyekti yaratilib, nuqs ni chalg'itadi.
//   const parser = useMemo(() => parseAsString.withOptions({ throttleMs: 500 }).withDefault(''), [])
//
//   const [_, set] = useQueryState(filterKey, parser)
//
//   const [value, setValue] = useState()
//
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     void set(e.target.value)
//   }
//
//   console.log(value, 'render')
//
//   return (
//     <div className="relative h-full w-full bg-white">
//       <SearchIcon className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
//       <Input
//         value={value ?? ''}
//         placeholder=""
//         maxLength={maxLength}
//         onChange={(e) => setValue(e?.target?.value || '')}
//         className={cn(
//           'h-8 w-full border-none bg-transparent pl-8 pr-2 text-xs font-normal shadow-none outline-none',
//           'focus-visible:border-none focus-visible:ring-0 focus-visible:ring-offset-0',
//           className
//         )}
//       />
//     </div>
//   )
// }
//
// interface ColumnFilterInputProps<TData, TValue> {
//   column: ColumnDef<TData, TValue>
// }
//
// export const ColumnFilterInput = <TData, TValue>({ column }: ColumnFilterInputProps<TData, TValue>) => {
//   const filterParams = column.meta?.filter
//   if (!filterParams?.key) return null
//   return <FilterSearch filterKey={filterParams.key} maxLength={filterParams.maxLength} />
//

const ColumnFilterInput = () => {
  return <div></div>
}

export default ColumnFilterInput
