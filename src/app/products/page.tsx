import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold mb-2">All Products</h1>
          <p className="text-muted-foreground">Discover our complete collection of natural skincare</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
