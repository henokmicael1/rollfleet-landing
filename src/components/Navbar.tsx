import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const SIGNUP_URL = '/coming-soon'

const links = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
      scrolled ? 'bg-white/90 backdrop-blur-md border-b border-border/50' : ''
    }`}>
      <nav className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="font-display text-sm font-bold text-white">RF</span>
          </div>
          <span className="font-display text-base font-semibold text-text-primary">RollFleet</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={SIGNUP_URL}
            className="text-sm text-text-muted hover:text-text-primary transition-colors px-3 py-2"
          >
            Log in
          </a>
          <a href={SIGNUP_URL} className="btn btn-primary py-2.5 px-5">
            Get Started
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 flex items-center justify-center text-text-primary"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-200 ${
        open ? 'max-h-80' : 'max-h-0'
      }`}>
        <div className="container py-4 space-y-1 bg-white border-t border-border">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-text-secondary hover:text-text-primary"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4 mt-3 border-t border-border flex gap-2">
            <a href={SIGNUP_URL} className="btn btn-secondary flex-1 justify-center py-2.5">Log in</a>
            <a href={SIGNUP_URL} className="btn btn-primary flex-1 justify-center py-2.5">Get Started</a>
          </div>
        </div>
      </div>
    </header>
  )
}
