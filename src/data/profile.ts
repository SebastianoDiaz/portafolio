export type Experience = {
  role: string
  company: string
  location: string
  period: string
  highlights: string[]
}

export type Education = {
  title: string
  school: string
  year: string
}

export type SkillGroup = {
  category: string
  items: string[]
}

export const profile = {
  name: 'Sebastián Osorio Diaz',
  role: 'Desarrollador Full Stack',
  tagline:
    'Tecnólogo en Análisis y Desarrollo de Software. Diseño, construyo y mantengo soluciones empresariales seguras, escalables y alineadas al negocio.',
  location: 'Armenia, Quindío — Colombia',
  email: 'sebaspro7767@gmail.com',
  phone: '+57 301 821 5155',
  github: 'https://github.com/samuraypro7767',
  linkedin: 'https://www.linkedin.com/in/sebastian-osorio-osorio-diaz-30078b353/',
  about: [
    'Desarrollador Full Stack con experiencia en el diseño, desarrollo, implementación y mantenimiento de soluciones empresariales, tanto en frontend como en backend.',
    'Trabajo con APIs REST, bases de datos, servicios en la nube (AWS, Azure, GCP) e inteligencia artificial aplicada al desarrollo de software, siempre con validación humana.',
    'Me caracterizo por el pensamiento analítico, la rápida adaptación, el trabajo en equipo y el compromiso con la calidad y la mejora continua.',
  ],
} as const

export const roles = [
  'full stack developer',
  'backend con Java, Spring Boot & .NET',
  'frontend con React & TypeScript',
  'arquitectura hexagonal · SOLID',
  'Docker, CI/CD & cloud (AWS / Azure / GCP)',
] as const

export const stats = [
  { value: '3+', label: 'Años desarrollando software' },
  { value: '2°', label: 'Puesto Hackathon SENA' },
  { value: '10+', label: 'Tecnologías en producción' },
] as const

export const experiences: Experience[] = [
  {
    role: 'Desarrollador Full Stack (Freelance)',
    company: 'Konex',
    location: 'Armenia, Quindío',
    period: 'Ago 2025 — Sep 2026',
    highlights: [
      'Resolución de incidencias, deuda técnica y bloqueantes, además de refactorización orientada a mantenibilidad y rendimiento.',
      'Modernización de la arquitectura aplicando arquitectura hexagonal para microservicios más escalables y desacoplados.',
      'Migración y mejora continua del sistema bajo metodologías ágiles, reduciendo deuda técnica.',
      'Monitoreo de aplicaciones con Grafana para detectar fallos y optimizar el rendimiento.',
    ],
  },
  {
    role: 'Desarrollador Full Stack (Pasantía)',
    company: 'Empresas Públicas de Armenia',
    location: 'Armenia, Quindío',
    period: 'Feb 2026 — Ago 2026',
    highlights: [
      'Desarrollo e integración de módulos para sistemas jurídicos, contables y administrativos según los requerimientos de cada área.',
      'Arquitectura modular que facilita el mantenimiento y la evolución del sistema.',
      'Implementación de autenticación, autorización y control de acceso a las funcionalidades.',
      'Uso de Docker para entornos de desarrollo y ejecución aislada de componentes.',
    ],
  },
  {
    role: 'Desarrollador Backend',
    company: 'Proyectos freelance y académicos',
    location: 'Calarcá / Armenia',
    period: '2023 — 2024',
    highlights: [
      'Desarrollo de APIs RESTful y soluciones modulares con buenas prácticas.',
      'Dominio de frameworks como Spring Boot y Express.js, junto a Git y Docker.',
    ],
  },
  {
    role: 'Desarrollador Odoo · Hackathon SENA',
    company: 'SENA',
    location: 'Armenia, Quindío',
    period: '2023 — 2024',
    highlights: [
      'Módulos personalizados en Odoo para gestión administrativa con Python y PostgreSQL.',
      'Segundo lugar en el Hackathon SENA por la calidad técnica de la solución.',
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Lenguajes y frameworks',
    items: ['Java', 'C#', '.NET', 'Python', 'Spring Boot', 'React', 'Vue.js', 'Angular', 'Express.js'],
  },
  {
    category: 'Frontend y diseño',
    items: ['Tailwind CSS', 'Bootstrap', 'CSS3', 'SCSS', 'Diseño responsive'],
  },
  {
    category: 'Datos y persistencia',
    items: ['PostgreSQL', 'JPA / Hibernate'],
  },
  {
    category: 'Seguridad',
    items: ['Spring Security', 'JWT', 'Autenticación y autorización'],
  },
  {
    category: 'Cloud y despliegue',
    items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Docker Compose', 'Render', 'Cloudinary'],
  },
  {
    category: 'CI/CD y automatización',
    items: [
      'GitHub Actions',
      'Azure DevOps Pipelines',
      'Integración y despliegue continuo',
      'Builds automatizados',
    ],
  },
  {
    category: 'Calidad y arquitectura',
    items: ['JUnit', 'SOLID', 'Arquitectura hexagonal', 'Arquitectura modular', 'Scrum'],
  },
  {
    category: 'Herramientas',
    items: ['Git', 'GitHub', 'Azure DevOps', 'Maven', 'Gradle', 'Grafana', 'Odoo'],
  },
  {
    category: 'Inteligencia artificial',
    items: ['IA generativa para análisis de código', 'Documentación técnica', 'Generación de pruebas', 'Automatización'],
  },
]

export const education: Education[] = [
  {
    title: 'Tecnólogo en Análisis y Desarrollo de Software',
    school: 'SENA — Armenia, Quindío',
    year: '2025',
  },
  {
    title: 'Técnico en Programación de Software',
    school: 'SENA — Armenia, Quindío',
    year: '2023',
  },
  {
    title: 'Desarrollo de Módulos en Odoo',
    school: 'SENA',
    year: '2024',
  },
  {
    title: 'Módulos de Inglés 1, 2, 3 y 4',
    school: 'SENA',
    year: '2023',
  },
]
