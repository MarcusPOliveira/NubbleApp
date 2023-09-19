import { useContext } from 'react'

import { ToastContext } from './Providers/ToastProvider'
import { ToastService } from './toastTypes'

export function useToastContext(): ToastService {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('Toast must be user within a ToastProvider')
  }

  return context
}
