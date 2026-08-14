import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import aboutImage1 from '../assets/photos/studio-cane-close.jpg'
import aboutImage2 from '../assets/photos/staircase.jpg'

const IMAGES = [aboutImage1, aboutImage2]

export default function About({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="bg-charcoal py-28 sm:py-36">
      <div className="container-edit">
        {showHeading && (
          <>
            <Reveal>
              <p className="eyebrow mb-4">About</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl max-w-4xl leading-[1.05] uppercase mb-16 sm:mb-24">
                Political Strategist. Entrepreneur. Leader.
              </h2>
            </Reveal>
          </>
        )}

        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10 lg:gap-y-14">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={IMAGES[0]}
                alt="Studio portrait of Emmanuel Kipngetich Ronoh holding a ceremonial cane"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center">
            <p className="text-ivory/80 text-lg leading-relaxed font-light">
              Emmanuel Kipngetich Ronoh is a political strategist, entrepreneur and leader
              committed to shaping a more accountable, forward-looking Kenya. His work sits at
              the intersection of political strategy, governance and institutional development —
              translating vision into structures that endure beyond a single election cycle.
            </p>
            <p className="mt-6 text-ivory/70 leading-relaxed font-light">
              Through disciplined strategic communication and grounded leadership, he advises
              public figures and organizations on how to navigate complex political terrain while
              staying anchored to purpose. His approach favors long-term institutional strength
              over short-term political gain.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={IMAGES[1]}
                alt="Emmanuel Kipngetich Ronoh descending a staircase in a formal suit"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col justify-center">
            <p className="text-ivory/70 leading-relaxed font-light">
              As founder of <span className="text-gold">Hawthorne Crest Holdings</span> and{' '}
              <span className="text-gold">Hawthorne Consultancy Ltd.</span>, Emmanuel channels
              the same discipline into economic empowerment — building enterprises and advisory
              practices that create real opportunity for communities across Kenya. He believes
              that durable political progress and sound economic institutions are inseparable,
              and that Kenya's future depends on leaders willing to build both.
            </p>
          </Reveal>

          <div className="hidden md:block" />

          <Reveal delay={0.1}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-gold/60 text-gold text-xs tracking-widest2 uppercase px-8 py-4 hover:bg-gold hover:text-charcoal transition-colors duration-300 w-fit"
            >
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
