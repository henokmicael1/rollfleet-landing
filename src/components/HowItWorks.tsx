import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    step: '01',
    title: 'Create Your Account',
    description: 'Sign up, name your company, and invite your team. Ready in under two minutes.',
  },
  {
    step: '02',
    title: 'Add Fleet & Drivers',
    description: 'Register trucks and trailers, add drivers with pay settings, upload compliance docs.',
  },
  {
    step: '03',
    title: 'Dispatch & Track',
    description: 'Create loads from rate confirmations, assign to drivers, track everything in real time.',
  },
  {
    step: '04',
    title: 'Settle & Get Paid',
    description: 'Generate invoices, submit to factoring, calculate settlements, track every dollar.',
  },
]

export function HowItWorks() {
  const ref = useScrollReveal()

  return (
    <section id="how-it-works" className="py-28 lg:py-40">
      <div ref={ref} className="reveal container-lg">
        <div className="mx-auto mb-16 max-w-xl text-center lg:mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-brand-light">
            How It Works
          </p>
          <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
            Up and Running in 4 Steps
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400">
            No setup fees. No onboarding calls. Just sign up and start dispatching.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((s) => (
            <div key={s.step} className="relative text-center lg:text-left">
              <div className="mb-5 font-display text-4xl font-bold text-dark-600 lg:text-5xl">
                {s.step}
              </div>
              <h3 className="mb-2 text-[15px] font-semibold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400/80">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
