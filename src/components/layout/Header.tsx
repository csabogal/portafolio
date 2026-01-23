import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal, ChevronRight } from 'lucide-react'

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Contacto', href: '#contact' }
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])



  return (
    <motion.header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 border-b
        ${isScrolled
          ? 'bg-dark-900/80 backdrop-blur-md border-dark-800 py-4'
          : 'bg-transparent border-transparent py-6'}
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#hero"
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="p-1.5 bg-dark-800 rounded-lg group-hover:bg-dark-700 transition-colors border border-dark-700">
            <Terminal size={20} className="text-emerald-500" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors">
            CS<span className="text-emerald-500">.dev</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors duration-200 py-2 group"

            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-emerald-400 hover:bg-dark-800 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden absolute top-full left-0 right-0 border-t border-dark-800 bg-dark-900/95 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-slate-400 hover:text-emerald-400 hover:bg-dark-800/50 rounded-xl transition-all flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-emerald-500" />
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

// End of file
