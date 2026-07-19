import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const APP_URL = 'https://app.rollfleet.com'

export function CTA() {
  const ref = useScrollReveal()

  return (
    <section className="py-24 lg:py-32">
      <div ref={ref} className="reveal container-lg">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-dark via-dark-muted to-dark px-6 py-16 text-center lg:px-12 lg:py-24">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 -translate-y-1/3 translate-x-1/3 rounded-full bg-brand/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 translate-y-1/3 -translate-x-1/3 rounded-full bg-info/10 blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
              Ready to Modernize Your Fleet Operations?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-300">
              Join 500+ carriers who switched to RollFleet. Start free today — no credit card required.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`${APP_URL}/login`}
                className="group inline-flex items-center gap-2 rounded-xl bg-brand px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-light hover:shadow-xl"
              >
                Get Started Free
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-[15px] font-medium text-white transition-all hover:bg-white/5"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
