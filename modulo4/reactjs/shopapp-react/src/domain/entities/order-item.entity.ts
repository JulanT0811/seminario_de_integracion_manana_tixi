import type { ProductSummary } from './product-summary.entity'

/**
 * Un ítem dentro de una orden ya creada.
 */
export interface OrderItem {
  id: number
  product: ProductSummary
  quantity: number
  unit_price: number
  subtotal: number
}
