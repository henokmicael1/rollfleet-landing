import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal } from './Reveal'

const SIGNUP_URL = '/coming-soon'

const assurances = ['Free to start', 'No credit card', 'Cancel anytime']

export function CTA() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-bg-dark px-8 py-16 lg:px-16 lg:py-20 shadow-lg">
            <img
              src="/media/truck-highway-poster.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[55%_75%] opacity-70"
            />
            <div className="cta-scrim" aria-hidden="true" />
            <div
              className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]"
              aria-hidden="true"
            />

            <div className="relative max-w-xl">
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-4">
                Ready to run your fleet the easy way?
              </h2>
              <p className="text-white/75 mb-8">
                Set up your first load today. RollFleet is free to start — upgrade only when your
                fleet outgrows the free plan.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a href={SIGNUP_URL} className="btn btn-primary w-full sm:w-auto">
                  Get Started Free
                  <ArrowRight size={16} />
                </a>
                <a href="mailto:support@rollfleet.com" className="btn btn-on-dark w-full sm:w-auto">
                  Talk to us
                </a>
              </div>
              <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70">
                {assurances.map((a) => (
                  <li key={a} className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-accent-light" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
