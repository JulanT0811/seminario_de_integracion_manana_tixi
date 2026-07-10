import * as React from 'react'

import { cn } from '@/presentation/utils/cn'

const DropdownMenuContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  open: false,
  setOpen: () => undefined,
})

function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div className="relative">{children}</div>
    </DropdownMenuContext.Provider>
  )
}

function DropdownMenuTrigger({ asChild = false, children, ...props }: React.HTMLAttributes<HTMLElement> & { asChild?: boolean }) {
  const { open, setOpen } = React.useContext(DropdownMenuContext)

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: (event: React.MouseEvent) => {
        event.preventDefault()
        setOpen((value) => !value)
      },
      'aria-expanded': open,
      ...props,
    })
  }

  return (
    <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} {...props}>
      {children}
    </button>
  )
}

function DropdownMenuContent({ className, children, align = 'end', ...props }: React.HTMLAttributes<HTMLDivElement> & { align?: 'start' | 'end' | 'center' }) {
  const { open } = React.useContext(DropdownMenuContext)

  if (!open) {
    return null
  }

  return (
    <div
      className={cn(
        'absolute z-50 mt-2 min-w-[12rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
        align === 'end' ? 'right-0' : align === 'start' ? 'left-0' : 'left-1/2 -translate-x-1/2',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function DropdownMenuLabel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-2 py-1.5 text-sm font-semibold', className)} {...props} />
}

function DropdownMenuSeparator() {
  return <div className="my-1 h-px bg-border" />
}

function DropdownMenuItem({ asChild = false, className, children, ...props }: React.HTMLAttributes<HTMLElement> & { asChild?: boolean }) {
  const { setOpen } = React.useContext(DropdownMenuContext)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    props.onClick?.(event)
    setOpen(false)
  }

  if (asChild && React.isValidElement<{ className?: string }>(children)) {
    const childProps = children.props

    return React.cloneElement(children, {
      className: cn('block rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground', className, childProps.className),
      onClick: handleClick,
      ...props,
    } as React.HTMLAttributes<HTMLElement>)
  }

  return (
    <button type="button" className={cn('flex w-full items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground', className)} onClick={handleClick} {...props}>
      {children}
    </button>
  )
}

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
}
