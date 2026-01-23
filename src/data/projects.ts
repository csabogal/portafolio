export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "strimo",
    title: "Strimo",
    description:
      "SaaS para gestión de suscripciones compartidas con cobros automáticos y recordatorios inteligentes.",
    longDescription:
      "Strimo es una plataforma SaaS que facilita la gestión de suscripciones compartidas entre amigos, familia o compañeros de trabajo. Permite registrar plataformas de streaming, dividir costos automáticamente, enviar recordatorios de pago con IA y mantener un historial completo de cobros.",
    image: "/projects/strimo-dashboard.png",
    technologies: [
      "React 19",
      "TypeScript",
      "Supabase",
      "Groq AI",
      "Tailwind CSS",
      "Vercel",
    ],
    features: [
      "Autenticación segura con Supabase Auth",
      "Gestión de múltiples plataformas de streaming",
      "Cobros automáticos con división de costos",
      "Recordatorios inteligentes generados con IA (Groq)",
      "Dashboard con estadísticas y próximos cobros",
      "Modo oscuro y diseño responsive",
    ],
    liveUrl: "https://strimoapp.site/",
    githubUrl: "https://github.com/csabogal/strimo",
    featured: true,
  },
  {
    id: "hagamas",
    title: "HAGA+",
    description:
      "Aplicación empresarial para automatización de procesos en Seguros Alfa.",
    longDescription:
      "HAGA+ es una aplicación web desarrollada para Seguros Alfa que automatiza procesos del área de Gestión de Accesos. Incluye generación de documentos PDF, plantillas de correo personalizables, gestión de usuarios y un tablero de notas para el equipo.",
    image: "/projects/hagamas-landing.png",
    technologies: [
      "Python",
      "Flask",
      "SQLite",
      "Tailwind CSS",
      "ReportLab",
      "Jinja2",
    ],
    features: [
      "Generación automática de documentos PDF",
      "Sistema de plantillas de correo",
      "Gestión de usuarios",
      "Tablero de notas adhesivas",
      "Automatización de procesos administrativos",
      "Interfaz intuitiva y responsive",
    ],
    githubUrl: "https://github.com/csabogal/HAGA",
    featured: true,
  },
];
