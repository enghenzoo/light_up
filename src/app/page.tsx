import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";

import { ArrowRight, Leaf, Sparkles, Heart } from "lucide-react";
import Link from "next/link";

import { getLatestProducts } from "@/models/products";

export default async function HomePage() {
  const latestproducts = await getLatestProducts();

  return (
    <div className="min-h-screen">
      <section className="relative w-full min-h-[500px] md:min-h-[600px] bg-cover bg-center bg-no-repeat bg-[url('/Hero.png')] flex items-end justify-end p-8 md:p-16">
        {/* الـ Div ده هو اللي شايل الزراير ومتحكم في مكانهم */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 mr-0 md:mr-10">
          <Button size="lg" className="rounded-full px-8 py-6 text-lg" asChild>
            <Link href="/products" className="flex items-center">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full bg-white/20 backdrop-blur-sm border-white px-8 py-6 text-lg hover:bg-white hover:text-black transition-all"
            asChild
          >
            <Link href="/search">Explore Products</Link>
          </Button>
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
            <p className="text-sm text-muted-foreground">
              Made with pure, natural ingredients
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="font-semibold">Dermatologist Tested</h3>
            <p className="text-sm text-muted-foreground">
              Safe for all skin types
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="font-semibold">Cruelty Free</h3>
            <p className="text-sm text-muted-foreground">
              Never tested on animals
            </p>
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
          {latestproducts.map((product: any) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-secondary rounded-3xl p-8 md:p-12 text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Start Your Skincare Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who have transformed their skin
            with our natural products
          </p>
          <Button size="lg" className="rounded-full" asChild>
            <Link href="/products">Browse Collection</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
