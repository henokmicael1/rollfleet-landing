import { useScrollReveal } from '../hooks/useScrollReveal'
import { Check, X } from 'lucide-react'

const features = [
  { name: 'Rate con AI parsing', us: true, others: false },
  { name: 'All 4 driver pay models', us: true, others: false },
  { name: 'Built-in invoicing', us: true, others: true },
  { name: 'Factoring integration', us: true, others: false },
  { name: 'Real-time dispatch board', us: true, others: true },
  { name: 'Compliance tracking', us: true, others: true },
  { name: 'Free plan available', us: true, others: false },
  { name: 'Setup in minutes', us: true, others: false },
]

export function Comparison() {
  const ref = useScrollReveal()

  return (
    <section className="py-24 lg:py-32">
      <div ref={ref} className="reveal container-lg">
        <div className="mx-auto mb-12 max-w-xl text-center lg:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
            Comparison
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            Why Carriers Choose RollFleet
          </h2>
        </div>

        <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white border border-border shadow-sm">
          <div className="grid grid-cols-3 border-b border-border bg-surface">
            <div className="p-4 text-sm font-medium text-foreground-subtle">Feature</div>
            <div className="p-4 text-center text-sm font-bold text-brand">RollFleet</div>
            <div className="p-4 text-center text-sm text-foreground-subtle">Legacy TMS</div>
          </div>
          {features.map((f) => (
            <div key={f.name} className="grid grid-cols-3 border-b border-border/50 last:border-0">
              <div className="p-4 text-sm text-foreground-muted">{f.name}</div>
              <div className="flex items-center justify-center p-4">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-muted">
                  <Check size={14} className="text-brand" strokeWidth={2.5} />
                </div>
              </div>
              <div className="flex items-center justify-center p-4">
                {f.others ? (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-muted">
                    <Check size={14} className="text-foreground-subtle" strokeWidth={2.5} />
                  </div>
                ) : (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-error/10">
                    <X size={14} className="text-error" strokeWidth={2.5} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
