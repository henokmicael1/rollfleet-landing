import { Check } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const APP_URL = 'https://app.dev.rollfleet.com'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Get started with the basics',
    features: ['Up to 3 trucks', '2 dispatchers', '50 loads per month', 'Load management', 'Driver mobile app'],
    cta: 'Start Free',
  },
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'For growing carriers',
    features: ['Up to 15 trucks', 'Unlimited dispatchers', 'Unlimited loads', 'AI rate confirmation parsing', 'Settlements & driver pay', 'Invoicing & factoring', 'Reports & analytics'],
    cta: 'Start 14-Day Trial',
    popular: true,
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/month',
    description: 'For established fleets',
    features: ['Up to 50 trucks', 'Everything in Starter', 'Real-time GPS tracking', 'Compliance alerts & expiry', 'Recurring expense management', 'Priority support'],
    cta: 'Start 14-Day Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large operations',
    features: ['Unlimited trucks', 'Everything in Professional', 'Custom integrations', 'Dedicated account manager', 'SLA guarantee'],
    cta: 'Contact Sales',
  },
]

export function Pricing() {
  const ref = useScrollReveal()

  return (
    <section id="pricing" className="py-28 lg:py-40">
      <div ref={ref} className="reveal container-lg">
        <div className="mx-auto mb-16 max-w-xl text-center lg:mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-brand-light">
            Pricing
          </p>
          <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400">
            Start free and scale as you grow. No hidden fees, no long-term contracts.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl p-7 lg:p-8 ${
                p.popular
                  ? 'bg-dark-850 ring-1 ring-brand/20 shadow-lg shadow-brand/5'
                  : 'bg-dark-850 ring-1 ring-white/[0.05]'
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-[11px] font-semibold text-white">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <h3 className="text-[15px] font-semibold text-white">{p.name}</h3>
                <div className="mt-3 flex items-baseline">
                  <span className="font-display text-4xl font-bold text-white">{p.price}</span>
                  <span className="ml-1 text-sm text-slate-500">{p.period}</span>
                </div>
                <p className="mt-2 text-sm text-slate-500">{p.description}</p>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300/80">
                    <Check
                      size={15}
                      className={`mt-0.5 shrink-0 ${p.popular ? 'text-brand-light' : 'text-slate-500/60'}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={p.name === 'Enterprise' ? 'mailto:sales@rollfleet.com' : `${APP_URL}/login`}
                className={`block rounded-lg py-3 text-center text-sm font-medium transition-all ${
                  p.popular
                    ? 'bg-brand text-white hover:bg-brand-light'
                    : 'bg-dark-800 text-slate-300 ring-1 ring-white/[0.06] hover:bg-dark-700 hover:text-white'
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
