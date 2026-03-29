import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react'
import { Card, Badge } from '../ui'

const highlights = [
  {
    icon: Calendar,
    title: '+10 años',
    description: 'de experiencia en el área de tecnología'
  },
  {
    icon: Briefcase,
    title: 'Seguros Alfa',
    description: 'Analista de Accesos (2022-Actual)'
  },
  {
    icon: GraduationCap,
    title: 'Ing. de Software',
    description: 'Politécnico Grancolombiano'
  },
  {
    icon: Award,
    title: 'Certificaciones',
    description: 'Git, IA, Prompt Engineering'
  }
]

const certifications = [
  'Front-End Developer',
  'Git y GitHub',
  'Inteligencia Artificial',
  'Prompt Engineering'
]

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Sobre Mí</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Conoce más sobre mi trayectoria profesional y formación
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card hover={false} className="h-full bg-dark-800/30 border-slate-800">
              <h3 className="text-2xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
                Mi Historia
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Soy un <span className="text-emerald-400 font-medium font-mono">Software Developer</span> con
                  más de 10 años de experiencia en el área de tecnología. Actualmente trabajo en
                  <span className="text-sky-400 font-medium"> Seguros Alfa</span> como Analista de Accesos,
                  donde diseñé y desarrollé <span className="text-sky-400 font-medium">HAGA+</span>, una
                  herramienta que redujo errores manuales en 95% y tiempos operativos en 40%.
                </p>
                <p>
                  Mi carrera incluye experiencia en <span className="text-sky-400 font-medium">Juriscoop</span> (2018-2022),
                  donde construí dashboards con React y Node.js, y automaticé procesos críticos con Python.
                  Actualmente curso el último semestre de <span className="text-emerald-400 font-medium">Ingeniería de Software</span> en
                  el Politécnico Grancolombiano.
                </p>
                <p>
                  Me especializo en desarrollo frontend y full stack, automatización de procesos y
                  creación de herramientas internas de alto impacto. Mi proyecto personal
                  <span className="text-sky-400 font-medium"> Strimo</span> es un SaaS con IA para
                  gestión de suscripciones compartidas.
                </p>
              </div>

              {/* Certifications */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-slate-200 mb-4">
                  Certificaciones Platzi
                </h4>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <Badge key={cert} variant="gradient">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:border-emerald-500/30 group">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-emerald-500/10 to-sky-500/10 mb-4 group-hover:from-emerald-500/20 group-hover:to-sky-500/20 transition-all">
                    <item.icon className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" size={28} />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-100 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
