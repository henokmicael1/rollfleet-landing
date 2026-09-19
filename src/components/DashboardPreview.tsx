import { LayoutDashboard, Truck, Users, Receipt, TrendingUp } from 'lucide-react'
import { Reveal } from './Reveal'

const navItems = [
  { icon: LayoutDashboard, label: 'Dispatch', active: true },
  { icon: Truck, label: 'Fleet' },
  { icon: Users, label: 'Drivers' },
  { icon: Receipt, label: 'Invoices' },
]

const stats = [
  { label: 'Active loads', value: '18', trend: '+4 this week' },
  { label: 'Revenue (MTD)', value: '$126k', trend: '+12%' },
  { label: 'Avg. rate/mile', value: '$2.94', trend: '+$0.18' },
]

const loads = [
  { id: 'L-4821', lane: 'Dallas, TX → Memphis, TN', status: 'In transit', tone: 'accent' },
  { id: 'L-4822', lane: 'Laredo, TX → Phoenix, AZ', status: 'Delivered', tone: 'muted' },
  { id: 'L-4823', lane: 'Atlanta, GA → Orlando, FL', status: 'Dispatched', tone: 'indigo' },
]

const toneClasses: Record<string, string> = {
  accent: 'bg-accent/10 text-accent',
  muted: 'bg-bg-elevated text-text-muted',
  indigo: 'bg-indigo-50 text-indigo-600',
}

export function DashboardPreview() {
  return (
    <Reveal className="max-w-4xl mx-auto">
      <div className="glass rounded-2xl p-2" aria-hidden="true">
        <div className="rounded-xl bg-white border border-border overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-alt">
            <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
            <span className="ml-3 text-xs text-text-muted">app.rollfleet.com/dispatch</span>
          </div>

          <div className="flex">
            <div className="hidden sm:flex flex-col gap-1 w-44 shrink-0 border-r border-border p-3">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm ${
                    item.active ? 'bg-accent/10 text-accent font-medium' : 'text-text-muted'
                  }`}
                >
                  <item.icon size={16} strokeWidth={1.75} />
                  {item.label}
                </div>
              ))}
            </div>

            <div className="flex-1 p-4 sm:p-5 space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-border p-3">
                    <p className="text-[11px] uppercase tracking-wide text-text-muted">{stat.label}</p>
                    <p className="font-display text-lg font-semibold text-text-primary">{stat.value}</p>
                    <p className="flex items-center gap-1 text-[11px] text-accent">
                      <TrendingUp size={12} />
                      {stat.trend}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-border divide-y divide-border">
                {loads.map((load) => (
                  <div key={load.id} className="flex items-center justify-between gap-3 px-3 py-2.5">
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-text-primary">{load.id}</p>
                      <p className="truncate text-xs text-text-muted">{load.lane}</p>
                    </div>
                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${toneClasses[load.tone]}`}>
                      {load.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
