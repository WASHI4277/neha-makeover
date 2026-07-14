const services = [
  "👰 Bridal Makeup",
  "💇 Hair Smoothing",
  "💆 Hair Spa",
  "✨ Facial",
  "🌿 D-Tan",
  "💅 Manicure & Pedicure",
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service}
              className="bg-pink-100 rounded-2xl p-8 text-center shadow hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold">{service}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}