"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // If you plan to use an input for search
import { ShoppingCart, Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md pb-2 h-15">
      <div className="container mx-auto px-4 py-3 mb-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            AnimeStore
          </Link>
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/products">Products</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Shopping Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background py-2"
        >
          <Button variant="ghost" className="w-full py-2" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" className="w-full py-2" asChild>
            <Link href="/products">Products</Link>
          </Button>
          <Button variant="ghost" className="w-full py-2" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="ghost" className="w-full py-2" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
