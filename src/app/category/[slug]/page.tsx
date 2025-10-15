import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const categories = {
  cleansers: {
    name: "Cleansers",
    description: "Gentle cleansers that remove impurities while maintaining your skin's natural balance",
    image: "/natural-facial-cleanser-bottle-with-eucalyptus.jpg",
  },
  moisturizers: {
    name: "Moisturizers",
    description: "Hydrating formulas that nourish and protect your skin throughout the day",
    image: "/natural-moisturizer-bottle-minimal.jpg",
  },
  serums: {
    name: "Serums",
    description: "Concentrated treatments targeting specific skin concerns with powerful active ingredients",
    image: "/night-serum-dropper-bottle.jpg",
  },
  treatments: {
    name: "Treatments",
    description: "Specialized products for targeted skincare solutions and intensive care",
    image: "/eye-cream-jar-minimal.jpg",
  },
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories[params.slug as keyof typeof categories]

  if (!category) {
    notFound()
  }

  const categoryProducts = products.filter((product) => product.category.toLowerCase() === params.slug)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Category Hero */}
      <section className="container mx-auto px-4 py-12">
        <Button variant="ghost" className="mb-6 -ml-4" asChild>
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl font-bold">{category.name}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{category.description}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{categoryProducts.length} Products</span>
              <span>•</span>
              <span>Natural Ingredients</span>
              <span>•</span>
              <span>Dermatologist Tested</span>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary">
            <img
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl font-bold">All {category.name}</h2>
          <p className="text-sm text-muted-foreground">{categoryProducts.length} products</p>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </section>

      {/* Browse Other Categories */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="font-serif text-2xl font-bold mb-8">Browse Other Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(categories)
            .filter(([slug]) => slug !== params.slug)
            .map(([slug, cat]) => (
              <Link
                key={slug}
                href={`/category/${slug}`}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-secondary hover:shadow-lg transition-shadow"
              >
                <img src={cat.image || "/placeholder.svg"} alt={cat.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="font-semibold text-white">{cat.name}</h3>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  )
}
