import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function CategoryPage() {
  const categories = [
    {
      slug: "cleansers",
      name: "Cleansers",
      description:
        "Gentle cleansers that remove impurities while maintaining your skin's natural balance",
      image: "/natural-facial-cleanser-bottle-with-eucalyptus.jpg",
      productCount: 4,
    },
    {
      slug: "moisturizers",
      name: "Moisturizers",
      description:
        "Hydrating formulas that nourish and protect your skin throughout the day",
      image: "/natural-moisturizer-bottle-minimal.jpg",
      productCount: 3,
    },
    {
      slug: "serums",
      name: "Serums",
      description:
        "Concentrated treatments targeting specific skin concerns with powerful active ingredients",
      image: "/night-serum-dropper-bottle.jpg",
      productCount: 2,
    },
    {
      slug: "treatments",
      name: "Treatments",
      description:
        "Specialized products for targeted skincare solutions and intensive care",
      image: "/eye-cream-jar-minimal.jpg",
      productCount: 3,
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-balance leading-tight">
            Shop by Category
          </h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Explore our carefully curated collections of natural skincare
            products, organized by your specific needs and preferences
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group relative overflow-hidden rounded-3xl bg-secondary hover:shadow-xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-6 p-8">
                <div className="flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h2 className="font-serif text-3xl font-bold group-hover:text-primary transition-colors">
                      {category.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {category.productCount} Products
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-background">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-secondary rounded-3xl p-8 md:p-12 text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Not Sure Where to Start?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Browse our complete collection or use our search to find the perfect
            products for your skincare routine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full bg-transparent"
              asChild
            >
              <Link href="/search">Search Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
