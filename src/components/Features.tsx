import { FileText, LayoutDashboard, DollarSign, Receipt, Truck, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'AI Rate Con Parsing',
    description: 'Upload a PDF and AI extracts broker info, addresses, rates, and dates instantly.',
  },
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
        <div className="text-center max-w-lg mx-auto mb-12">
          <p className="section-label">Features</p>
          <h2 className="h2">Everything you need to run your fleet</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className="card group">
              <div className="icon-box mb-4">
                <f.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="h3 mb-2">{f.title}</h3>
              <p className="text-text-muted text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
