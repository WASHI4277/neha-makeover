export default function Hero() {
  return (
    <section
      id="home"
      style={{
        backgroundImage: "url('/images/hero.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen relative flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl md:text-7xl font-bold">
          Neha Makeover
        </h1>

        <p className="text-2xl mt-4">
          Beauty Salon & Bridal Studio
        </p>

        <div className="mt-8">
          <a
            href="https://wa.me/918700920394"
            className="bg-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}