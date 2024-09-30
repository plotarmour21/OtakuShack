"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Naruto Action Figure",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "My Hero Academia T-Shirt",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "One Piece Manga Set",
    price: 59.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Attack on Titan Hoodie",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
  },
];

const FeaturedProducts = () => {
  const [cartItems, setCartItems] = useState<{ [key: number]: number }>({});

  const addToCart = (productId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <Link href={`/products/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex items-center justify-between">
                  {cartItems[product.id] ? (
                    <div className="flex items-center">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="mx-2">{cartItems[product.id]}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => addToCart(product.id)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={() => addToCart(product.id)}>
                      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
