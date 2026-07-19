import { useScrollReveal } from '../hooks/useScrollReveal'
import { Cloud, MapPin, Zap, Shield } from 'lucide-react'

const platformFeatures = [
  {
    icon: Cloud,
    title: 'Cloud-Native Architecture',
    description: 'Built on Azure with auto-scaling containers. No servers to manage, no uptime worries.',
  },
  {
    icon: MapPin,
    title: 'Google Maps Integration',
    description: 'Accurate mileage calculations, address autocomplete, and visual route tracking.',
  },
  {
    icon: Zap,
    title: 'AI-Powered Automation',
    description: 'GPT Vision extracts data from rate confirmations. Spend less time on data entry.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Clerk authentication, PostgreSQL RLS, and full audit trails keep your data safe.',
  },
]

export function Platform() {
  const ref = useScrollReveal()

  return (
    <section className="py-24 lg:py-32">
      <div ref={ref} className="reveal container-lg">
        <div className="mx-auto mb-14 max-w-xl text-center lg:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
            Platform
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            Modern Tech Built for Trucking
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted">
            Enterprise-grade infrastructure that's simple to use. Focus on running loads, not fighting software.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {platformFeatures.map((f) => (
            <div
              key={f.title}
              className="flex gap-5 rounded-2xl bg-white p-7 border border-border shadow-sm transition-all hover:shadow-md lg:p-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-muted">
                <f.icon size={24} className="text-brand" strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="mb-1.5 text-[15px] font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-foreground-muted">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
