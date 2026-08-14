import { Instagram, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10 pt-16 pb-10">
      <div className="container-edit">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10 pb-12 border-b border-white/10">
          <div>
            <p className="font-serif text-2xl sm:text-3xl text-ivory uppercase">
              Emmanuel Kipngetich Ronoh
            </p>
            <p className="mt-2 text-gold text-xs tracking-widest2 uppercase">
              Power. Purpose. Progress.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-xs tracking-widest2 uppercase text-ivory/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
          <p className="text-ivory/40 text-xs">
            © {new Date().getFullYear()} Emmanuel Kipngetich Ronoh. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/emmanuelkipngetichronoh"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-ivory/60 hover:text-gold transition-colors"
            >
              <Instagram size={18} strokeWidth={1.4} />
            </a>
            <a href="mailto:ronohsphilosophy@gmail.com" aria-label="Email" className="text-ivory/60 hover:text-gold transition-colors">
              <Mail size={18} strokeWidth={1.4} />
            </a>
            <a href="tel:+254756411219" aria-label="Phone" className="text-ivory/60 hover:text-gold transition-colors">
              <Phone size={18} strokeWidth={1.4} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
