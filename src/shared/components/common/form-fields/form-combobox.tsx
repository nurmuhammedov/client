import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@topcoder/components'
import { cn } from '@topcoder/lib'
import { IIDName } from '@topcoder/types'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'
import { Control, FieldValues, Path } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

interface FormComboboxProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label?: string
  placeholder?: string
  noResultText?: string
  options: IIDName[]
  disabled?: boolean
  required?: boolean
  showError?: boolean
  className?: string
  rootClassName?: string
  onValueChange?: (value: string | number) => void
}

export function FormCombobox<T extends FieldValues>({
  control,
  name,
  label,
  placeholder = 'Choose',
  noResultText = 'Noting found',
  options,
  disabled,
  required,
  showError = true,
  className,
  rootClassName,
  onValueChange,
}: FormComboboxProps<T>) {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation(['translation', 'form'])

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem className={cn('flex flex-col', rootClassName)}>
          {label && (
            <FormLabel>
              {t(label)}
              {required && <span className="ml-1 text-destructive">*</span>}
            </FormLabel>
          )}
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  disabled={disabled}
                  className={cn(
                    'w-full justify-between font-normal',
                    !field.value && 'text-muted-foreground',
                    error && 'border-destructive hover:bg-transparent',
                    className
                  )}
                >
                  {field.value
                    ? options.find((option) => String(option.id) === String(field.value))?.name
                    : t(placeholder, { ns: 'form' })}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0" align="start">
              <Command>
                <CommandInput placeholder={t('Search...', { ns: 'form' })} />
                <CommandList>
                  <CommandEmpty>{t(noResultText, { ns: 'form' })}</CommandEmpty>
                  <CommandGroup>
                    {options.map((option) => (
                      <CommandItem
                        value={option.name}
                        key={option.id}
                        onSelect={() => {
                          const val = option.id
                          field.onChange(val)
                          onValueChange?.(val)
                          setOpen(false)
                        }}
                      >
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            String(option.id) === String(field.value) ? 'opacity-100' : 'opacity-0'
                          )}
                        />
                        {option.name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {showError && <FormMessage />}
        </FormItem>
      )}
    />
  )
}
