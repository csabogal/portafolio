import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react'
import { Card, Button } from '../ui'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'camilo.sabogal@hotmail.com',
    href: 'mailto:camilo.sabogal@hotmail.com'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ccsabogal',
    href: 'https://www.linkedin.com/in/ccsabogal/'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/csabogal',
    href: 'https://github.com/csabogal'
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+57 319 528 3936',
    href: 'tel:+573195283936'
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Bogotá, Colombia',
    href: null
  }
]

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Estoy abierto a nuevas oportunidades como Desarrollador Front-End o Full-Stack.
            <br />
            ¡No dudes en contactarme!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card hover={false}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-semibold text-slate-100 mb-6">
                  Información de contacto
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <motion.div
                      key={item.label}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-r from-violet-500/20 to-indigo-500/20">
                        <item.icon className="text-violet-400" size={20} />
                      </div>
                      <div>
                        <p className="text-slate-500 text-sm">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-slate-200 hover:text-violet-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-slate-200">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-center items-center text-center p-8 rounded-xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-500/20">
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 flex items-center justify-center mb-6"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Send className="text-white" size={32} />
                </motion.div>
                <h4 className="text-xl font-semibold text-slate-100 mb-3">
                  ¿Tienes un proyecto en mente?
                </h4>
                <p className="text-slate-400 mb-6">
                  Me encantaría escuchar sobre tu próximo proyecto y cómo puedo ayudarte a hacerlo realidad.
                </p>
                <Button
                  href="mailto:camilo.sabogal@hotmail.com?subject=Oportunidad%20de%20Proyecto"
                  size="lg"
                >
                  <Mail size={20} />
                  Enviar mensaje
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
