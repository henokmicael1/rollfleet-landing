import { ArrowRight } from 'lucide-react'

const SIGNUP_URL = '/coming-soon'

export function CTA() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="bg-bg-dark rounded-3xl px-8 py-16 lg:px-16 text-center relative overflow-hidden">
          {/* Subtle gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative">
            <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-4">
              Ready to simplify your operations?
            </h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Join carriers who switched to RollFleet.
              Start free today.
            </p>
            <a href={SIGNUP_URL} className="btn btn-primary">
              Get Started Free
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
