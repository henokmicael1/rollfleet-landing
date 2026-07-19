import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Platform } from './components/Platform'
import { Comparison } from './components/Comparison'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustBar />
      <div className="section-alt">
        <Features />
      </div>
      <HowItWorks />
      <div className="section-alt">
        <Platform />
      </div>
      <Comparison />
      <div className="section-alt">
        <Pricing />
      </div>
      <Testimonials />
      <div className="section-alt">
        <FAQ />
      </div>
      <CTA />
      <Footer />
    </div>
  )
}
