import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { Terms } from './pages/Terms'
import { Privacy } from './pages/Privacy'

function getRoute() {
  const path = window.location.pathname
  if (path === '/terms') return 'terms'
  if (path === '/privacy') return 'privacy'
  return 'home'
}

export function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const handleNav = () => setRoute(getRoute())
    window.addEventListener('popstate', handleNav)
    return () => window.removeEventListener('popstate', handleNav)
  }, [])

  if (route === 'terms') return <Terms />
  if (route === 'privacy') return <Privacy />

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
