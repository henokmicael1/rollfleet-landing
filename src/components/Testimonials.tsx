import { Star } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    quote: 'RollFleet replaced three different apps we were using. Dispatching, settlements, and messaging are all in one place now. Our dispatchers love it.',
    name: 'Marcus Johnson',
    role: 'Fleet Manager',
    company: 'Horizon Freight LLC',
    trucks: '45 trucks',
  },
  {
    quote: 'The AI rate confirmation parsing alone saves us 2 hours a day. We upload the PDF and the load is created in seconds. Game changer for our dispatch team.',
    name: 'Sarah Chen',
    role: 'Operations Director',
    company: 'Pacific Routes Inc.',
    trucks: '28 trucks',
  },
  {
    quote: "As a small carrier with 8 trucks, I couldn't afford the big TMS platforms. RollFleet's free plan gave me everything I needed to get organized.",
    name: 'James Rodriguez',
    role: 'Owner-Operator',
    company: 'JR Transport',
    trucks: '8 trucks',
  },
]

export function Testimonials() {
  const ref = useScrollReveal()

  return (
    <section className="py-28 lg:py-40">
      <div ref={ref} className="reveal container-lg">
        <div className="mx-auto mb-16 max-w-xl text-center lg:mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-brand-light">
            Testimonials
          </p>
          <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
            Carriers Love RollFleet
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400">
            See what fleet managers, dispatchers, and owner-operators are saying about RollFleet.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl bg-dark-850 p-7 ring-1 ring-white/[0.05] lg:p-8"
            >
              <div className="mb-5 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-amber text-amber" />
                ))}
              </div>
              <blockquote className="mb-6 flex-1 text-[15px] leading-relaxed text-slate-300/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="border-t border-white/[0.04] pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/[0.08] font-display text-xs font-semibold text-brand-light">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{t.name}</div>
                    <div className="text-xs text-slate-500">
                      {t.role}, {t.company} &middot; {t.trucks}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
