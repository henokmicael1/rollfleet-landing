import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const SIGNUP_URL = '/coming-soon'

const links = [
  { label: 'Features', href: '/#features', id: 'features' },
  { label: 'How It Works', href: '/#how-it-works', id: 'how-it-works' },
  { label: 'FAQ', href: '/#faq', id: 'faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) setActive(visible[0]!.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-white/80 backdrop-blur-xl border-b border-border/60 shadow-sm' : ''
      }`}
    >
      <nav className="container flex h-16 items-center justify-between" aria-label="Main">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-light to-accent-dark flex items-center justify-center shadow-sm">
            <span className="font-display text-sm font-bold text-white">RF</span>
          </div>
          <span className="font-display text-base font-semibold text-text-primary">RollFleet</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.id ? 'true' : undefined}
              className={`relative px-3.5 py-2 text-sm rounded-lg transition-colors hover:bg-bg-elevated ${
                active === l.id ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {l.label}
              <span
                className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-accent transition-transform duration-300 origin-left ${
                  active === l.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
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
            <ArrowRight size={15} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-text-primary hover:bg-bg-elevated transition-colors cursor-pointer"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container py-4 space-y-1 bg-white/95 backdrop-blur-xl border-t border-border">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-text-secondary hover:bg-bg-elevated hover:text-text-primary transition-colors"
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
