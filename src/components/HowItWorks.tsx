import { Upload, Send, DollarSign } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: 'Upload Rate Con',
    description: 'Drag and drop your broker rate confirmation. AI extracts all load details automatically.',
  },
  {
    icon: Send,
    title: 'Dispatch Load',
    description: 'Assign to a driver and truck with one click. Track pickup to delivery in real-time.',
  },
  {
    icon: DollarSign,
    title: 'Get Paid',
    description: 'Generate invoices, submit to factoring, and calculate driver pay — fully automated.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">How It Works</p>
          <h2 className="h2">From rate con to settlement in minutes</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
                )}
                
                <div className="mb-5">
                  <div className="relative inline-flex">
                    <div className="w-20 h-20 rounded-2xl bg-bg-white border border-border flex items-center justify-center shadow-sm">
                      <s.icon size={32} className="text-accent" strokeWidth={1.5} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shadow-md">
                      {i + 1}
                    </span>
                  </div>
                </div>
                
                <h3 className="h3 mb-2">{s.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
