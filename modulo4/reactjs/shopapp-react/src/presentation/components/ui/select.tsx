import * as React from 'react'

import { cn } from '@/lib/utils'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
}

function Select({ className, children, ...props }: SelectProps) {
  return (
    <select data-slot="select" className={cn('flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs outline-none', className)} {...props}>
      {children}
    </select>
  )
}

function SelectTrigger({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('w-full', className)}>{children}</div>
}

function SelectValue({ placeholder }: { placeholder?: string }) {
  return <span className="text-sm text-muted-foreground">{placeholder}</span>
}

function SelectContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

function SelectItem({ children, ...props }: React.OptionHTMLAttributes<HTMLOptionElement>) {
  return <option {...props}>{children}</option>
}

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
