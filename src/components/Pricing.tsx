import { Check } from 'lucide-react'

const SIGNUP_URL = '/coming-soon'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for owner-operators',
    features: ['1 Truck', '1 Driver', 'Unlimited loads', 'Basic invoicing', 'Email support'],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'For growing fleets',
    features: ['Up to 10 trucks', 'Unlimited drivers', 'AI rate con parsing', 'Driver settlements', 'Factoring integration', 'Priority support'],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For larger operations',
    features: ['Unlimited trucks', 'Custom integrations', 'API access', 'Dedicated support', 'SLA guarantee'],
    cta: 'Contact Sales',
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="section section-alt">
      <div className="container">
        <div className="text-center max-w-lg mx-auto mb-12">
          <p className="section-label">Pricing</p>
          <h2 className="h2 mb-3">Simple, transparent pricing</h2>
          <p className="text-text-muted">Start free. Upgrade as you grow.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-6 ${
                p.featured
                  ? 'bg-bg-dark text-white ring-1 ring-white/10'
                  : 'bg-white border border-border'
              }`}
            >
              {p.featured && (
                <span className="inline-block bg-accent/20 text-accent-light text-xs font-medium px-2.5 py-1 rounded-md mb-4">
                  Most Popular
                </span>
              )}

              <h3 className={`text-lg font-semibold mb-1 ${p.featured ? 'text-white' : 'text-text-primary'}`}>
                {p.name}
              </h3>
              <p className={`text-sm mb-4 ${p.featured ? 'text-slate-400' : 'text-text-muted'}`}>
                {p.description}
              </p>

              <div className="mb-5">
                <span className={`text-3xl font-semibold ${p.featured ? 'text-white' : 'text-text-primary'}`}>
                  {p.price}
                </span>
                <span className={`text-sm ${p.featured ? 'text-slate-500' : 'text-text-muted'}`}>
                  {p.period}
                </span>
              </div>

              <ul className="space-y-2.5 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check size={14} className="text-accent flex-shrink-0" />
                    <span className={`text-sm ${p.featured ? 'text-slate-300' : 'text-text-secondary'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={SIGNUP_URL}
                className={`btn w-full justify-center ${
                  p.featured ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
