import { Monitor, Smartphone } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const platforms = [
  {
    icon: Monitor,
    title: 'Dispatcher Portal',
    subtitle: 'Command center for your operations — built for speed and clarity.',
    items: [
      'AI-powered rate confirmation parsing',
      'Visual dispatch board with load pipeline',
      'Real-time driver tracking on live map',
      'Fleet management with compliance tracking',
      'One-click invoicing and factoring',
      'Driver settlements with 4 pay models',
    ],
  },
  {
    icon: Smartphone,
    title: 'Driver Mobile App',
    subtitle: 'Everything drivers need on the road — minimal taps, maximum clarity.',
    items: [
      'View and accept assigned loads',
      'Update load status with one tap',
      'Capture and upload BOL photos',
      'GPS location sharing in real time',
      'Message dispatch directly from the app',
      'View earnings and settlement history',
    ],
  },
]

export function Platform() {
  const ref = useScrollReveal()

  return (
    <section className="py-28 lg:py-40">
      <div ref={ref} className="reveal container-lg">
        <div className="mx-auto mb-16 max-w-xl text-center lg:mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-brand-light">
            Platform
          </p>
          <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
            Two Apps, One Platform
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400">
            A powerful web portal for dispatchers and a streamlined mobile app
            for drivers — connected in real time.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {platforms.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-dark-850 p-8 ring-1 ring-white/[0.05] lg:p-10"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/[0.08]">
                <card.icon size={20} className="text-brand-light" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-white">{card.title}</h3>
              <p className="mb-8 text-sm text-slate-400/70">{card.subtitle}</p>
              <ul className="space-y-3.5">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300/80">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand-light/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
