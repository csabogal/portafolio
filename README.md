# Portafolio - Cristian Camilo Sabogal López

Sitio web de portafolio personal construido con React 19, TypeScript, Vite y Tailwind CSS 4.

## Comandos

```bash
npm run dev      # Iniciar servidor de desarrollo con HMR
npm run build    # Verificación de TypeScript + build de producción con Vite
npm run lint     # Ejecutar ESLint
npm run preview  # Previsualizar build de producción localmente
npm run deploy   # Compilar y desplegar en GitHub Pages
```

## Arquitectura

### Organización de Componentes

- **`src/components/ui/`** - Primitivos de UI reutilizables (Button, Card, Badge) con exportación barrel vía `index.ts`
- **`src/components/layout/`** - Componentes de estructura de página (Header, Footer) con exportación barrel
- **`src/components/sections/`** - Secciones principales de la página (Hero, About, Projects, Skills, Contact) con exportación barrel
- **`src/data/`** - Archivos de datos estáticos para el contenido de proyectos y habilidades

### Patrones Clave

- El alias de ruta `@` apunta a `./src` (configurado en vite.config.ts)
- Los componentes usan exportaciones nombradas y se re-exportan desde archivos index.ts
- Las animaciones usan Framer Motion
- Los iconos provienen de lucide-react
- Tema personalizado de Tailwind con escalas de colores `dark-*`, `primary` y `secondary` en tailwind.config.js
- Fuentes personalizadas: Inter (cuerpo), Outfit (encabezados)

## Tecnologías

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React
