const links = {
  Product: [
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'FAQ', href: '/#faq' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: 'mailto:support@rollfleet.com' },
  ],
  Legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <a href="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-display text-sm font-bold text-white">RF</span>
              </div>
              <span className="font-display text-base font-semibold text-text-primary">RollFleet</span>
            </a>
            <p className="text-sm text-text-muted max-w-xs">
              The modern TMS for owner-operators and small fleets.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="md:col-span-2">
              <h4 className="font-medium text-text-primary mb-3 text-sm">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-text-muted hover:text-text-primary transition-colors"
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
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
