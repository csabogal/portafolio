import { motion } from 'framer-motion'
import { ExternalLink, Github, ChevronRight } from 'lucide-react'
import { projects } from '../../data/projects'
import { Card, Badge, Button } from '../ui'

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Proyectos Destacados</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Aplicaciones web que he desarrollado, desde SaaS hasta herramientas empresariales
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card hover={false} className="overflow-hidden bg-dark-800/20 border-slate-800 hover:border-emerald-500/20 transition-all duration-300">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-video rounded-xl overflow-hidden bg-dark-700">
                      <img
                        src={project.image}
                        alt={`Preview de ${project.title}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          const parent = target.parentElement
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-sky-500/20">
                                <span class="text-4xl font-bold gradient-text">${project.title}</span>
                              </div>
                            `
                          }
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </div>

                  {/* Project Info */}
                  <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <Badge variant="gradient" className="w-fit mb-4">
                      {project.id === 'strimo' ? 'SaaS' : 'Empresarial'}
                    </Badge>

                    <h3 className="text-3xl font-bold text-slate-100 mb-3 font-heading">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                        Características principales
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {project.features.slice(0, 4).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-slate-400 text-sm"
                          >
                            <ChevronRight className="text-emerald-500 mt-0.5 flex-shrink-0" size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs hover:border-emerald-500/40 hover:text-emerald-400 transition-colors cursor-default">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <Button
                          href={project.liveUrl}
                          external
                        >
                          <ExternalLink size={18} />
                          Ver Sitio
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="secondary"
                          href={project.githubUrl}
                          external
                        >
                          <Github size={18} />
                          Código
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
