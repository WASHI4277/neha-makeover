export default function Map() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <p className="text-pink-500 uppercase tracking-[5px] font-semibold">
            Our Location
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Visit Our Salon
          </h2>

          <p className="text-gray-500 mt-4">
            Bhikhampur Road, Near Chakiya Dhala, Tara Bhawan Gali,
            Ambedkar Nagar, Deoria, Uttar Pradesh - 274001
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.7040062145593!2d83.7978201!3d26.4974736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993c53d60503079%3A0x6b4f6207425ea31d!2sNeha%20Makeover!5e0!3m2!1sen!2sin!4v1784138121941!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Neha Makeover Location"
          ></iframe>
        </div>

      </div>
    </section>
  );
}