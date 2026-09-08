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
    <section id={id} className="scroll-mt-24 py-20">
      <div className="container-page">
        <Reveal>
          <header className="mb-10 flex items-center gap-4">
            <span className="font-mono text-sm text-accent-500">{index}</span>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
            <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
