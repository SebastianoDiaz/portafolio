import type { ReactNode } from 'react'

type TerminalProps = {
  title: string
  children: ReactNode
  className?: string
}

export function Terminal({ title, children, className = '' }: TerminalProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-ink-900/80 shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/5 bg-ink-800/80 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-slate-500">{title}</span>
      </div>
      <div className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">{children}</div>
    </div>
  )
}
