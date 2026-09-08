import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-page flex flex-col items-center justify-between gap-2 text-sm text-slate-600 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">Construido con React, TypeScript y Tailwind CSS</p>
      </div>
    </footer>
  )
}
