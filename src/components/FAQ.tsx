import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { Reveal } from './Reveal'

const faqs = [
  {
    q: 'How does AI rate confirmation parsing work?',
    a: 'Upload any broker rate confirmation PDF. Our AI extracts broker info, addresses, dates, rates, and reference numbers automatically. Review and approve with one click.',
  },
  {
    q: 'What driver pay models do you support?',
    a: 'All four common pay structures: percentage-based owner-operator, per-mile company driver, percentage-based company driver, and salary. Each supports deductions, advances, and bonuses.',
  },
  {
    q: 'Can I integrate with factoring companies?',
    a: 'Yes. Generate professional invoices with all required documentation and Notice of Assignment. Export in formats compatible with major factoring companies.',
  },
  {
    q: 'Is there a contract or setup fee?',
    a: "No contracts and no setup fees. Start with our free plan and upgrade when ready. Cancel anytime.",
  },
  {
    q: 'How secure is my data?',
    a: 'Enterprise-grade security with Clerk authentication, PostgreSQL row-level security, encrypted data at rest and in transit, and complete audit trails.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <Reveal className="text-center max-w-lg mx-auto mb-12">
          <p className="section-label">FAQ</p>
          <h2 className="h2">Frequently asked questions</h2>
        </Reveal>

        <Reveal className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-border bg-bg divide-y divide-border shadow-sm">
            {faqs.map((faq, i) => {
              const expanded = open === i
              return (
                <div key={faq.q} className="px-5">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(expanded ? null : i)}
                      aria-expanded={expanded}
                      aria-controls={`faq-panel-${i}`}
                      className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer"
                    >
                      <span className="font-medium text-text-primary">{faq.q}</span>
                      <span
                        className={`flex-shrink-0 mt-0.5 rounded-full p-1 transition-colors ${
                          expanded ? 'bg-accent/10' : 'bg-bg-elevated'
                        }`}
                      >
                        {expanded ? (
                          <Minus size={16} className="text-accent" />
                        ) : (
                          <Plus size={16} className="text-text-muted" />
                        )}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    className={`grid transition-all duration-300 ease-out ${
                      expanded ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <p className="overflow-hidden text-text-muted text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
