import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { DashboardPreview } from './DashboardPreview'

const SIGNUP_URL = '/coming-soon'

const proofPoints = ['Free for 1 truck', 'No credit card required', 'Setup in minutes']

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="aurora" aria-hidden="true" />
      <div className="grid-backdrop" aria-hidden="true" />

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="badge mb-6">
            <Sparkles size={14} />
            <span>AI-Powered Fleet Management</span>
          </div>

          <h1 className="h1 mb-5">
            Stop juggling spreadsheets.{' '}
            <span className="gradient-text">Start running your fleet.</span>
          </h1>

          <p className="text-text-secondary text-lg mb-8 max-w-lg mx-auto">
            The modern TMS that handles dispatch, invoicing, and driver settlements
            so you can focus on moving freight.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <a href={SIGNUP_URL} className="btn btn-primary w-full sm:w-auto">
              Get Started Free
              <ArrowRight size={16} />
            </a>
            <a href="#how-it-works" className="btn btn-secondary w-full sm:w-auto">
              See How It Works
            </a>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-text-muted">
            {proofPoints.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-accent" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 lg:mt-20">
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}
