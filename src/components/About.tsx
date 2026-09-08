import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function About() {
  return (
    <Section id="sobre-mi" index="01" title="Sobre mí">
      <div className="grid gap-8 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <div className="space-y-4 text-base leading-relaxed text-slate-400">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="card font-mono text-sm">
            <p className="text-slate-500">// enfoque</p>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>Código limpio y mantenible</li>
              <li>Arquitectura hexagonal</li>
              <li>Principios SOLID</li>
              <li>Seguridad por defecto</li>
              <li>Mejora continua</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
