import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { profile, stats } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './icons'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-14rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent-600/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      </div>

      <div className="container-page">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 font-mono text-xs text-accent-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" />
            Disponible para nuevos proyectos
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-3 font-mono text-lg text-accent-400 sm:text-xl">{profile.role}</p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">{profile.tagline}</p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-600"
            >
              Contáctame
              <ArrowRight size={16} />
            </a>
            <a
              href="#experiencia"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-accent-500/50 hover:text-white"
            >
              Ver experiencia
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} />
              {profile.location}
            </span>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 link-accent">
              <GithubIcon size={16} />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 link-accent">
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 link-accent">
              <Mail size={16} />
              {profile.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={380}>
          <dl className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="card">
                <dt className="text-3xl font-semibold text-white">{stat.value}</dt>
                <dd className="mt-1 text-sm text-slate-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
