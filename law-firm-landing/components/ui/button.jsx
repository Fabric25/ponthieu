import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const variants = {
  primary: 'ui-button--primary',
  secondary: 'ui-button--secondary',
  ghost: 'ui-button--ghost',
}

const sizes = {
  sm: 'ui-button--sm',
  md: 'ui-button--md',
  lg: 'ui-button--lg',
}

export const Button = forwardRef(function Button(
  { className, variant = 'primary', size = 'md', as: Component = 'button', type = 'button', ...props },
  ref,
) {
  const isButton = Component === 'button'
  return (
    <Component
      ref={ref}
      className={cn('ui-button', variants[variant], sizes[size], className)}
      type={isButton ? type : undefined}
      {...props}
    />
  )
})
