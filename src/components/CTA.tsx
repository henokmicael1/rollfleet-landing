import { ArrowRight } from 'lucide-react'

const APP_URL = 'https://app.rollfleet.com'

export function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="relative bg-bg-dark rounded-3xl px-8 py-14 lg:px-16 lg:py-16 text-center overflow-hidden">
          {/* Gradient decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to simplify your operations?
            </h2>
            <p className="text-slate-300 max-w-md mx-auto mb-8 text-sm">
              Join hundreds of carriers who switched to RollFleet. Start free — no credit card required.
            </p>
            <a href={`${APP_URL}/login`} className="btn btn-primary px-8 py-3.5">
              Get Started Free
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
