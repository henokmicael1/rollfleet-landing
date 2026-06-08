import { useScrollReveal } from '../hooks/useScrollReveal'

const metrics = [
  { value: '500+', label: 'Active Carriers' },
  { value: '$120M+', label: 'Freight Processed' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '4.9/5', label: 'Customer Rating' },
]

export function TrustBar() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="reveal border-y border-white/[0.04] bg-dark-900/30 py-16 lg:py-20">
      <div className="container-lg">
        <p className="mb-10 text-center text-xs font-medium uppercase tracking-[0.15em] text-slate-500/40">
          Trusted by carriers across the country
        </p>
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="font-display text-3xl font-semibold text-white lg:text-4xl">{m.value}</div>
              <div className="mt-1.5 text-xs text-slate-500">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
