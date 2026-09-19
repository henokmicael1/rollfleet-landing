import { ArrowRight, Mail } from 'lucide-react'

const SIGNUP_URL = '/coming-soon'

const links = {
  Product: [
    { label: 'Features', href: '/#features' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'FAQ', href: '/#faq' },
  ],
  Company: [
    { label: 'Get Started', href: '/coming-soon' },
    { label: 'Contact', href: 'mailto:support@rollfleet.com' },
  ],
  Legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="container py-14">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <a href="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-light to-accent-dark flex items-center justify-center shadow-sm">
                <span className="font-display text-sm font-bold text-white">RF</span>
              </div>
              <span className="font-display text-base font-semibold text-text-primary">RollFleet</span>
            </a>
            <p className="text-sm text-text-muted max-w-xs">
              The modern TMS for owner-operators and small fleets. Dispatch, invoicing, and
              settlements in one place — free to start.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a href={SIGNUP_URL} className="btn btn-primary py-2.5 px-5">
                Get Started Free
                <ArrowRight size={15} />
              </a>
              <a
                href="mailto:support@rollfleet.com"
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
              >
                <Mail size={15} />
                support@rollfleet.com
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="md:col-span-2">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-primary">
                {title}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="inline-block text-sm text-text-muted hover:text-accent hover:translate-x-0.5 transition-all"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} RollFleet, LLC
          </p>
          <div className="flex items-center gap-1.5 text-sm text-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
