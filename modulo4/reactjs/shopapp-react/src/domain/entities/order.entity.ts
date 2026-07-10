import type { OrderStatus } from '../enums/order-status.enum'
import type { OrderItem } from './order-item.entity'

/** Una orden completa tal y como la devuelve el backend. */
export interface Order {
  id: number
  username: string
  status: OrderStatus
  total: number
  num_items: number
  items: OrderItem[]
  created_at: string
  updated_at: string
}
