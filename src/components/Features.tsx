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
    <section id="features" className="py-28 lg:py-40">
      <div ref={ref} className="reveal container-lg">
        <div className="mx-auto mb-16 max-w-xl text-center lg:mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-brand-light">
            Features
          </p>
          <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
            Everything You Need to Run Your Fleet
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400">
            AI-powered tools, automated invoicing, real-time tracking, and a complete
            operations suite — purpose-built for carriers.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-dark-850 p-7 ring-1 ring-white/[0.05] transition-all hover:ring-white/[0.08] lg:p-8"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/[0.08]">
                <f.icon size={20} className="text-brand-light" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-[15px] font-semibold text-white">{f.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400/80">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
