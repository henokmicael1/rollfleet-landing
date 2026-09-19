import { Upload, Navigation, Banknote, ArrowRight } from 'lucide-react'
import { Reveal } from './Reveal'

const SIGNUP_URL = '/coming-soon'

const steps = [
  {
    icon: Upload,
    title: 'Upload Rate Con',
    description: 'Drop your broker rate confirmation PDF. AI extracts all details automatically.',
    meta: 'Takes ~10 seconds',
  },
  {
    icon: Navigation,
    title: 'Dispatch Load',
    description: 'Assign to a driver and truck. Track pickup to delivery in real-time.',
    meta: 'One click to assign',
  },
  {
    icon: Banknote,
    title: 'Get Paid',
    description: 'Generate invoices, submit to factoring, calculate driver pay. All automated.',
    meta: 'Invoice the same day',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <Reveal className="text-center max-w-xl mx-auto mb-14">
          <p className="section-label">How It Works</p>
          <h2 className="h2">From rate con to settlement in minutes</h2>
          <p className="mt-3 text-text-muted">
            Three steps replace the spreadsheet, the email thread, and the shoebox of paperwork.
          </p>
        </Reveal>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 120} className="h-full">
                <div className="step-card group h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="step-icon">
                      <s.icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="h3 mb-2">{s.title}</h3>
                  <p className="text-text-muted text-sm">{s.description}</p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-accent">
                    {s.meta}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-12 text-center">
          <a href={SIGNUP_URL} className="btn btn-primary">
            Start free — first load in minutes
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
