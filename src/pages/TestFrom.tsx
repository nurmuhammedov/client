import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Form, FormDatePicker, FormInput, FormSelect, FormTextarea } from '@topcoder/components'
import { ArrowLeft } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

const formSchema = z.object({
  fullName: z.string().min(1, 'required_field'),
  category: z.string().min(1, 'required_field'),
  date: z.string().min(1, 'required_field'),
  description: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export function TestForm() {
  const navigate = useNavigate()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      category: '',
      date: '',
      description: '',
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log('Form data:', data)
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold">Form</h1>
      </div>

      <div className="rounded-md border bg-white p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormInput
                control={form.control}
                name="fullName"
                label="Ism va Familiya"
                placeholder="Kiriting..."
                required
              />

              <FormSelect
                control={form.control}
                name="category"
                label="Kategoriya"
                placeholder="Tanlang"
                options={[
                  { id: '1', name: 'Texnik xodim' },
                  { id: '2', name: 'Dasturchi' },
                  { id: '3', name: 'Menejer' },
                ]}
                required
              />

              <FormDatePicker control={form.control} name="date" label="Sana" placeholder="Sanani tanlang" required />
            </div>

            <FormTextarea
              control={form.control}
              name="description"
              label="Izoh"
              placeholder="Qo'shimcha ma'lumot..."
              rows={4}
            />

            <div className="flex justify-end gap-2 pt-4">
              <Button type="button" variant="outline" onClick={() => navigate(-1)}>
                Bekor qilish
              </Button>
              <Button type="submit">Saqlash</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
