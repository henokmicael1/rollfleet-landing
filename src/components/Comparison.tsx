import { Check, X, Minus } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

type CellValue = 'yes' | 'no' | 'partial' | string

interface Row { feature: string; spreadsheets: CellValue; enterprise: CellValue; rollfleet: CellValue }

const rows: Row[] = [
  { feature: 'Dispatch Board', spreadsheets: 'no', enterprise: 'yes', rollfleet: 'Visual & drag-and-drop' },
  { feature: 'AI Rate Con Parsing', spreadsheets: 'no', enterprise: 'no', rollfleet: 'Upload PDF, auto-fill' },
  { feature: 'Driver Mobile App', spreadsheets: 'no', enterprise: 'Extra cost', rollfleet: 'Included — iOS & Android' },
  { feature: 'Real-Time GPS', spreadsheets: 'no', enterprise: 'yes', rollfleet: 'Live map + ETA' },
  { feature: 'Settlements & Pay', spreadsheets: 'Spreadsheet formulas', enterprise: 'yes', rollfleet: '4 pay models, auto-calc' },
  { feature: 'Invoicing & Factoring', spreadsheets: 'no', enterprise: 'yes', rollfleet: 'One-click with NOA' },
  { feature: 'Compliance Alerts', spreadsheets: 'no', enterprise: 'partial', rollfleet: 'Automatic expiry alerts' },
  { feature: 'Setup Time', spreadsheets: 'partial', enterprise: 'Weeks + training', rollfleet: 'Minutes — self-serve' },
  { feature: 'Price', spreadsheets: 'Free but painful', enterprise: '$200–500+/mo', rollfleet: 'Free, then $49/mo' },
]

function Cell({ value }: { value: CellValue }) {
  if (value === 'yes') return <Check size={16} className="mx-auto text-emerald" />
  if (value === 'no') return <X size={16} className="mx-auto text-red/40" />
  if (value === 'partial') return <Minus size={16} className="mx-auto text-amber/40" />
  return <span>{value}</span>
}

export function Comparison() {
  const ref = useScrollReveal()

  return (
    <section className="py-28 lg:py-40">
      <div ref={ref} className="reveal container-lg">
        <div className="mx-auto mb-16 max-w-xl text-center lg:mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-brand-light">
            Why Switch
          </p>
          <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
            RollFleet vs. The Old Way
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400">
            Stop paying $200+/month for bloated enterprise software or juggling spreadsheets.
          </p>
        </div>

        <div className="mx-auto max-w-4xl overflow-x-auto rounded-2xl bg-dark-850 ring-1 ring-white/[0.05]">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-white/[0.04]">
                <th className="px-6 py-4 text-left font-medium text-slate-500">Feature</th>
                <th className="px-4 py-4 text-center font-medium text-slate-500">Spreadsheets</th>
                <th className="px-4 py-4 text-center font-medium text-slate-500">Enterprise TMS</th>
                <th className="px-4 py-4 text-center font-semibold text-brand-light">RollFleet</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature} className="border-b border-white/[0.03] last:border-0">
                  <td className="px-6 py-3.5 font-medium text-white">{r.feature}</td>
                  <td className="px-4 py-3.5 text-center text-slate-500"><Cell value={r.spreadsheets} /></td>
                  <td className="px-4 py-3.5 text-center text-slate-500"><Cell value={r.enterprise} /></td>
                  <td className="px-4 py-3.5 text-center font-medium text-brand-light"><Cell value={r.rollfleet} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
