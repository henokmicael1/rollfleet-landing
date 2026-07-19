import { Upload, MousePointer, Receipt } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    icon: Upload,
    step: '01',
    title: 'Upload Rate Con',
    description: 'Upload your broker rate confirmation PDF. Our AI extracts all details automatically.',
  },
  {
    icon: MousePointer,
    step: '02',
    title: 'Dispatch Load',
    description: 'Assign to a driver and truck with one click. Track pickup to delivery in real-time.',
  },
  {
    icon: Receipt,
    step: '03',
    title: 'Invoice & Settle',
    description: 'Generate invoices, submit to factoring, and calculate driver pay — all automated.',
  },
]

export function HowItWorks() {
  const ref = useScrollReveal()

  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div ref={ref} className="reveal container-lg">
        <div className="mx-auto mb-14 max-w-xl text-center lg:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
            How It Works
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            From Rate Con to Settlement in Minutes
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((s, i) => (
            <div key={s.step} className="text-center">
              <div className="relative mb-5 inline-block">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-muted border border-brand/10 shadow-sm">
                  <s.icon size={28} className="text-brand" strokeWidth={1.6} />
                </div>
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white shadow-md">
                  {s.step}
                </span>
                {i < steps.length - 1 && (
                  <div className="absolute left-full top-1/2 hidden h-[2px] w-[calc(100%+2rem)] -translate-y-1/2 bg-gradient-to-r from-border to-transparent md:block" />
                )}
              </div>
              <h3 className="mb-2 text-[15px] font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-muted">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
