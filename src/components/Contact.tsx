import { Mail, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './icons'
import { Reveal } from './Reveal'
import { Section } from './Section'

const channels = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: GithubIcon, label: 'github.com/SebastianoDiaz', href: profile.github },
  { icon: LinkedinIcon, label: 'LinkedIn', href: profile.linkedin },
]

export function Contact() {
  return (
    <Section id="contacto" index="05" title="Contacto">
      <Reveal>
        <p className="max-w-2xl text-base leading-relaxed text-slate-400">
          ¿Tienes un proyecto o una vacante en mente? Escríbeme y conversamos sobre cómo puedo aportar.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {channels.map((channel, index) => (
          <Reveal key={channel.label} delay={index * 60}>
            <a
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="card flex items-center gap-4 hover:bg-ink-800/60"
            >
              <channel.icon className="shrink-0 text-accent-500" size={20} />
              <span className="text-sm text-slate-300">{channel.label}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
