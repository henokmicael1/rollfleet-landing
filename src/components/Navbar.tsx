import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const APP_URL = 'https://app.dev.rollfleet.com'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/80 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-lg">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-xs font-bold text-white">
              RF
            </div>
            <span className="font-display text-[17px] font-semibold text-white">
              RollFleet
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-slate-500 transition-colors hover:text-slate-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <a
              href={`${APP_URL}/login`}
              className="text-[13px] text-slate-500 transition-colors hover:text-white"
            >
              Log In
            </a>
            <a
              href={`${APP_URL}/login`}
              className="rounded-lg bg-brand px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-brand-light"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-slate-400 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="bg-dark-950/95 backdrop-blur-2xl md:hidden">
          <div className="container-lg space-y-1 pb-6 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm text-slate-400 hover:bg-dark-800 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4">
              <a href={`${APP_URL}/login`} className="flex-1 rounded-lg border border-dark-600 py-2.5 text-center text-sm text-slate-300">Log In</a>
              <a href={`${APP_URL}/login`} className="flex-1 rounded-lg bg-brand py-2.5 text-center text-sm font-medium text-white">Get Started</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
