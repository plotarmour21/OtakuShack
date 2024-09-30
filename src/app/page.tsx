import Hero from "@/components/hero";
import FeaturedProducts from "@/components/featured-products";
// import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <FeaturedProducts />
      {/* <Newsletter /> */}
    </main>
  );
}
