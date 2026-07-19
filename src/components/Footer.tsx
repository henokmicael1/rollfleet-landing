const APP_URL = 'https://app.rollfleet.com'

const links = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-16 lg:py-20">
      <div className="container-lg">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-xs font-bold text-white">
                RF
              </div>
              <span className="font-display text-[17px] font-semibold text-foreground">
                RollFleet
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-muted">
              The modern TMS for owner-operators and small fleets. Dispatch, track, settle, and invoice — all in one platform.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={`${APP_URL}/login`}
                className="rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
              >
                Get Started
              </a>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-foreground-muted transition-colors hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-foreground-subtle">
            © {new Date().getFullYear()} RollFleet. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-foreground-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
