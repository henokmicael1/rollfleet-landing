import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Finally a TMS that doesn't feel like it was built in 2005. Setup took 10 minutes and the AI rate con parsing saves me hours every week.",
    name: 'Marcus Thompson',
    role: 'Owner-Operator',
    location: 'Atlanta, GA',
  },
  {
    quote: "Switched from TruckingOffice after 3 years. RollFleet is faster, cleaner, and the driver settlement calculations are actually correct.",
    name: 'Sarah Kim',
    role: 'Fleet Manager',
    location: '8-truck fleet',
  },
  {
    quote: "The invoicing and factoring integration is a game changer. I get paid faster and spend way less time on paperwork.",
    name: 'James Rodriguez',
    role: 'Owner-Operator',
    location: 'Houston, TX',
  },
]

export function Testimonials() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">Testimonials</p>
          <h2 className="h2">What carriers are saying</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-text-primary text-sm">{t.name}</div>
                <div className="text-xs text-text-muted">{t.role} · {t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
