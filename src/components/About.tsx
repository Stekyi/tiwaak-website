import FadeInSection from "./FadeInSection"
import { CORE_VALUES } from "@/lib/constants"

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <FadeInSection>
            <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
              About Us
            </p>
            <h2 className="text-4xl font-bold text-dark mb-6 leading-tight">
              Built on Expertise,{" "}
              <span className="text-primary">Driven by Results</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              TiwaAK is a multidisciplinary firm operating across three core domains: global
              trading, technology & AI consultancy, and strategic project consultancy. We exist
              to help organisations move faster, smarter and with greater confidence — whether
              they are entering new markets, deploying intelligent systems, or delivering
              complex projects.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              On the trading side, we connect buyers and sellers across international commodity
              and goods markets with precision and reliability. On the technology front, we
              design and implement AI-native solutions, software systems, statistical models and
              data-driven market re-prediction tools that give our clients a genuine edge.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our strategic consultancy practice covers everything from business planning and
              operational efficiency to end-to-end project management and acceptance testing —
              ensuring every initiative is delivered on time, within scope, and to the highest standard.
            </p>
          </FadeInSection>

          {/* Right column — core values */}
          <FadeInSection delay={0.15}>
            <div className="flex flex-col gap-6">
              {CORE_VALUES.map((value) => (
                <div
                  key={value.number}
                  className="flex gap-5 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl font-bold text-accent/30 leading-none select-none">
                    {value.number}
                  </span>
                  <div>
                    <h3 className="font-bold text-dark text-lg mb-1">{value.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
