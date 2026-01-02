"use client";

import Link from "next/link";
import { ShoppingBag, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { Sidebar } from "@/components/sidebar";

export function Header() {
  const cart = useCartStore((state) => state);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-xl font-serif font-semibold tracking-tight">
            Light Up
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/products"
            className="text-sm font-medium hover:text-muted-foreground"
          >
            Products
          </Link>
          <Link
            href="/categories"
            className="text-sm font-medium hover:text-muted-foreground"
          >
            Categories
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-muted-foreground"
          >
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild className="flex">
            <Link href="/search">
              <Search className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="/login">
              <User className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild className="relative">
            <Link href="/cart">
              <ShoppingBag className="h-5 w-5" />
              {cart.getQuantity() > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                  {cart.getQuantity()}
                </span>
              )}
            </Link>
          </Button>
          <Sidebar />
        </div>
      </div>
    </header>
  );
}
