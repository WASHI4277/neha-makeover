export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-rose-400 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Neha Makeover</h1>
        <p className="text-xl mt-4">
          Beauty Salon & Bridal Studio
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://wa.me/918700920394"
            className="bg-white text-pink-600 px-6 py-3 rounded-full font-bold hover:bg-pink-100"
          >
            WhatsApp
          </a>

          <a
            href="#services"
            className="bg-pink-700 px-6 py-3 rounded-full font-bold"
          >
            Our Services
          </a>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-pink-600 mb-6">
          Welcome to Neha Makeover
        </h2>

        <p className="text-lg text-gray-700">
          We provide professional beauty services including Bridal Makeup,
          Hair Smoothing, Hair Spa, Facial, D-Tan, Manicure & Pedicure with
          premium quality products.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl text-center font-bold text-pink-600 mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Bridal Makeup",
              "Hair Smoothing",
              "Hair Spa",
              "Facial",
              "D-Tan",
              "Manicure & Pedicure"
            ].map((service) => (
              <div
                key={service}
                className="bg-pink-100 rounded-2xl p-8 shadow-lg text-center"
              >
                <h3 className="text-2xl font-bold text-pink-700">
                  {service}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-pink-600">
            Contact Us
          </h2>

          <p className="mt-6 text-lg">
            📍 Near Chakiya Dhala, Tara Bhawan Gali,
            Ambedkar Nagar, Deoria, Uttar Pradesh
          </p>

          <p className="mt-4 text-xl font-bold">
            📞 +91 8700920394
          </p>

          <a
            href="https://wa.me/918700920394"
            className="inline-block mt-8 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold"
          >
            Book on WhatsApp
          </a>

        </div>
      </section>

    </main>
  );
}