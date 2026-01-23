import type { LucideIcon } from 'lucide-react'
import {
  Code2,
  Server,
  Database,
  Wrench,
  Users,
  Sparkles
} from 'lucide-react'

export interface SkillCategory {
  id: string
  title: string
  icon: LucideIcon
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Code2,
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap'
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    skills: [
      'Python',
      'Flask',
      'Node.js',
      'REST APIs'
    ]
  },
  {
    id: 'databases',
    title: 'Bases de Datos',
    icon: Database,
    skills: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'SQLite',
      'Supabase'
    ]
  },
  {
    id: 'tools',
    title: 'Herramientas',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Vite',
      'Vercel',
      'npm'
    ]
  },
  {
    id: 'methodologies',
    title: 'Metodologías',
    icon: Users,
    skills: [
      'Scrum',
      'Agile',
      'Kanban',
      'CI/CD'
    ]
  },
  {
    id: 'other',
    title: 'Otros',
    icon: Sparkles,
    skills: [
      'Prompt Engineering',
      'Inteligencia Artificial',
      'Groq',
      'VBA',
      'Active Directory'
    ]
  }
]
