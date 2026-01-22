import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/csabogal', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ccsabogal/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:camilo.sabogal@hotmail.com', label: 'Email' }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-violet-400 transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <p className="text-slate-500 text-sm text-center">
            &copy; {currentYear} Cristian Camilo Sabogal López. Todos los derechos reservados.
          </p>

          <p className="text-slate-600 text-sm flex items-center gap-1">
            Hecho con <Heart size={14} className="text-violet-400" /> usando React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
