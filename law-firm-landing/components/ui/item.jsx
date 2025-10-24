import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export const Item = forwardRef(function Item({ className, variant = 'solid', size = 'md', asChild, ...props }, ref) {
  const Comp = asChild ? 'div' : 'div'
  return (
    <Comp ref={ref} className={cn('ui-item', `ui-item--${variant}`, `ui-item--${size}`, className)} {...props} />
  )
})

export const ItemMedia = forwardRef(function ItemMedia({ className, ...props }, ref) {
  return <div ref={ref} className={cn('ui-item__media', className)} {...props} />
})

export const ItemContent = forwardRef(function ItemContent({ className, ...props }, ref) {
  return <div ref={ref} className={cn('ui-item__content', className)} {...props} />
})

export const ItemTitle = forwardRef(function ItemTitle({ className, as = 'h4', ...props }, ref) {
  const Comp = as
  return <Comp ref={ref} className={cn('ui-item__title', className)} {...props} />
})

export const ItemDescription = forwardRef(function ItemDescription({ className, ...props }, ref) {
  return <p ref={ref} className={cn('ui-item__description', className)} {...props} />
})

export const ItemActions = forwardRef(function ItemActions({ className, ...props }, ref) {
  return <div ref={ref} className={cn('ui-item__actions', className)} {...props} />
})
