import { type ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'outline' | 'gradient'
  className?: string
}

const variants = {
  default: 'bg-dark-700/80 text-slate-300',
  outline: 'border border-slate-600 text-slate-300',
  gradient: 'bg-gradient-to-r from-emerald-500/10 to-sky-500/10 text-emerald-400 border border-emerald-500/20'
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1
        text-sm font-medium rounded-full
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  )
}
