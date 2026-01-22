import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react'
import { Card, Badge } from '../ui'

const highlights = [
  {
    icon: Calendar,
    title: '+4 años',
    description: 'de experiencia en tecnología'
  },
  {
    icon: Briefcase,
    title: 'Juriscoop',
    description: 'Analista de Tecnología (2018-2022)'
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
  'Git y GitHub',
  'Prompt Engineering',
  'Inteligencia Artificial',
  'Front-End Developer',
  'Fundamentos de JavaScript'
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
            <Card hover={false} className="h-full">
              <h3 className="text-2xl font-semibold text-slate-100 mb-6">
                Mi Historia
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Soy un <span className="text-violet-400 font-medium">Desarrollador Front-End</span> con
                  sólida experiencia en tecnología y soporte técnico. Mi carrera comenzó en
                  <span className="text-violet-400 font-medium"> Juriscoop</span>, donde trabajé durante
                  4 años como Analista de Tecnología, desarrollando soluciones con React, JavaScript,
                  Node.js y bases de datos.
                </p>
                <p>
                  Actualmente me encuentro cursando el último semestre de <span className="text-violet-400 font-medium">Ingeniería de Software</span> en
                  el Politécnico Grancolombiano, combinando mi formación académica con el desarrollo
                  de proyectos personales que me permiten explorar nuevas tecnologías.
                </p>
                <p>
                  Me apasiona crear aplicaciones web modernas, intuitivas y funcionales. Mis proyectos
                  recientes incluyen <span className="text-violet-400 font-medium">Strimo</span>, un SaaS
                  para gestión de suscripciones, y <span className="text-violet-400 font-medium">HagaMas</span>,
                  una herramienta de automatización empresarial.
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
                <Card className="text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-violet-500/20 to-indigo-500/20 mb-4">
                    <item.icon className="text-violet-400" size={28} />
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
