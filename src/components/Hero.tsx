import { ArrowRight, Play } from 'lucide-react'

const APP_URL = 'https://app.dev.rollfleet.com'

function DashboardMock() {
  return (
    <div className="animate-float overflow-hidden rounded-xl bg-dark-850 shadow-[0_0_80px_rgba(20,184,166,0.06),0_32px_64px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.06]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.04] px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        </div>
        <div className="mx-auto rounded-md bg-dark-900/80 px-16 py-1 text-[10px] text-slate-500/60">
          app.rollfleet.com/dashboard
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden w-40 shrink-0 border-r border-white/[0.03] p-4 lg:block">
          <div className="mb-6 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-brand text-[8px] font-bold text-white">RF</div>
            <span className="text-[11px] font-semibold text-white/80">RollFleet</span>
          </div>
          <div className="space-y-0.5">
            {['Dashboard', 'Loads', 'Fleet', 'Drivers', 'Invoices', 'Settlements'].map((item, i) => (
              <div
                key={item}
                className={`rounded px-2.5 py-1.5 text-[10px] ${
                  i === 0 ? 'bg-brand/10 text-brand-light font-medium' : 'text-slate-500/50'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[11px] font-medium text-white/80">Dashboard</span>
            <span className="rounded bg-dark-800 px-2 py-1 text-[9px] text-slate-500/60">Last 30 days</span>
          </div>

          {/* KPIs */}
          <div className="mb-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {[
              { label: 'Active Loads', value: '142', change: '+12%', color: 'text-brand-light' },
              { label: 'Revenue', value: '$847K', change: '+8.2%', color: 'text-emerald' },
              { label: 'On-Time', value: '98.4%', change: '+2.1%', color: 'text-blue' },
              { label: 'Drivers', value: '52', change: '+3', color: 'text-amber' },
            ].map((kpi) => (
              <div key={kpi.label} className="rounded-lg bg-dark-900/60 p-3">
                <div className="text-[8px] uppercase tracking-wider text-slate-500/50">{kpi.label}</div>
                <div className="mt-1 text-lg font-semibold text-white/90">{kpi.value}</div>
                <div className={`text-[8px] font-medium ${kpi.color}`}>{kpi.change}</div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="rounded-lg bg-dark-900/40">
            <div className="px-3 py-2 text-[8px] font-medium uppercase tracking-wider text-slate-500/40">Recent Loads</div>
            {[
              { id: 'RF-00142', broker: 'CH Robinson', route: 'Dallas → Chicago', status: 'In Transit', color: 'text-blue' },
              { id: 'RF-00141', broker: 'Echo Global', route: 'Atlanta → Miami', status: 'Delivered', color: 'text-emerald' },
              { id: 'RF-00140', broker: 'TQL', route: 'Phoenix → LA', status: 'Assigned', color: 'text-amber' },
            ].map((load) => (
              <div key={load.id} className="flex items-center border-t border-white/[0.03] px-3 py-2">
                <span className="w-16 text-[10px] font-medium text-white/70">{load.id}</span>
                <span className="hidden w-24 text-[9px] text-slate-500/50 md:block">{load.broker}</span>
                <span className="flex-1 text-[9px] text-slate-500/40">{load.route}</span>
                <span className={`text-[9px] font-medium ${load.color}`}>{load.status}</span>
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
      <div className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/[0.03] blur-[120px]" />

      <div className="container-lg relative">
        <div className="mx-auto max-w-2xl pt-[180px] pb-20 text-center lg:pt-[220px] lg:pb-28">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-brand/[0.06] px-5 py-2 text-[13px] font-medium text-brand-light ring-1 ring-brand/10">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-light animate-pulse-dot" />
            AI-Powered Fleet Management
          </div>

          <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
            The Modern TMS for{' '}
            <span className="gradient-text">Growing Fleets</span>
          </h1>

          <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-slate-400">
            Dispatch, track, settle, and invoice — all from one platform.
            AI-powered tools built for carriers who move fast.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`${APP_URL}/login`}
              className="group inline-flex items-center gap-2 rounded-xl bg-brand px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-light hover:shadow-xl hover:shadow-brand/30"
            >
              Start Free
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-dark-600/50 px-8 py-4 text-[15px] font-medium text-slate-300 transition-all hover:border-dark-500 hover:text-white"
            >
              <Play size={15} fill="currentColor" />
              See How It Works
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-500/50">
            No credit card required &middot; Free plan available &middot; Setup in minutes
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl pb-36 lg:pb-44">
          <DashboardMock />
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
        </div>
      </div>
    </section>
  )
}
