import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold mb-8 text-center">About AnimeStore</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-4">
            Welcome to AnimeStore, your one-stop shop for all things anime! We
            are passionate about bringing the best anime merchandise to fans
            around the world.
          </p>
          <p className="mb-4">
            Our store offers a wide range of products, from action figures and
            manga to clothing and accessories. We pride ourselves on our
            high-quality items and excellent customer service.
          </p>
          <p>
            Founded by anime enthusiasts, AnimeStore aims to create a community
            where fans can find their favorite merchandise and discover new
            treasures. We regularly update our inventory with the latest
            releases and classic favorites.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="AnimeStore Team"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
