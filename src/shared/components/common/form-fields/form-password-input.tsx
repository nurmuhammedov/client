import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@topcoder/components'
import { cn } from '@topcoder/lib'
import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { Control, FieldValues, Path } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

interface FormPasswordInputProps<T extends FieldValues> extends Omit<React.ComponentProps<typeof Input>, 'name'> {
  control: Control<T>
  name: Path<T>
  label?: string
  placeholder?: string
  showError?: boolean
  required?: boolean
  rootClassName?: string
}

export function FormPasswordInput<T extends FieldValues>({
  control,
  name,
  label,
  placeholder = 'Enter password',
  showError = true,
  required,
  className,
  rootClassName,
  ...props
}: FormPasswordInputProps<T>) {
  const { t } = useTranslation(['translation', 'form'])
  const [showPassword, setShowPassword] = useState(false)

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
          <FormControl>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder={t(placeholder)}
                className={cn('pr-10', error && 'border-destructive focus-visible:ring-destructive', className)}
                {...field}
                {...props}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-0 top-0 h-full px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Eye className="h-4 w-4" aria-hidden="true" />
                )}
                <span className="sr-only">{t(showPassword ? 'Show password' : 'Hide password', { ns: 'form' })}</span>
              </button>
            </div>
          </FormControl>
          {showError && <FormMessage />}
        </FormItem>
      )}
    />
  )
}
