import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const APP_URL = 'https://app.rollfleet.com'

const links = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'bg-bg-white/90 backdrop-blur-lg shadow-sm' : ''}`}>
      <nav className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="font-display text-sm font-bold text-white">RF</span>
          </div>
          <span className="font-display text-lg font-semibold text-text-primary">RollFleet</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-text-muted hover:text-text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href={`${APP_URL}/login`} className="text-sm text-text-muted hover:text-text-primary transition-colors px-4 py-2">
            Log in
          </a>
          <a href={`${APP_URL}/login`} className="btn btn-primary">
            Get Started
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-text-primary">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg-white border-b border-border">
          <div className="container py-6 space-y-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-text-secondary hover:text-text-primary py-2">
                {l.label}
              </a>
            ))}
            <div className="pt-4 flex gap-3">
              <a href={`${APP_URL}/login`} className="btn btn-secondary flex-1">Log in</a>
              <a href={`${APP_URL}/login`} className="btn btn-primary flex-1">Get Started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
