export default function LysConsultingWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Lys Consulting
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Recruitment • HR • Outsourcing • IT Solutions
            </p>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              We support businesses with strategic recruitment, HR operations,
              administrative support, outsourcing, and business solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold shadow-lg">
                Contact Us
              </button>

              <button className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition-all">
                Our Services
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
              alt="Modern office"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Recruitment",
                desc: "Talent acquisition, staffing and IT recruitment solutions.",
              },
              {
                title: "HR Solutions",
                desc: "HR support, onboarding and operational processes.",
              },
              {
                title: "Outsourcing",
                desc: "Flexible administrative and operational outsourcing.",
              },
              {
                title: "IT Services",
                desc: "Business technology and process optimization support.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-black border border-gray-800 rounded-3xl p-6 shadow-lg hover:border-yellow-500 transition-all"
              >
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Lys Consulting</h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Lys Consulting helps organizations optimize recruitment, HR,
            outsourcing and operational performance through a strategic,
            flexible and human-centered approach.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact</h2>

          <div className="bg-black border border-gray-800 rounded-3xl p-10 shadow-xl">
            <p className="text-xl mb-4 text-gray-300">
              Let’s discuss your business needs.
            </p>

            <p className="text-2xl font-semibold text-yellow-400 mb-2">
              contact@lysconsulting.ca
            </p>

            <p className="text-gray-500">Montreal, Canada</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-800 bg-black text-gray-500">
        © 2026 Lys Consulting — All Rights Reserved
      </footer>
    </div>
  );
}

add app page
