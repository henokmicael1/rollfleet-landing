import { ArrowRight, Play } from 'lucide-react'

const APP_URL = 'https://app.rollfleet.com'

function DashboardMock() {
  return (
    <div className="animate-float overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5 bg-surface">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto rounded-md bg-surface-muted px-16 py-1 text-[10px] text-foreground-subtle">
          app.rollfleet.com
        </div>
      </div>

      <div className="flex">
        {/* Sidebar - dark like the app */}
        <div className="hidden w-44 shrink-0 bg-dark p-4 lg:block">
          <div className="mb-6 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-[9px] font-bold text-white">RF</div>
            <span className="text-[11px] font-semibold text-white">RollFleet</span>
          </div>
          <div className="space-y-0.5">
            {['Dashboard', 'Loads', 'Drivers', 'Trucks', 'Invoices', 'Settlements'].map((item, i) => (
              <div
                key={item}
                className={`rounded px-2.5 py-1.5 text-[10px] ${
                  i === 0 ? 'bg-brand/15 text-brand-light font-medium' : 'text-slate-400'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Main content - light */}
        <div className="flex-1 bg-surface p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-foreground">Dashboard</span>
            <span className="rounded-md bg-white px-2 py-1 text-[9px] text-foreground-subtle border border-border">Last 30 days</span>
          </div>

          {/* KPIs */}
          <div className="mb-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {[
              { label: 'Active Loads', value: '24', change: '+4', color: 'text-brand' },
              { label: 'Revenue', value: '$127K', change: '+12%', color: 'text-success' },
              { label: 'On-Time', value: '96%', change: '+3%', color: 'text-info' },
              { label: 'Drivers', value: '8', change: '+1', color: 'text-warning' },
            ].map((kpi) => (
              <div key={kpi.label} className="rounded-lg bg-white p-3 border border-border">
                <div className="text-[8px] uppercase tracking-wider text-foreground-subtle">{kpi.label}</div>
                <div className="mt-1 text-lg font-bold text-foreground">{kpi.value}</div>
                <div className={`text-[9px] font-medium ${kpi.color}`}>{kpi.change}</div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="rounded-lg bg-white border border-border">
            <div className="px-3 py-2 text-[9px] font-semibold uppercase tracking-wider text-foreground-subtle border-b border-border">Recent Loads</div>
            {[
              { id: 'L-0024', broker: 'CH Robinson', route: 'Dallas → Chicago', status: 'In Transit', color: 'bg-info/10 text-info' },
              { id: 'L-0023', broker: 'TQL', route: 'Atlanta → Miami', status: 'Delivered', color: 'bg-success/10 text-success' },
              { id: 'L-0022', broker: 'Echo Global', route: 'Phoenix → LA', status: 'Assigned', color: 'bg-warning/10 text-warning' },
            ].map((load) => (
              <div key={load.id} className="flex items-center border-b border-border/50 last:border-0 px-3 py-2">
                <span className="w-14 text-[10px] font-semibold text-foreground">{load.id}</span>
                <span className="hidden w-24 text-[9px] text-foreground-subtle md:block">{load.broker}</span>
                <span className="flex-1 text-[9px] text-foreground-muted">{load.route}</span>
                <span className={`text-[8px] font-medium px-2 py-0.5 rounded-full ${load.color}`}>{load.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand/5 via-transparent to-info/5 blur-3xl" />

      <div className="container-lg relative">
        <div className="mx-auto max-w-2xl pt-[160px] pb-16 text-center lg:pt-[200px] lg:pb-24">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-brand-muted px-4 py-1.5 text-[13px] font-medium text-brand-dark ring-1 ring-brand/20">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-dot" />
            Built for Growing Fleets
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            The Modern TMS for{' '}
            <span className="gradient-text">Trucking Operations</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-foreground-muted">
            Dispatch, track, settle, and invoice — all from one platform.
            Built for owner-operators and small fleets who move fast.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`${APP_URL}/login`}
              className="group inline-flex items-center gap-2 rounded-xl bg-brand px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/25"
            >
              Start Free
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-8 py-4 text-[15px] font-medium text-foreground transition-all hover:border-foreground-subtle hover:bg-surface"
            >
              <Play size={15} fill="currentColor" className="text-foreground-subtle" />
              See How It Works
            </a>
          </div>

          <p className="mt-6 text-sm text-foreground-subtle">
            No credit card required · Free plan available · Setup in minutes
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl pb-24 lg:pb-32">
          <DashboardMock />
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </section>
  )
}
