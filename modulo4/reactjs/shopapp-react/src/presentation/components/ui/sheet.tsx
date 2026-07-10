import * as React from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/presentation/components/ui/button'
import { X } from 'lucide-react'

interface SheetProps {
  children: React.ReactNode
}

function Sheet({ children }: SheetProps) {
  const [open, setOpen] = React.useState(false)

  return <div>{React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, { open, setOpen })
    }
    return child
  })}</div>
}

function SheetTrigger({ children, setOpen }: { children: React.ReactNode; setOpen?: (value: boolean) => void }) {
  if (!React.isValidElement(children)) return null

  return React.cloneElement(children as React.ReactElement<any>, {
    onClick: (e: React.MouseEvent) => {
      e.preventDefault()
      setOpen?.(true)
    },
  })
}

function SheetContent({ children, side = 'left', className, open, setOpen }: { children: React.ReactNode; side?: 'left' | 'right'; className?: string; open?: boolean; setOpen?: (value: boolean) => void }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black/40" onClick={() => setOpen?.(false)} />
      <div className={cn('fixed inset-y-0 flex w-72 flex-col border-r bg-background p-6 shadow-xl', side === 'right' ? 'right-0' : 'left-0', className)}>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex-1" />
          <Button variant="ghost" size="icon" onClick={() => setOpen?.(false)} aria-label="Cerrar filtros">
            <X className="h-4 w-4" />
          </Button>
        </div>
        {children}
      </div>
    </div>
  )
}

function SheetHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('mb-2', className)}>{children}</div>
}

function SheetTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-semibold">{children}</h2>
}

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle }
