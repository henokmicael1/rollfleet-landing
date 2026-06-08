import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const APP_URL = 'https://app.dev.rollfleet.com'

export function CTA() {
  const ref = useScrollReveal()

  return (
    <section className="relative overflow-hidden py-28 lg:py-40">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.04] blur-[120px]" />
      <div ref={ref} className="reveal container-lg relative">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
            Stop Juggling Spreadsheets.{' '}
            <span className="gradient-text">Start Running Your Fleet.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-slate-400">
            Join carriers who have switched to RollFleet for a simpler, faster,
            and more reliable way to manage their operations.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`${APP_URL}/login`}
              className="group inline-flex items-center gap-2 rounded-xl bg-brand px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-light"
            >
              Start Free Today
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:sales@rollfleet.com"
              className="rounded-xl bg-dark-800 px-8 py-4 text-[15px] font-medium text-slate-300 ring-1 ring-white/[0.06] transition-all hover:bg-dark-700 hover:text-white"
            >
              Talk to Sales
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-500/50">
            Free plan available &middot; No credit card required &middot; Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
