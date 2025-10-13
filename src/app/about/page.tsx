import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Leaf, Heart, Sparkles, Award, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-balance leading-tight">
            Beauty Rooted in Nature
          </h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            We believe that the best skincare comes from nature. Our mission is to create premium, effective products
            using only the finest natural ingredients, crafted with care for your skin and our planet.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-secondary">
            <img src="/natural-skincare-laboratory-with-plants.jpg" alt="Our Story" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2018, Natura Beauty began with a simple vision: to create skincare products that are as pure
                as they are effective. Our founder, inspired by traditional botanical remedies and modern dermatological
                science, set out to bridge the gap between nature and innovation.
              </p>
              <p>
                Today, we work with sustainable farms and ethical suppliers around the world to source the highest
                quality natural ingredients. Every product is carefully formulated in our laboratory, tested for
                efficacy and safety, and crafted with love for your daily beauty ritual.
              </p>
              <p>
                We're proud to be a certified B-Corporation, committed to using business as a force for good. From our
                recyclable packaging to our carbon-neutral shipping, sustainability is at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These principles guide everything we do, from product development to customer care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 p-6 rounded-2xl bg-secondary/50">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-sm">
              <Leaf className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-xl font-semibold">100% Natural</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use only pure, natural ingredients sourced from sustainable farms. No synthetic chemicals, parabens, or
              harmful additives.
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-2xl bg-secondary/50">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-sm">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-xl font-semibold">Cruelty Free</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We never test on animals and work only with suppliers who share our commitment to ethical practices.
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-2xl bg-secondary/50">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-sm">
              <Sparkles className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-xl font-semibold">Science-Backed</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every formula is developed with dermatologists and tested for safety and efficacy. Natural doesn't mean
              unproven.
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-2xl bg-secondary/50">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-sm">
              <Globe className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-xl font-semibold">Sustainable</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              From recyclable packaging to carbon-neutral shipping, we're committed to protecting our planet for future
              generations.
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-2xl bg-secondary/50">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-sm">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-xl font-semibold">Quality First</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We never compromise on quality. Each batch is carefully crafted and tested to meet our rigorous standards.
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-2xl bg-secondary/50">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-sm">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-xl font-semibold">Community</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We're building a community of conscious consumers who care about what they put on their skin and its
              impact on the world.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-secondary rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-serif text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="font-serif text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Natural Ingredients</div>
            </div>
            <div>
              <div className="font-serif text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Premium Products</div>
            </div>
            <div>
              <div className="font-serif text-4xl md:text-5xl font-bold mb-2">5★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Join Our Journey</h2>
          <p className="text-muted-foreground leading-relaxed">
            Experience the difference that natural, science-backed skincare can make. Start your journey to healthier,
            more radiant skin today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent" asChild>
              <Link href="/search">Explore Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
