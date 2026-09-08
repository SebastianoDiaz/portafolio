import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { code } from './syntax'
import { Terminal } from './Terminal'

const focus = [
  'Código limpio y mantenible',
  'Arquitectura hexagonal y modular',
  'Principios SOLID',
  'Seguridad por defecto (JWT, roles)',
  'Pruebas y mejora continua',
]

export function About() {
  return (
    <Section id="sobre-mi" index="01" title="Sobre mí">
      <div className="grid gap-8 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="space-y-4 text-base leading-relaxed text-slate-400">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="md:col-span-2">
          <Terminal title="~/enfoque.sh">
            <p>
              {code.comment('# principios de trabajo')}
            </p>
            <ul className="mt-2 space-y-1.5 text-slate-300">
              {focus.map((item) => (
                <li key={item}>
                  <span className="text-accent-500">▸</span> {item}
                </li>
              ))}
            </ul>
          </Terminal>
        </Reveal>
      </div>
    </Section>
  )
}
