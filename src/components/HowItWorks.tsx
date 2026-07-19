import { Upload, Navigation, Banknote } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    num: '01',
    title: 'Upload Rate Con',
    description: 'Drop your broker rate confirmation PDF. AI extracts all details automatically.',
  },
  {
    icon: Navigation,
    num: '02',
    title: 'Dispatch Load',
    description: 'Assign to a driver and truck. Track pickup to delivery in real-time.',
  },
  {
    icon: Banknote,
    num: '03',
    title: 'Get Paid',
    description: 'Generate invoices, submit to factoring, calculate driver pay. All automated.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="text-center max-w-lg mx-auto mb-12">
          <p className="section-label">How It Works</p>
          <h2 className="h2">From rate con to settlement in minutes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.num} className="text-center">
              <div className="relative inline-flex mb-5">
                <div className="w-16 h-16 rounded-2xl bg-bg border border-border flex items-center justify-center">
                  <s.icon size={26} className="text-accent" strokeWidth={1.5} />
                </div>
                <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-lg bg-accent text-white text-xs font-semibold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="h3 mb-2">{s.title}</h3>
              <p className="text-text-muted text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
