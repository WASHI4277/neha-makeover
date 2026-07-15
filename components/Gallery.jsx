import Image from "next/image";

const images = [
  "/images/hero.jpeg",
  "/images/hero.jpeg",
  "/images/hero.jpeg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">
          Our Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={img}
                width={500}
                height={500}
                alt="Gallery"
                className="w-full h-80 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}