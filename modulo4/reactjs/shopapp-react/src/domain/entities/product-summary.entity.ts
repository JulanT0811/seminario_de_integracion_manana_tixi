/**
 * Versión resumida de un producto tal y como viaja embebido dentro de un OrderItem.
 */
export interface ProductSummary {
  id: number
  name: string
  price: number
  stock: number
  is_active: boolean
  image_url: string | null
}
