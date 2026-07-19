import {
  FileText, LayoutDashboard, Truck, Receipt,
  DollarSign, ShieldCheck,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    icon: FileText,
    title: 'AI Rate Confirmation Parsing',
    description: 'Upload a rate confirmation PDF and AI auto-fills every field — broker, addresses, dates, rates, commodity.',
  },
  {
    icon: LayoutDashboard,
    title: 'Real-Time Dispatch Board',
    description: 'See every load, driver, and truck at a glance. Assign loads, track status, and manage operations from one view.',
  },
  {
    icon: Truck,
    title: 'Fleet Management',
    description: 'Track trucks, trailers, and drivers. Monitor compliance docs, maintenance, and equipment assignments.',
  },
  {
    icon: Receipt,
    title: 'Invoicing & Factoring',
    description: 'Generate professional invoices in one click. Submit to factoring companies with Notice of Assignment included.',
  },
  {
    icon: DollarSign,
    title: 'Driver Settlements',
    description: 'All 4 pay models supported — percentage owner-op, per-mile, percentage company, and salary. Auto-calculated.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Alerts',
    description: 'Automatic alerts for expiring CDLs, medical cards, insurance, and registrations. Never miss a renewal.',
  },
]

export function Features() {
  const ref = useScrollReveal()

  return (
    <section id="features" className="py-24 lg:py-32">
      <div ref={ref} className="reveal container-lg">
        <div className="mx-auto mb-14 max-w-xl text-center lg:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
            Features
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            Everything You Need to Run Your Fleet
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted">
            AI-powered tools, automated invoicing, real-time tracking, and a complete
            operations suite — purpose-built for carriers.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white p-7 border border-border shadow-sm transition-all hover:shadow-md hover:border-border/80 lg:p-8"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-muted">
                <f.icon size={22} className="text-brand" strokeWidth={1.8} />
              </div>
              <h3 className="mb-2 text-[15px] font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-muted">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
