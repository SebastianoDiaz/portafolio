import { skillGroups } from '../data/profile'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="stack" index="03" title="Stack técnico">
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.category} delay={index * 60}>
            <article className="card h-full">
              <h3 className="font-mono text-sm text-accent-400">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
