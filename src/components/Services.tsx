import FadeInSection from "./FadeInSection"
import { SERVICES } from "@/lib/constants"

function ChartIcon() {
  return (
    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M7 20V10m5 10V4m5 16v-6"
      />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
}

const ICONS: Record<string, React.ReactNode> = {
  chart: <ChartIcon />,
  briefcase: <BriefcaseIcon />,
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection className="text-center mb-14">
          <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-4xl font-bold text-dark">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Two core pillars, one seamless partnership — connecting markets and unlocking business potential.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, i) => (
            <FadeInSection key={service.title} delay={i * 0.15}>
              <div className="h-full rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  {ICONS[service.icon]}
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>
                <ul className="flex flex-col gap-3 mb-8">
                  {service.offerings.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a
                    href="#contact"
                    className="text-accent font-semibold text-sm hover:underline"
                  >
                    Enquire about this service →
                  </a>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
