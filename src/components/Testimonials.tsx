import { Star, Quote } from 'lucide-react'

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
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Testimonials</span>
          <h2 className="h2 text-balance">Trusted by carriers nationwide</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="card relative">
              <Quote size={32} className="absolute top-5 right-5 text-accent/10" />
              
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              <p className="text-text-secondary text-sm leading-relaxed mb-6 relative z-10">
                "{t.quote}"
              </p>
              
              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-text-primary text-sm">{t.name}</div>
                <div className="text-xs text-text-muted mt-0.5">{t.role} · {t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
