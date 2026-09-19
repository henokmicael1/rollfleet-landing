import type { ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useScrollReveal()

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
