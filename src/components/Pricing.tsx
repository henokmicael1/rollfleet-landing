import { Check } from 'lucide-react'

const APP_URL = 'https://app.rollfleet.com'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'For owner-operators',
    features: ['1 Truck', '1 Driver', 'Unlimited loads', 'Basic invoicing', 'Email support'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'For growing fleets',
    features: ['Up to 10 trucks', 'Unlimited drivers', 'AI rate con parsing', 'Driver settlements', 'Factoring integration', 'Priority support'],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For larger operations',
    features: ['Unlimited trucks', 'Custom integrations', 'API access', 'Dedicated support', 'SLA guarantee', 'Custom onboarding'],
    cta: 'Contact Sales',
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">Pricing</p>
          <h2 className="h2 mb-3">Simple, transparent pricing</h2>
          <p className="text-text-muted">Start free. Upgrade as you grow. No hidden fees.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-7 relative ${
                p.popular
                  ? 'bg-bg-dark text-white ring-2 ring-accent shadow-xl'
                  : 'card'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-5">
                <h3 className={`font-display text-xl font-bold ${p.popular ? 'text-white' : 'text-text-primary'}`}>
                  {p.name}
                </h3>
                <p className={`text-sm mt-1 ${p.popular ? 'text-slate-300' : 'text-text-muted'}`}>
                  {p.description}
                </p>
              </div>

              <div className="mb-5">
                <span className={`font-display text-4xl font-bold ${p.popular ? 'text-white' : 'text-text-primary'}`}>
                  {p.price}
                </span>
                <span className={`text-sm ${p.popular ? 'text-slate-400' : 'text-text-muted'}`}>
                  {p.period}
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={18} className={`mt-0.5 flex-shrink-0 ${p.popular ? 'text-accent-light' : 'text-accent'}`} />
                    <span className={`text-sm ${p.popular ? 'text-slate-200' : 'text-text-secondary'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${APP_URL}/login`}
                className={`btn w-full ${p.popular ? 'bg-accent hover:bg-accent-hover text-white' : 'btn-secondary'}`}
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
