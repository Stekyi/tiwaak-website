import FadeInSection from "./FadeInSection"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16"
    >
      {/* Background decoration */}
      <div
        aria-hidden
        className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, #1e3a5f 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #2ecc71 0%, transparent 70%)",
          transform: "translate(-50%, 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeInSection>
          <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-4">
            Trading &amp; Business Consultancy
          </p>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-dark leading-tight max-w-3xl">
            Where{" "}
            <span className="text-primary">Trade</span>{" "}
            Meets{" "}
            <span className="text-accent">Strategy</span>
          </h1>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
            TiwaAK bridges global markets and strategic thinking — empowering businesses
            to trade smarter, grow faster, and compete with confidence.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              Explore Our Services
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all"
            >
              Get in Touch
            </a>
          </div>
        </FadeInSection>

        {/* Stats row */}
        <FadeInSection delay={0.4}>
          <div className="mt-16 flex flex-wrap gap-10">
            {[
              { value: "10+", label: "Markets Served" },
              { value: "100+", label: "Clients Advised" },
              { value: "5+", label: "Years of Excellence" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
