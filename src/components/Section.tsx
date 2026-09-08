import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  index: string
  title: string
  children: ReactNode
}

export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <header className="mb-10">
            <p className="font-mono text-xs text-slate-600">
              <span className="text-accent-500">{index}</span> // {id}
            </p>
            <div className="mt-2 flex items-center gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
              <span className="h-px flex-1 bg-gradient-to-r from-accent-500/40 via-white/10 to-transparent" />
            </div>
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
