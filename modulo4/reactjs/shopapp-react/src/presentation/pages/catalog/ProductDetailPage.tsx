import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Minus, Plus, ShoppingBag, ShoppingCart } from 'lucide-react'
import { productUseCase } from '@/infrastructure/factories/product.factory'
import { useCartStore } from '@/presentation/store/cart.store'
import type { Product } from '@/domain/entities/product.entity'
import { formatPrice } from '@/presentation/utils/formatters'
import { Badge } from '@/presentation/components/ui/badge'
import { Button } from '@/presentation/components/ui/button'
import { Skeleton } from '@/presentation/components/ui/skeleton'

function QuantitySelector({ value, min = 1, max, onChange }: { value: number; min?: number; max: number; onChange: (value: number) => void }) {
  return (
    <div className="flex items-center rounded-md border">
      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none rounded-l-md" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min} aria-label="Reducir cantidad">
        <Minus className="h-4 w-4" />
      </Button>
      <span className="flex h-10 w-12 items-center justify-center text-sm font-medium tabular-nums">{value}</span>
      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none rounded-r-md" onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max} aria-label="Aumentar cantidad">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const addItem = useCartStore((s) => s.addItem)

  const [product, setProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (!id) return

    setIsLoading(true)
    setError(null)

    productUseCase
      .getProduct(Number(id))
      .then((data) => {
        setProduct(data)
        setQuantity(1)
      })
      .catch(() => setError('No se pudo cargar el producto.'))
      .finally(() => setIsLoading(false))
  }, [id])

  function handleAddToCart() {
    if (!product) return
    addItem(product, quantity)
    globalThis.alert(`Agregado al carrito: ${quantity} × ${product.name}`)
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-6">
      <Button variant="ghost" size="sm" className="mb-6" onClick={() => navigate(-1)}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Volver
      </Button>

      {isLoading && <ProductDetailSkeleton />}

      {error && (
        <div className="flex min-h-64 items-center justify-center">
          <p className="text-destructive">{error}</p>
        </div>
      )}

      {!isLoading && !error && product && (
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            {product.image ? (
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-72 items-center justify-center rounded-lg bg-muted">
                <ShoppingBag className="h-20 w-20 text-muted-foreground" />
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category.name}
              </Badge>
              <h1 className="text-2xl font-bold">{product.name}</h1>
            </div>

            <p className="text-3xl font-bold text-primary">{formatPrice(product.price)}</p>

            {product.stock > 0 ? (
              <Badge variant="outline" className="w-fit border-green-500 text-green-600">
                {product.stock} unidades disponibles
              </Badge>
            ) : (
              <Badge variant="destructive" className="w-fit">
                Agotado
              </Badge>
            )}

            <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <QuantitySelector value={quantity} min={1} max={product.stock} onChange={setQuantity} />
              <Button className="flex-1 gap-2" size="lg" disabled={product.stock === 0} onClick={handleAddToCart}>
                <ShoppingCart className="h-5 w-5" />
                {product.stock > 0 ? 'Agregar al carrito' : 'Agotado'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ProductDetailSkeleton() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Skeleton className="h-72 w-full rounded-lg" />
      <div className="flex flex-col gap-4">
        <Skeleton className="h-5 w-24 rounded-full" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-9 w-32" />
        <Skeleton className="h-5 w-28 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <Skeleton className="mt-auto h-11 w-full" />
      </div>
    </div>
  )
}
