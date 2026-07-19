import { ArrowLeft, Bell } from 'lucide-react'
import { useState } from 'react'

export function ComingSoon() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      {/* Header */}
      <header className="container py-6">
        <a href="/" className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors">
          <ArrowLeft size={16} />
          <span className="text-sm">Back to home</span>
        </a>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-sm w-full text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
              <span className="font-display text-xl font-bold text-white">RF</span>
            </div>
          </div>

          <h1 className="font-display text-2xl font-semibold text-text-primary mb-3">
            Coming Soon
          </h1>
          
          <p className="text-text-muted mb-8">
            We're putting the finishing touches on RollFleet.
            Be the first to know when we launch.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                required
              />
              <button type="submit" className="btn btn-primary w-full justify-center">
                <Bell size={16} />
                Notify Me
              </button>
              <p className="text-xs text-text-muted">
                We'll only email you when we launch.
              </p>
            </form>
          ) : (
            <div className="bg-accent/5 border border-accent/10 rounded-xl p-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <Bell size={18} className="text-accent" />
              </div>
              <p className="text-text-primary font-medium mb-1">You're on the list</p>
              <p className="text-text-muted text-sm">
                We'll notify you at {email}
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="container py-6 text-center">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} RollFleet, LLC
        </p>
      </footer>
    </div>
  )
}
