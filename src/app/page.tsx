import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { ArrowRight, Leaf, Sparkles, Heart } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-balance leading-tight">
            Natural Beauty, Naturally Yours
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Discover our collection of premium skincare products crafted with natural ingredients for your daily beauty
            ritual
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/products">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent" asChild>
              <Link href="/search">Explore Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-3">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="font-semibold">100% Natural</h3>
            <p className="text-sm text-muted-foreground">Made with pure, natural ingredients</p>
          </div>
          <div className="text-center space-y-3">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="font-semibold">Dermatologist Tested</h3>
            <p className="text-sm text-muted-foreground">Safe for all skin types</p>
          </div>
          <div className="text-center space-y-3">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="font-semibold">Cruelty Free</h3>
            <p className="text-sm text-muted-foreground">Never tested on animals</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl font-bold">Featured Products</h2>
          <Button variant="ghost" asChild>
            <Link href="/products">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-secondary rounded-3xl p-8 md:p-12 text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Start Your Skincare Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who have transformed their skin with our natural products
          </p>
          <Button size="lg" className="rounded-full" asChild>
            <Link href="/products">Browse Collection</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
