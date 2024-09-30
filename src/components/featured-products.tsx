"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Naruto Action Figure",
    price: 29.99,
    image: "https://m.media-amazon.com/images/I/61GWN9NPgdL._AC_UL400_.jpg",
  },
  {
    id: 2,
    name: "My Hero Academia T-Shirt",
    price: 24.99,
    image: "https://m.media-amazon.com/images/I/61y+f0GRgIL._AC_UX679_.jpg",
  },
  {
    id: 3,
    name: "One Piece Manga Set",
    price: 59.99,
    image:
      "https://m.media-amazon.com/images/I/91rq4rUFHzL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    id: 4,
    name: "Attack on Titan Hoodie",
    price: 39.99,
    image: "https://m.media-amazon.com/images/I/61MhAX1YQWL._AC_UX679_.jpg",
  },
];

const FeaturedProducts = () => {
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
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <Button className="w-full">Add to Cart</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
