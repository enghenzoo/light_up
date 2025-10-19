"use client";

import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import {
  ArrowLeft,
  Minus,
  Plus,
  Star,
  Leaf,
  Droplets,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const product = products.find((p) => p.id === params.id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button asChild>
            <Link href="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Add to cart logic here
    router.push("/cart");
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" size="sm" className="mb-6 -ml-2" asChild>
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Feature Icons */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col items-center gap-2 p-4 bg-card rounded-2xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                  <Leaf className="h-6 w-6" />
                </div>
                <span className="text-xs text-center">Natural</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-card rounded-2xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                  <Droplets className="h-6 w-6" />
                </div>
                <span className="text-xs text-center">Hydrating</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-card rounded-2xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                  <Sparkles className="h-6 w-6" />
                </div>
                <span className="text-xs text-center">Gentle</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                {product.category}
              </p>
              <h1 className="font-serif text-4xl font-bold mb-2">
                {product.name}
              </h1>
              <p className="text-sm text-muted-foreground">
                Size: {product.size}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-foreground text-foreground"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({product.reviews} Reviews)
              </span>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold">
              ${product.price.toFixed(2)}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Benefits */}
            <div>
              <h3 className="font-semibold mb-3">Key Benefits</h3>
              <div className="flex flex-wrap gap-2">
                {product.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="px-4 py-2 bg-secondary rounded-full text-sm"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="font-semibold mb-3">Key Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient) => (
                  <span
                    key={ingredient}
                    className="px-4 py-2 border border-border rounded-full text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="font-medium">Quantity</span>
              <div className="flex items-center gap-3 bg-secondary rounded-full px-2 py-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              size="lg"
              className="w-full rounded-full"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="font-serif text-2xl font-bold mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(
                (p) => p.id !== product.id && p.category === product.category
              )
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="bg-card rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative aspect-square mb-4 rounded-2xl overflow-hidden bg-secondary">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {relatedProduct.category}
                        </p>
                        <h3 className="font-medium text-sm leading-tight">
                          {relatedProduct.name}
                        </h3>
                      </div>
                      <span className="font-semibold">
                        ${relatedProduct.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
