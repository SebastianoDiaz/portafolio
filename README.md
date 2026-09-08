# Portafolio — Sebastián Osorio Diaz

Portafolio personal de un desarrollador Full Stack. Interfaz oscura (negro + azul), responsive y sin dependencias innecesarias.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Despliegue automático en GitHub Pages

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run lint     # análisis estático
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
```

## Estructura

```
src/
├── components/   # secciones y piezas de UI reutilizables
├── data/         # contenido del portafolio (fuente única de verdad)
├── App.tsx       # composición de secciones
└── index.css     # tema y utilidades base
```

Todo el contenido (experiencia, stack, formación, contacto) vive en `src/data/profile.ts`; para actualizar el portafolio basta con editar ese archivo.

## Despliegue

Cada push a `main` dispara el workflow `.github/workflows/deploy.yml`, que compila el sitio y lo publica en GitHub Pages.
