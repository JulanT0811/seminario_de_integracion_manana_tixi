import AppRouter from './presentation/router/AppRouter'
import { Toaster } from 'sonner'
import { TooltipProvider } from '@/presentation/components/ui/tooltip'

export default function App() {
  return (
    <TooltipProvider>
      <AppRouter />
      <Toaster richColors position="top-right" />
    </TooltipProvider>
  )
}