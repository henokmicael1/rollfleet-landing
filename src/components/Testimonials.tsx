import { Star } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    quote: 'Finally a TMS that doesn\'t feel like it was built in 2005. Setup took 10 minutes and the AI rate con parsing saves me hours every week.',
    name: 'Marcus T.',
    role: 'Owner-Operator, Atlanta',
    rating: 5,
  },
  {
    quote: 'Switched from TruckingOffice after 3 years. RollFleet is faster, cleaner, and the driver settlement calculations are actually correct.',
    name: 'Sarah K.',
    role: 'Fleet Manager, 8 trucks',
    rating: 5,
  },
  {
    quote: 'The invoicing integration with factoring companies is a game changer. I get paid faster and spend less time on paperwork.',
    name: 'James R.',
    role: 'Owner-Operator, Texas',
    rating: 5,
  },
]

export function Testimonials() {
  const ref = useScrollReveal()

  return (
    <section className="py-24 lg:py-32">
      <div ref={ref} className="reveal container-lg">
        <div className="mx-auto mb-14 max-w-xl text-center lg:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
            Testimonials
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            What Carriers Are Saying
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl bg-white p-7 border border-border shadow-sm lg:p-8"
            >
              <div className="mb-4 flex gap-0.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-warning text-warning" />
                ))}
              </div>
              <p className="mb-6 flex-1 text-[15px] leading-relaxed text-foreground-muted">"{t.quote}"</p>
              <div>
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-foreground-subtle">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
