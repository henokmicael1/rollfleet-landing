import { ArrowRight } from 'lucide-react'
import { Reveal } from './Reveal'

const SIGNUP_URL = '/coming-soon'

export function CTA() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="bg-bg-dark rounded-3xl px-8 py-16 lg:px-16 text-center relative overflow-hidden shadow-lg">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/20 rounded-full blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 right-0 w-[380px] h-[380px] bg-indigo-500/20 rounded-full blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]"
              aria-hidden="true"
            />

            <div className="relative">
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-4">
                Ready to simplify your operations?
              </h2>
              <p className="text-slate-300 mb-8 max-w-md mx-auto">
                Join carriers who switched to RollFleet. Start free today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href={SIGNUP_URL} className="btn btn-primary w-full sm:w-auto">
                  Get Started Free
                  <ArrowRight size={16} />
                </a>
                <a
                  href="mailto:support@rollfleet.com"
                  className="btn w-full sm:w-auto border border-white/20 text-white hover:bg-white/10"
                >
                  Talk to us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
