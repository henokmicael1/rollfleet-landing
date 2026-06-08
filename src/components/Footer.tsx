const APP_URL = 'https://app.dev.rollfleet.com'

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
    { label: 'Contact', href: 'mailto:hello@rollfleet.com' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Security', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04]">
      <div className="container-lg py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-xs font-bold text-white">
                RF
              </div>
              <span className="font-display text-[17px] font-semibold text-white">RollFleet</span>
            </a>
            <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-slate-500">
              The modern TMS for growing trucking fleets. AI-powered dispatch,
              invoicing, settlements, and fleet management.
            </p>
            <a
              href={`${APP_URL}/login`}
              className="mt-6 inline-block rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-light"
            >
              Start Free
            </a>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-medium text-white">{title}</h4>
              <ul className="space-y-3">
                {items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/[0.04] pt-8 md:flex-row">
          <p className="text-xs text-slate-500/50">&copy; {new Date().getFullYear()} RollFleet. All rights reserved.</p>
          <p className="text-xs text-slate-500/50">
            Built by Filmon Hagos, Mewael Zere &amp; Henok Micael
          </p>
        </div>
      </div>
    </footer>
  )
}
