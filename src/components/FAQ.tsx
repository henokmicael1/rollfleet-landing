import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  { q: 'Is there really a free plan?', a: 'Yes. The Free plan includes up to 3 trucks, 2 dispatchers, and 50 loads per month — forever. No credit card required. When you grow beyond that, upgrade to Starter or Professional.' },
  { q: 'How does the AI rate confirmation parsing work?', a: 'Upload a rate confirmation PDF and our AI reads the document to auto-fill broker info, pickup/delivery addresses, dates, rates, commodity, and more. It works with most standard RC formats and saves dispatchers hours of manual data entry every day.' },
  { q: 'What driver pay models do you support?', a: 'RollFleet supports all 4 standard pay models: Percentage Owner-Operator (company takes commission, driver gets the rest), Per-Mile ($/mile), Percentage Company (driver gets X% of load rate), and Salary (fixed monthly, prorated for period).' },
  { q: 'Can I switch from another TMS?', a: 'Absolutely. Most carriers are up and running on RollFleet within a day. We support CSV imports for your fleet data, and our team can assist with data migration for larger fleets.' },
  { q: 'Is my data secure?', a: 'Yes. RollFleet runs on Azure cloud infrastructure with 256-bit encryption, role-based access control, and tenant-isolated databases. Your data is completely separated from other companies on the platform.' },
  { q: 'Do you offer a mobile app for drivers?', a: 'Yes. The RollFleet Driver App is available on iOS and Android. Drivers can view loads, update status, upload BOL photos, share GPS location, message dispatch, and view their earnings — all from their phone.' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/[0.04]">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-5 text-left">
        <span className="pr-4 text-[15px] font-medium text-white">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-slate-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-sm leading-relaxed text-slate-400">{a}</p>
      </div>
    </div>
  )
}

export function FAQ() {
  const ref = useScrollReveal()

  return (
    <section id="faq" className="py-28 lg:py-40">
      <div ref={ref} className="reveal container-lg">
        <div className="mx-auto max-w-2xl">
          <div className="mb-16 text-center lg:mb-20">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-brand-light">
              FAQ
            </p>
            <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div>
            {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
