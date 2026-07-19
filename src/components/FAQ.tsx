import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

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
    <section id="faq" className="section">
      <div className="container">
        <div className="text-center max-w-lg mx-auto mb-12">
          <p className="section-label">FAQ</p>
          <h2 className="h2">Frequently asked questions</h2>
        </div>

        <div className="max-w-2xl mx-auto divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 text-left"
              >
                <span className="font-medium text-text-primary">{faq.q}</span>
                <span className="flex-shrink-0 mt-0.5">
                  {open === i ? (
                    <Minus size={16} className="text-accent" />
                  ) : (
                    <Plus size={16} className="text-text-muted" />
                  )}
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${
                open === i ? 'max-h-48 mt-3' : 'max-h-0'
              }`}>
                <p className="text-text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
