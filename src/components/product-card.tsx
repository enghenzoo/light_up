"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  category: string
  price: number
  image: string
}

export function ProductCard({ id, name, category, price, image }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="group">
      <div className="bg-card rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow">
        {/* Product Image */}
        <div className="relative aspect-square mb-4 rounded-2xl overflow-hidden bg-secondary">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <div>
            <p className="text-xs text-muted-foreground">{category}</p>
            <h3 className="font-medium text-sm leading-tight">{name}</h3>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-semibold">${price.toFixed(2)}</span>
            <Button
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={(e) => {
                e.preventDefault()
                // Add to cart logic
              }}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}
