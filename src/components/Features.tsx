import { FileText, LayoutDashboard, DollarSign, Receipt, Truck, ShieldCheck, Check } from 'lucide-react'
import { Reveal } from './Reveal'

const primary = {
  icon: FileText,
  title: 'AI Rate Con Parsing',
  description:
    'Drop in a broker rate confirmation and RollFleet reads it for you — broker details, stops, dates, rate, and reference numbers land in the load in seconds.',
  bullets: ['Any broker PDF format', 'Review before it saves', 'No manual re-typing'],
}

const features = [
  {
    icon: LayoutDashboard,
    title: 'Real-Time Dispatch',
    description: 'See every load, driver, and truck at a glance. Assign and track with one click.',
  },
  {
    icon: DollarSign,
    title: 'Driver Settlements',
    description: 'Percentage, per-mile, or salary. All pay models with automatic calculations.',
  },
  {
    icon: Receipt,
    title: 'Invoicing & Factoring',
    description: 'Generate professional invoices. Submit to factoring with NOA included.',
  },
  {
    icon: Truck,
    title: 'Fleet Management',
    description: 'Track vehicles, maintenance schedules, and equipment assignments.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Tracking',
    description: 'Automatic alerts for expiring CDLs, medical cards, and insurance.',
  },
]

export function Features() {
  return (
    <section id="features" className="section section-alt">
      <div className="container">
        <Reveal className="text-center max-w-xl mx-auto mb-12">
          <p className="section-label">Features</p>
          <h2 className="h2">Everything you need to run your fleet</h2>
          <p className="mt-3 text-text-muted">
            One platform from rate con to settlement — no more stitching tools together.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-4">
          <Reveal className="lg:col-span-2 lg:row-span-2 h-full">
            <div className="card card-feature group h-full flex flex-col justify-between overflow-hidden">
              <div className="relative">
                <div className="icon-box icon-box-lg mb-5">
                  <primary.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-semibold text-text-primary mb-2">
                  {primary.title}
                </h3>
                <p className="text-text-muted text-sm max-w-md">{primary.description}</p>
              </div>
              <ul className="relative mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {primary.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent/12 text-accent">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i + 1) * 60} className="h-full">
              <div className="card group h-full">
                <div className="icon-box mb-4">
                  <f.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="h3 mb-2">{f.title}</h3>
                <p className="text-text-muted text-sm">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
