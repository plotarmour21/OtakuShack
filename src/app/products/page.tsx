"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Pagination } from "@/components/pagination";
import { ShoppingCart, Search } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Naruto Action Figure",
    price: 29.99,
    category: "Figures",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "My Hero Academia T-Shirt",
    price: 24.99,
    category: "Clothing",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "One Piece Manga Set",
    price: 59.99,
    category: "Manga",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Attack on Titan Hoodie",
    price: 39.99,
    category: "Clothing",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Dragon Ball Z Poster",
    price: 14.99,
    category: "Posters",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Demon Slayer Sword Replica",
    price: 89.99,
    category: "Collectibles",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 7,
    name: "Death Note Notebook",
    price: 19.99,
    category: "Accessories",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 8,
    name: "Fullmetal Alchemist Keychain",
    price: 9.99,
    category: "Accessories",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 9,
    name: "Sailor Moon Wand",
    price: 34.99,
    category: "Collectibles",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 10,
    name: "Tokyo Ghoul Mask",
    price: 29.99,
    category: "Cosplay",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 11,
    name: "Pokémon Trading Card Set",
    price: 19.99,
    category: "Games",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 12,
    name: "Neon Genesis Evangelion Model Kit",
    price: 49.99,
    category: "Models",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 13,
    name: "Ghibli Movies Collection",
    price: 99.99,
    category: "Movies",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 14,
    name: "Jujutsu Kaisen Phone Case",
    price: 14.99,
    category: "Accessories",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 15,
    name: "Haikyuu!! Volleyball",
    price: 24.99,
    category: "Sports",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 16,
    name: "Sword Art Online Mousepad",
    price: 12.99,
    category: "Accessories",
    image: "/placeholder.svg?height=200&width=200",
  },
];

const categories = [
  "All",
  ...new Set(products.map((product) => product.category)),
];

const itemsPerPage = 8;

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-8">
       <Navbar/>
      <h1 className="text-4xl font-bold mb-8 text-center">Anime Products</h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/3">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
            icon={<Search className="h-4 w-4 text-gray-500" />}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {paginatedProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-card rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-4">
                ${product.price.toFixed(2)}
              </p>
              <Button className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}
