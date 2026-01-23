import { motion } from 'framer-motion'
import { skillCategories } from '../../data/skills'
import { Card, Badge } from '../ui'

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Habilidades Técnicas</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tecnologías y herramientas que utilizo para crear soluciones digitales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-emerald-500/30">
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-sky-500/10">
                    <category.icon className="text-emerald-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge className="hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors cursor-default">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
