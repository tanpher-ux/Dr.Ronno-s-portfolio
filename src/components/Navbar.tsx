import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal/85 backdrop-blur-md border-b border-white/5 py-4'
            : 'bg-gradient-to-b from-charcoal/60 to-transparent py-7'
        }`}
      >
        <nav className="container-edit flex items-center justify-between">
          <Link
            to="/"
            className="font-serif text-sm sm:text-base tracking-widest2 uppercase text-ivory"
          >
            Emmanuel Kipngetich Ronoh
          </Link>

          <ul className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative text-xs tracking-widest2 uppercase transition-colors duration-300 pb-1 ${
                      isActive ? 'text-gold' : 'text-ivory/70 hover:text-ivory'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-0 -bottom-0.5 h-px w-full bg-gold"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center border border-gold/60 text-gold text-xs tracking-widest2 uppercase px-6 py-3 hover:bg-gold hover:text-charcoal transition-colors duration-300"
          >
            Get in Touch
          </Link>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="lg:hidden text-ivory p-2"
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-charcoal flex flex-col"
          >
            <div className="container-edit flex items-center justify-between py-7">
              <span className="font-serif text-sm tracking-widest2 uppercase text-ivory">
                Emmanuel Kipngetich Ronoh
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-ivory p-2"
              >
                <X size={26} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col items-start justify-center gap-6 container-edit">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `font-serif text-4xl sm:text-5xl transition-colors duration-300 ${
                        isActive ? 'text-gold' : 'text-ivory hover:text-gold'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-6 inline-flex items-center border border-gold/60 text-gold text-xs tracking-widest2 uppercase px-6 py-4"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
