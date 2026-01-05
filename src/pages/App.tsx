import { Pagination } from '@topcoder/components/common/pagination'

// const schema = z.object({
//   phone: z.string().length(13, 'required_field'),
//   name: z.string().min(1, 'required_field'),
// })

export function App() {
  // const [value, setValue] = React.useState<number | null>()
  //
  // const form = useForm<InferType<typeof schema>>({
  //   resolver: zodResolver(schema),
  //   defaultValues: {
  //     name: '',
  //     phone: '978280969',
  //   },
  // })
  //
  // const data = [
  //   {
  //     id: 1,
  //     name: 'Kalta',
  //   },
  //   {
  //     id: 2,
  //     name: 'Biroz uzunroq matn',
  //   },
  //   {
  //     id: 3,
  //     name: 'Juda uzun va batafsil yozilgan matn namunasi',
  //   },
  //   {
  //     id: 4,
  //     name: 'Qisqa',
  //     count: 1212,
  //   },
  //   {
  //     id: 5,
  //     name: 'O‘rtacha uzunlikdagi variant matni',
  //   },
  //   // {
  //   //   id: 6,
  //   //   name: 'Bu juda uzun bo‘lgan, test qilish uchun maxsus yozilgan variant matni hisoblanadi',
  //   // },
  //   // {
  //   //   id: 7,
  //   //   name: 'Kichik',
  //   // },
  //   // {
  //   //   id: 8,
  //   //   name: 'Bir oz cho‘zilgan variant nomi',
  //   // },
  //   // {
  //   //   id: 9,
  //   //   name: 'Juda uzun, bir nechta so‘zlardan iborat bo‘lgan va interfeysda qanday ko‘rinishini tekshirish uchun ishlatiladigan matn',
  //   // },
  //   // {
  //   //   id: 10,
  //   //   name: 'Qisqa matn',
  //   // },
  //   // {
  //   //   id: 11,
  //   //   name: 'Oddiy va tushunarli variant nomi',
  //   // },
  //   // {
  //   //   id: 12,
  //   //   name: 'Bu esa ancha uzunroq bo‘lib, foydalanuvchi interfeysida joylashuvni sinab ko‘rish uchun mo‘ljallangan',
  //   // },
  //   // {
  //   //   id: 13,
  //   //   name: 'Ixcham',
  //   // },
  //   // {
  //   //   id: 14,
  //   //   name: 'Biroz batafsilroq yozilgan variant',
  //   // },
  //   // {
  //   //   id: 15,
  //   //   name: 'Juda juda uzun matn bo‘lib, select yoki option komponentlarida text overflow, wrap yoki ellipsis qanday ishlashini tekshirish uchun juda qulay',
  //   // },
  //   // {
  //   //   id: 16,
  //   //   name: 'Kalta nom',
  //   // },
  //   // {
  //   //   id: 17,
  //   //   name: 'Standart uzunlikdagi variant nomi',
  //   // },
  //   // {
  //   //   id: 18,
  //   //   name: 'Bu matn ataylab juda uzun qilib yozilgan va real loyihalarda uchrashi mumkin bo‘lgan holatlarni simulyatsiya qiladi',
  //   // },
  //   // {
  //   //   id: 19,
  //   //   name: 'Qisqa',
  //   // },
  //   // {
  //   //   id: 20,
  //   //   name: 'Eng uzun variantlardan biri bo‘lib, maksimal uzunlikdagi matnlar bilan ishlashni to‘liq tekshirish imkonini beradi',
  //   // },
  // ]

  return <Pagination totalElements={100} totalPages={9999} />
}
