import { NAV_LINKS, CONTACT_EMAIL } from "@/lib/constants"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Col 1 — brand */}
          <div>
            <a href="#" className="text-xl font-bold tracking-tight">
              Tiwa<span className="text-accent">AK</span>
            </a>
            <p className="mt-3 text-white/60 text-sm leading-relaxed max-w-xs">
              Where trade meets strategy. Empowering businesses through expert trading
              facilitation and business consultancy.
            </p>
          </div>

          {/* Col 2 — quick links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              Contact
            </h4>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X / Twitter"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            &copy; {year} TiwaAK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
