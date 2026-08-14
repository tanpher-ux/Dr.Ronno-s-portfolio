import PageHeader from '../components/PageHeader'
import About from '../components/About'
import Timeline from '../components/Timeline'
import Stats from '../components/Stats'
import Reveal from '../components/Reveal'
import headerImage from '../assets/photos/staircase.jpg'

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="Political Strategist. Entrepreneur. Leader."
        description="Building institutions, strategy and enterprise for a more accountable Kenya."
        image={headerImage}
      />
      <About showHeading={false} />

      <section className="bg-charcoal-light/40 py-28 sm:py-36 border-y border-white/10">
        <div className="container-edit">
          <Reveal>
            <p className="eyebrow mb-4">The Journey</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl max-w-2xl leading-[1.05] uppercase mb-16 sm:mb-20">
              A record of building.
            </h2>
          </Reveal>
          <Timeline />
        </div>
      </section>

      <section className="bg-charcoal py-28 sm:py-36">
        <div className="container-edit">
          <Reveal>
            <Stats />
          </Reveal>
        </div>
      </section>
    </div>
  )
}
