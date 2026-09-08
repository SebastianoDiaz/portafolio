import { experiences } from '../data/profile'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experiencia" index="02" title="Experiencia">
      <ol className="relative border-l border-white/10 pl-6 sm:pl-8">
        {experiences.map((experience, index) => (
          <li key={`${experience.company}-${experience.period}`} className="pb-10 last:pb-0">
            <Reveal delay={index * 80}>
              <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-accent-500 ring-4 ring-ink-950" />
              <div className="card">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
                  <span className="font-mono text-xs text-accent-400">{experience.period}</span>
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  {experience.company} · {experience.location}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-400">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
