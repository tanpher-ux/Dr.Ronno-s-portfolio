import { Instagram, Mail, Phone } from 'lucide-react'
import Reveal from './Reveal'
import ContactForm from './ContactForm'

export default function Contact({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="bg-charcoal-light/40 py-28 sm:py-36">
      <div className="container-edit grid lg:grid-cols-2 gap-12 sm:gap-16">
        <div>
          {showHeading && (
            <>
              <Reveal>
                <p className="eyebrow mb-4">Contact</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-serif text-4xl sm:text-6xl uppercase leading-[1.02] mb-10">
                  Let's Connect
                </h2>
              </Reveal>
            </>
          )}

          <Reveal delay={0.2}>
            <ul className="space-y-6">
              <li>
                <a
                  href="mailto:ronohsphilosophy@gmail.com"
                  className="flex items-center gap-4 text-ivory/80 hover:text-gold transition-colors group"
                >
                  <span className="border border-white/15 group-hover:border-gold/60 p-3 transition-colors">
                    <Mail size={18} strokeWidth={1.4} />
                  </span>
                  ronohsphilosophy@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+254756411219"
                  className="flex items-center gap-4 text-ivory/80 hover:text-gold transition-colors group"
                >
                  <span className="border border-white/15 group-hover:border-gold/60 p-3 transition-colors">
                    <Phone size={18} strokeWidth={1.4} />
                  </span>
                  +254 756 411 219
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/emmanuelkipngetichronoh"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-ivory/80 hover:text-gold transition-colors group"
                >
                  <span className="border border-white/15 group-hover:border-gold/60 p-3 transition-colors">
                    <Instagram size={18} strokeWidth={1.4} />
                  </span>
                  @emmanuelkipngetichronoh
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
