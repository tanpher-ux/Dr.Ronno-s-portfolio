import Reveal from './Reveal'
import ServiceCard from './ServiceCard'
import { services } from '../data/services'

export default function Services({
  showHeading = true,
  bare = false,
}: {
  showHeading?: boolean
  bare?: boolean
}) {
  return (
    <section className={bare ? '' : 'bg-charcoal-light/40 py-28 sm:py-36'}>
      <div className="container-edit">
        {showHeading && (
          <>
            <Reveal>
              <p className="eyebrow mb-4">Services</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl max-w-3xl leading-[1.05] uppercase mb-16 sm:mb-20">
                Strategic counsel for leaders who build what lasts.
              </h2>
            </Reveal>
          </>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
