import { Check } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const APP_URL = 'https://app.rollfleet.com'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for owner-operators',
    features: ['1 Truck', '1 Driver', 'Unlimited loads', 'Basic invoicing', 'Email support'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'For growing small fleets',
    features: ['Up to 10 trucks', 'Unlimited drivers', 'AI rate con parsing', 'Driver settlements', 'Priority support', 'Factoring integration'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For larger operations',
    features: ['Unlimited trucks', 'Dedicated support', 'Custom integrations', 'API access', 'SLA guarantee', 'Onboarding assistance'],
    cta: 'Contact Sales',
    highlight: false,
  },
]

export function Pricing() {
  const ref = useScrollReveal()

  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div ref={ref} className="reveal container-lg">
        <div className="mx-auto mb-14 max-w-xl text-center lg:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
            Pricing
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted">
            Start free, upgrade when you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl p-7 lg:p-8 ${
                p.highlight
                  ? 'bg-dark text-white ring-2 ring-brand shadow-xl'
                  : 'bg-white border border-border shadow-sm'
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-[11px] font-semibold text-white shadow-lg">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <h3 className={`text-lg font-bold ${p.highlight ? 'text-white' : 'text-foreground'}`}>{p.name}</h3>
                <p className={`mt-1 text-sm ${p.highlight ? 'text-slate-300' : 'text-foreground-muted'}`}>{p.description}</p>
              </div>
              <div className="mb-6">
                <span className={`font-display text-4xl font-bold ${p.highlight ? 'text-white' : 'text-foreground'}`}>{p.price}</span>
                <span className={`text-sm ${p.highlight ? 'text-slate-400' : 'text-foreground-subtle'}`}>{p.period}</span>
              </div>
              <ul className="mb-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${p.highlight ? 'bg-brand/20' : 'bg-brand-muted'}`}>
                      <Check size={12} className="text-brand" strokeWidth={2.5} />
                    </div>
                    <span className={`text-sm ${p.highlight ? 'text-slate-200' : 'text-foreground-muted'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`${APP_URL}/login`}
                className={`block rounded-xl py-3 text-center text-sm font-semibold transition-all ${
                  p.highlight
                    ? 'bg-brand text-white hover:bg-brand-light shadow-lg shadow-brand/30'
                    : 'border border-border bg-surface text-foreground hover:bg-surface-muted'
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
