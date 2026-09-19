import { Upload, Navigation, Banknote } from 'lucide-react'
import { Reveal } from './Reveal'

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
        <Reveal className="text-center max-w-lg mx-auto mb-12">
          <p className="section-label">How It Works</p>
          <h2 className="h2">From rate con to settlement in minutes</h2>
        </Reveal>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="hidden md:block absolute top-8 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-transparent via-border-dark to-transparent"
            aria-hidden="true"
          />

          <div className="relative grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 120} className="text-center">
                <div className="relative inline-flex mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-bg border border-border shadow-sm flex items-center justify-center transition-transform duration-300 hover:-translate-y-1">
                    <s.icon size={26} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-lg bg-accent text-white text-xs font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="h3 mb-2">{s.title}</h3>
                <p className="text-text-muted text-sm">{s.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
