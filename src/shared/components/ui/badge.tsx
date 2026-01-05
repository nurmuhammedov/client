import { cn } from '@topcoder/lib'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-normal transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground shadow-sm hover:bg-primary/95',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/95',
        destructive: 'border-transparent bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/95',
        outline: 'text-foreground',
        info: 'border-transparent bg-primary/10 text-primary hover:bg-primary/95',
        success: 'border-transparent bg-[#56ba28]/15 text-[#56ba28] hover:bg-[#56ba28]/95',
        warning: 'border-transparent bg-[#fff8bb] text-[#9a6e03] hover:bg-[#fff8bb]/95',
        error: 'border-transparent bg-destructive/10 text-destructive hover:bg-destructive/95',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

// eslint-disable-next-line react-refresh/only-export-components
export { Badge, badgeVariants }
