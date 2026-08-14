import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Reveal from '../components/Reveal'
import Stats from '../components/Stats'
import Philosophy from '../components/Philosophy'
import PressStrip from '../components/PressStrip'
import Testimonials from '../components/Testimonials'

function SectionLink({ to, label }: { to: string; label: string }) {
  return (
    <Reveal delay={0.15}>
      <Link
        to={to}
        className="inline-flex items-center gap-2 text-gold text-xs tracking-widest2 uppercase border-b border-gold/50 pb-1 hover:text-ivory hover:border-ivory transition-colors w-fit"
      >
        {label} <ArrowUpRight size={14} />
      </Link>
    </Reveal>
  )
}

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="bg-charcoal-light/30 py-16 sm:py-20 border-b border-white/10">
        <div className="container-edit">
          <Reveal>
            <PressStrip />
          </Reveal>
        </div>
      </section>

      <About showHeading={false} />

      <section className="bg-charcoal pb-28 sm:pb-36">
        <div className="container-edit">
          <Reveal>
            <Stats />
          </Reveal>
        </div>
      </section>

      <Philosophy />

      <div className="bg-charcoal-light/40">
        <div className="container-edit pt-28 sm:pt-36">
          <Reveal>
            <p className="eyebrow mb-4">Services</p>
          </Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 sm:mb-20">
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl max-w-2xl leading-[1.05] uppercase">
                Strategic counsel for leaders who build what lasts.
              </h2>
            </Reveal>
            <SectionLink to="/services" label="View all services" />
          </div>
        </div>
        <div className="pb-28 sm:pb-36">
          <Services showHeading={false} bare />
        </div>
      </div>

      <div className="bg-charcoal">
        <div className="container-edit pt-28 sm:pt-36">
          <Reveal>
            <p className="eyebrow mb-4">Gallery</p>
          </Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 sm:mb-20">
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl max-w-2xl leading-[1.05] uppercase">
                Moments in leadership.
              </h2>
            </Reveal>
            <SectionLink to="/gallery" label="View full gallery" />
          </div>
        </div>
        <div className="pb-28 sm:pb-36">
          <Gallery showHeading={false} limit={6} bare />
        </div>
      </div>

      <section className="bg-charcoal-light/40 py-28 sm:py-36 border-t border-white/10">
        <div className="container-edit">
          <Reveal>
            <p className="eyebrow mb-4 text-center">Testimonials</p>
          </Reveal>
          <Testimonials />
        </div>
      </section>

      <section className="bg-charcoal py-28 sm:py-36 border-t border-white/10">
        <div className="container-edit text-center">
          <Reveal>
            <p className="eyebrow mb-6">Contact</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl uppercase leading-[1.05] max-w-3xl mx-auto">
              Ready to build what lasts?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 bg-gold text-charcoal text-xs tracking-widest2 uppercase px-9 py-4 hover:-translate-y-0.5 transition-transform duration-300"
            >
              Let's Connect
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
