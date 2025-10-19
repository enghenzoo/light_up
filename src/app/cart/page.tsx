"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products } from "@/lib/products";
import { ArrowLeft, Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface CartItem {
  id: string;
  quantity: number;
}

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: "1", quantity: 2 },
    { id: "5", quantity: 1 },
    { id: "3", quantity: 1 },
  ]);
  const [promoCode, setPromoCode] = useState("");

  const cartProducts = cartItems
    .map((item) => ({
      ...products.find((p) => p.id === item.id)!,
      quantity: item.quantity,
    }))
    .filter((item) => item.id);

  const subtotal = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 4.99;
  const total = subtotal + shipping;

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" size="sm" className="mb-6 -ml-2" asChild>
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Link>
        </Button>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <h1 className="font-serif text-3xl font-bold mb-4">
              Your cart is empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Add some products to get started
            </p>
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/products">Shop Now</Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <h1 className="font-serif text-3xl font-bold">Shopping Bag</h1>

              <div className="space-y-4">
                {cartProducts.map((item) => (
                  <div
                    key={item.id}
                    className="bg-card rounded-3xl p-4 shadow-sm"
                  >
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="relative h-24 w-24 shrink-0 rounded-2xl overflow-hidden bg-secondary">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium leading-tight mb-1">
                              {item.name}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              {item.category}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 shrink-0"
                            onClick={() => removeItem(item.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="font-semibold">
                            ${item.price.toFixed(2)}
                          </span>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 bg-secondary rounded-full px-2 py-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 rounded-full"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-6 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 rounded-full"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-3xl p-6 shadow-sm space-y-6">
                <h2 className="font-serif text-2xl font-bold">Order Summary</h2>

                {/* Promo Code */}
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Promo Code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="rounded-full"
                    />
                    <Button
                      variant="outline"
                      className="rounded-full bg-transparent shrink-0"
                    >
                      Apply
                    </Button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 py-4 border-y border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Bag Total</span>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground block">
                      {cartItems.length} items
                    </span>
                    <span className="text-2xl font-bold">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button
                  size="lg"
                  className="w-full rounded-full"
                  onClick={handleCheckout}
                >
                  Proceed To Checkout
                </Button>

                {/* Security Note */}
                <p className="text-xs text-center text-muted-foreground">
                  Secure checkout powered by industry-leading encryption
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
