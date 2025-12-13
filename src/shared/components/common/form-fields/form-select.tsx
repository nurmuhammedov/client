import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@topcoder/components'
import { IIDName } from '@topcoder/types'
import { Control, FieldValues, Path } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

interface FormSelectProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label?: string
  placeholder?: string
  options: IIDName[]
  disabled?: boolean
  required?: boolean
  showError?: boolean
  className?: string
  rootClassName?: string
  onValueChange?: (value: string) => void
}

export function FormSelect<T extends FieldValues>({
  control,
  name,
  label,
  placeholder = 'Choose',
  options,
  disabled,
  required,
  showError = true,
  className,
  rootClassName,
  onValueChange,
}: FormSelectProps<T>) {
  const { t } = useTranslation(['translation', 'form'])

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem className={rootClassName}>
          {label && (
            <FormLabel>
              {t(label)}
              {required && <span className="ml-1 text-destructive">*</span>}
            </FormLabel>
          )}
          <Select
            disabled={disabled}
            onValueChange={(value) => {
              field.onChange(value)
              onValueChange?.(value)
            }}
            defaultValue={field.value ? String(field.value) : undefined}
            value={field.value ? String(field.value) : undefined}
          >
            <FormControl>
              <SelectTrigger
                className={className}
                style={{
                  borderColor: error ? 'var(--destructive)' : undefined,
                }}
              >
                <SelectValue placeholder={t(placeholder, { ns: 'form' })} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.id} value={String(option.id)}>
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {showError && <FormMessage />}
        </FormItem>
      )}
    />
  )
}
