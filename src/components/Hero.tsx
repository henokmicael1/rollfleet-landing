import { ArrowRight, CheckCircle2, PlayCircle } from 'lucide-react'

const SIGNUP_URL = '/coming-soon'

const proofPoints = ['No credit card required', 'Free for your first truck', 'Setup in minutes']

const stats = [
  { value: '$0', label: 'To get started' },
  { value: '2 min', label: 'To first load' },
  { value: '24/7', label: 'Dispatch visibility' },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-bg-dark">
      <div className="absolute inset-0" aria-hidden="true">
        <video
          className="hero-video h-full w-full object-cover object-[68%_82%] sm:object-[50%_72%]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/truck-highway-poster.jpg"
        >
          <source src="/media/truck-highway.mp4" type="video/mp4" />
        </video>
        <div className="hero-scrim" />
      </div>

      <div className="container relative pt-32 pb-24 lg:pt-44 lg:pb-32">
        <div className="max-w-3xl">
          <div className="hero-badge mb-6">
            <span className="hero-badge-dot" />
            Free to start &mdash; no credit card
          </div>

          <h1 className="h1 text-white mb-5">
            Dispatch your trucks,{' '}
            <span className="hero-highlight">not your spreadsheets.</span>
          </h1>

          <p className="text-white/80 text-lg mb-8 max-w-xl">
            RollFleet is the modern TMS for owner-operators and small fleets &mdash; dispatch,
            invoicing, and driver settlements in one place. Start free and keep it free while
            you grow.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-7">
            <a href={SIGNUP_URL} className="btn btn-primary w-full sm:w-auto">
              Get Started Free
              <ArrowRight size={16} />
            </a>
            <a href="#how-it-works" className="btn btn-on-dark w-full sm:w-auto">
              <PlayCircle size={17} />
              See How It Works
            </a>
          </div>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
            {proofPoints.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-accent-light" />
                {point}
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md border-t border-white/15 pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-semibold text-white">{stat.value}</dd>
                <p className="text-xs text-white/60 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </section>
  )
}
