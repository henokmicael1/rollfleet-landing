import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    q: 'How does the AI rate confirmation parsing work?',
    a: 'Upload any broker rate confirmation PDF and our AI (powered by GPT Vision) extracts all load details automatically — broker info, pickup/delivery addresses, dates, rates, commodity, and reference numbers. Just review and approve.',
  },
  {
    q: 'What driver pay models do you support?',
    a: 'All four common pay structures: percentage-based owner-operator, per-mile company driver, percentage-based company driver, and salary. Each can include recurring deductions, advances, and bonuses.',
  },
  {
    q: 'Can I integrate with my factoring company?',
    a: 'Yes. Generate professional invoices with all required documentation (BOL, rate con) and Notice of Assignment. We support export formats compatible with major factoring companies.',
  },
  {
    q: 'Is there a contract or setup fee?',
    a: 'No contracts, no setup fees. Start with our free plan and upgrade when you\'re ready. Cancel anytime with no penalties.',
  },
  {
    q: 'How secure is my data?',
    a: 'Enterprise-grade security with Clerk authentication, PostgreSQL row-level security for multi-tenancy, encrypted data at rest and in transit, and full audit trails. Hosted on Azure with 99.9% uptime SLA.',
  },
  {
    q: 'Do you have a mobile app?',
    a: 'Our web app is fully responsive and works great on mobile devices. A dedicated mobile app for drivers is on our roadmap.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useScrollReveal()

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div ref={ref} className="reveal container-lg">
        <div className="mx-auto mb-12 max-w-xl text-center lg:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
            FAQ
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto max-w-2xl space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-border bg-white"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="pr-4 text-[15px] font-medium text-foreground">{f.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-foreground-subtle transition-transform ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-foreground-muted">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
