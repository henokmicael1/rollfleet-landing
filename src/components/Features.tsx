import { FileText, LayoutDashboard, DollarSign, Receipt, Truck, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'AI Rate Con Parsing',
    description: 'Upload a PDF — AI extracts broker info, addresses, rates, and dates in seconds.',
  },
  {
    icon: LayoutDashboard,
    title: 'Real-Time Dispatch',
    description: 'See every load, driver, and truck at a glance. Assign and track with one click.',
  },
  {
    icon: DollarSign,
    title: 'Driver Settlements',
    description: 'Percentage, per-mile, or salary — all pay models supported and auto-calculated.',
  },
  {
    icon: Receipt,
    title: 'Invoicing & Factoring',
    description: 'Generate invoices instantly. Submit to factoring with NOA included.',
  },
  {
    icon: Truck,
    title: 'Fleet Management',
    description: 'Track vehicles, maintenance schedules, and equipment assignments.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Tracking',
    description: 'Auto alerts for CDLs, medical cards, insurance, and registrations.',
  },
]

export function Features() {
  return (
    <section id="features" className="section section-alt">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">Features</p>
          <h2 className="h2">Everything you need to run your fleet</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="card group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                <f.icon size={20} className="text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="h3 mb-2">{f.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
