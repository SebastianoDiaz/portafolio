import { GraduationCap } from 'lucide-react'
import { education } from '../data/profile'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="formacion" index="04" title="Formación y certificados">
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((item, index) => (
          <Reveal key={item.title} delay={index * 60}>
            <article className="card flex h-full items-start gap-4">
              <GraduationCap className="mt-0.5 shrink-0 text-accent-500" size={20} />
              <div>
                <h3 className="font-medium text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500">
                  {item.school} · {item.year}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
