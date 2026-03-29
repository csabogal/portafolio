import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Code2, Terminal } from 'lucide-react'
import { Button } from '../ui'

const socialLinks = [
  { icon: Github, href: 'https://github.com/csabogal', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ccsabogal/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:camilo.sabogal@hotmail.com', label: 'Email' }
]

export function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-dark-900 to-sky-500/5" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.8)_2px,transparent_2px),linear-gradient(90deg,rgba(15,23,42,0.8)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
            x: [0, -50, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative inline-block group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative p-1 bg-dark-900 rounded-full ring-1 ring-slate-800">
              <div className="bg-dark-800 rounded-full p-3">
                <Terminal className="w-8 h-8 text-emerald-400" />
              </div>
            </div>
          </motion.div>

          <motion.p
            className="text-emerald-400 font-mono font-medium mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hola, soy
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="gradient-text">Cristian Camilo</span>
            <br />
            <span className="text-slate-100">Sabogal López</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-slate-300 font-medium mb-6 flex items-center gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Code2 className="text-sky-400 w-6 h-6 md:w-8 md:h-8" />
            <span>Software Developer | Frontend & Full Stack</span>
            <Code2 className="text-sky-400 w-6 h-6 md:w-8 md:h-8" />
          </motion.h2>

          <motion.p
            className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            +4 años creando <span className="text-emerald-400 font-medium">aplicaciones web</span>, automatización de procesos
            <br className="hidden md:block" />
            <span className="mt-2 block">
              y <span className="text-sky-400 font-medium">herramientas internas</span> de alto impacto en el sector financiero y asegurador.
            </span>
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-800/50 border border-slate-700/50 rounded-xl text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto min-w-[160px] !bg-emerald-600 hover:!bg-emerald-500 text-white border-none shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              onClick={() => handleScrollTo('#projects')}
            >
              Ver Proyectos
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-w-[160px]"
              onClick={() => handleScrollTo('#contact')}
            >
              Contáctame
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.button
          className="text-slate-500 hover:text-emerald-400 transition-colors p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => handleScrollTo('#about')}
          aria-label="Scroll hacia abajo"
        >
          <ArrowDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  )
}
