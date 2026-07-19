import { ArrowRight } from 'lucide-react'

const SIGNUP_URL = '/coming-soon'

export function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="badge mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span>AI-Powered Fleet Management</span>
          </div>

          <h1 className="h1 mb-5">
            Stop juggling spreadsheets.{' '}
            <span className="gradient-text">Start running your fleet.</span>
          </h1>

          <p className="text-text-muted text-lg mb-8 max-w-lg mx-auto">
            The modern TMS that handles dispatch, invoicing, and driver settlements 
            so you can focus on moving freight.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
            <a href={SIGNUP_URL} className="btn btn-primary">
              Get Started Free
              <ArrowRight size={16} />
            </a>
            <a href="#how-it-works" className="btn btn-secondary">
              See How It Works
            </a>
          </div>

          <p className="text-sm text-text-muted">
            Free for 1 truck. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
}
