import { ArrowRight, Zap } from 'lucide-react'

const APP_URL = 'https://app.rollfleet.com'

const logos = ['CH Robinson', 'TQL', 'Echo', 'Coyote', 'XPO']

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-accent/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="badge mb-6">
            <Zap size={14} />
            <span>10× faster than spreadsheets</span>
          </div>

          <h1 className="h1 mb-6">
            The modern TMS that{' '}
            <span className="gradient-text">actually saves you time</span>
          </h1>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            AI-powered dispatch, automated settlements, instant invoicing. 
            Built for owner-operators and small fleets who move fast.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href={`${APP_URL}/login`} className="btn btn-primary px-8 py-3.5 text-base">
              Start Free Today
              <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className="btn btn-secondary px-8 py-3.5 text-base">
              Watch Demo
            </a>
          </div>

          <p className="text-sm text-text-muted">
            Free forever for 1 truck · No credit card required
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: '500+', label: 'Active carriers' },
            { value: '$120M+', label: 'Freight processed' },
            { value: '< 5 min', label: 'Average setup' },
            { value: '99.9%', label: 'Uptime SLA' },
          ].map((stat) => (
            <div key={stat.label} className="card text-center py-5">
              <div className="font-display text-2xl font-bold text-text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="mt-16 text-center">
          <p className="text-xs text-text-muted uppercase tracking-wider mb-5">
            Trusted by carriers hauling for
          </p>
          <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap">
            {logos.map((logo) => (
              <span key={logo} className="text-text-muted/70 font-medium text-sm">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
