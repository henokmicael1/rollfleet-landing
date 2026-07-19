import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How does AI rate confirmation parsing work?',
    a: 'Upload any broker rate confirmation PDF. Our AI powered by GPT-4 Vision extracts broker info, pickup/delivery addresses, dates, rates, commodity, and reference numbers automatically. Review and approve with one click.',
  },
  {
    q: 'What driver pay models do you support?',
    a: 'All four common pay structures: percentage-based owner-operator, per-mile company driver, percentage-based company driver, and salary. Each supports recurring deductions, advances, and bonuses.',
  },
  {
    q: 'Can I integrate with factoring companies?',
    a: 'Yes. Generate professional invoices with all required documentation (BOL, rate con) and Notice of Assignment. Export in formats compatible with major factoring companies.',
  },
  {
    q: 'Is there a contract or setup fee?',
    a: "No contracts and no setup fees. Start with our free plan and upgrade whenever you're ready. Cancel anytime — no penalties.",
  },
  {
    q: 'How secure is my data?',
    a: 'Enterprise-grade security with Clerk authentication, PostgreSQL row-level security for tenant isolation, encrypted data at rest and in transit, and complete audit trails. Hosted on Azure with 99.9% uptime SLA.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">FAQ</p>
          <h2 className="h2">Common questions</h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="card !p-0 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-bg-elevated/50 transition-colors"
              >
                <span className="font-display font-semibold text-text-primary pr-4 text-sm">{faq.q}</span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-bg-elevated flex items-center justify-center">
                  {open === i ? <Minus size={14} className="text-accent" /> : <Plus size={14} className="text-text-muted" />}
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-text-muted text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
