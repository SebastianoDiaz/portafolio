import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'
import { profile, roles, stats } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './icons'
import { Reveal } from './Reveal'
import { code } from './syntax'
import { Terminal } from './Terminal'

export function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="inicio" className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-16rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent-600/20 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      </div>

      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 font-mono text-xs text-accent-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" />
              Disponible para nuevos proyectos
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[2rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-4 break-words font-mono text-sm text-slate-500 sm:text-lg">
              <span className="text-accent-500">$</span> {typed}
              <span className="ml-0.5 inline-block h-[1.05em] w-[0.55ch] translate-y-[0.15em] animate-pulse bg-accent-400" />
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contacto"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-600 sm:flex-none"
              >
                Contáctame
                <ArrowRight size={16} />
              </a>
              <a
                href="#experiencia"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-accent-500/50 hover:text-white sm:flex-none"
              >
                Ver experiencia
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-slate-500">
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} />
                {profile.location}
              </span>
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 link-accent">
                <GithubIcon size={14} />
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 link-accent">
                <LinkedinIcon size={14} />
                LinkedIn
              </a>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 break-all link-accent">
                <Mail size={14} className="shrink-0" />
                {profile.email}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <Terminal title="developer.ts">
            <pre className="whitespace-pre text-slate-300">
              <code>
                {code.keyword('const ')}
                {code.name('developer')}
                {code.punct(': ')}
                {code.name('Developer')}
                {code.punct(' = {')}
                {'\n  '}
                {code.prop('name')}
                {code.punct(': ')}
                {code.string("'Sebastián Osorio'")}
                {code.punct(',')}
                {'\n  '}
                {code.prop('role')}
                {code.punct(': ')}
                {code.string("'Full Stack Developer'")}
                {code.punct(',')}
                {'\n  '}
                {code.prop('stack')}
                {code.punct(': [')}
                {code.string("'Java'")}
                {code.punct(', ')}
                {code.string("'Spring Boot'")}
                {code.punct(', ')}
                {code.string("'C#'")}
                {code.punct(', ')}
                {code.string("'.NET'")}
                {code.punct(', ')}
                {code.string("'React'")}
                {code.punct('],')}
                {'\n  '}
                {code.prop('cloud')}
                {code.punct(': [')}
                {code.string("'AWS'")}
                {code.punct(', ')}
                {code.string("'Azure'")}
                {code.punct(', ')}
                {code.string("'GCP'")}
                {code.punct('],')}
                {'\n  '}
                {code.prop('cicd')}
                {code.punct(': [')}
                {code.string("'GitHub Actions'")}
                {code.punct(', ')}
                {code.string("'Azure DevOps'")}
                {code.punct('],')}
                {'\n  '}
                {code.prop('architecture')}
                {code.punct(': ')}
                {code.string("'hexagonal'")}
                {code.punct(',')}
                {'\n  '}
                {code.prop('principles')}
                {code.punct(': [')}
                {code.string("'SOLID'")}
                {code.punct(', ')}
                {code.string("'clean code'")}
                {code.punct('],')}
                {'\n  '}
                {code.prop('available')}
                {code.punct(': ')}
                {code.boolean('true')}
                {code.punct(',')}
                {'\n'}
                {code.punct('}')}
                {'\n\n'}
                {code.comment('// escríbeme y construimos algo sólido')}
              </code>
            </pre>
          </Terminal>
        </Reveal>
      </div>

      <div className="container-page">
        <Reveal delay={380}>
          <dl className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="card">
                <dt className="font-mono text-3xl font-semibold text-white">{stat.value}</dt>
                <dd className="mt-1 text-sm text-slate-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
