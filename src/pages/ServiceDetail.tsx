import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { services } from '../data/services'
import { serviceDetails } from '../data/serviceDetails'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.slug === slug)
  const detail = slug ? serviceDetails[slug] : undefined

  useEffect(() => {
    if (service && detail) {
      document.title = detail.seoTitle
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', detail.seoDescription)
    }
    window.scrollTo(0, 0)
  }, [service, detail])

  if (!service || !detail) {
    return <Navigate to="/services" replace />
  }

  const Icon = service.icon
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <div>
      {/* Breadcrumb */}
      <div className="container-edit pt-28 sm:pt-32">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs tracking-widest2 uppercase text-ivory/50">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
          <ChevronRight size={12} />
          <span className="text-gold">{service.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative container-edit pt-10 sm:pt-14 pb-20 sm:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="eyebrow mb-6"
            >
              Services / {service.number}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.02]"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26 }}
              className="mt-6 text-ivory/70 text-base sm:text-lg font-light max-w-md"
            >
              {detail.heroDescription}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="group mt-10 inline-flex items-center gap-3 border border-gold/60 px-7 py-3.5 text-xs tracking-widest2 uppercase text-gold hover:bg-gold hover:text-charcoal transition-colors duration-400"
              >
                Let's Connect
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden border border-white/10"
          >
            <img src={service.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <span className="absolute top-6 right-6 text-ivory/90 bg-charcoal/50 backdrop-blur-sm p-3">
              <Icon size={22} strokeWidth={1.4} />
            </span>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-charcoal-light/40 py-20 sm:py-28">
        <div className="container-edit grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">{detail.introEyebrow}</p>
            <h2 className="font-serif text-2xl sm:text-3xl leading-snug">{detail.introHeading}</h2>
          </Reveal>
          <div className="space-y-5">
            {detail.introBody.map((paragraph, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="text-ivory/70 font-light leading-relaxed text-base sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Focus / Capabilities */}
      <section className="py-20 sm:py-28">
        <div className="container-edit">
          <Reveal>
            <p className="eyebrow mb-4">Strategic Capabilities</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase leading-[1.05] max-w-2xl mb-14 sm:mb-16">
              {detail.focusHeading}
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {detail.focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="border border-white/10 p-7 hover:border-gold/50 transition-colors duration-500"
              >
                <span className="font-serif text-2xl text-gold/70 mb-4 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-lg text-ivory mb-3">{area.title}</h3>
                <p className="text-ivory/60 text-sm font-light leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-charcoal-light/40 py-20 sm:py-28">
        <div className="container-edit">
          <Reveal>
            <p className="eyebrow mb-4">Process</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase leading-[1.05] max-w-2xl mb-14 sm:mb-16">
              {detail.processHeading}
            </h2>
          </Reveal>

          <div className="flex flex-wrap gap-6 sm:gap-4">
            {detail.process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-4 sm:gap-3"
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif text-xl text-gold">{p.step}</span>
                  <span className="text-xs sm:text-sm tracking-widest2 uppercase text-ivory/80">{p.label}</span>
                </div>
                {i < detail.process.length - 1 && (
                  <ArrowRight size={16} className="text-ivory/25 hidden sm:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-20 sm:py-28">
        <div className="container-edit grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">Why It Matters</p>
            <h2 className="font-serif text-2xl sm:text-3xl leading-snug">{detail.whyHeading}</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-ivory/70 font-light leading-relaxed text-base sm:text-lg">{detail.whyBody}</p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-white/10">
        <div className="container-edit py-20 sm:py-28 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-5xl uppercase leading-tight max-w-2xl mx-auto mb-6">
              {detail.ctaHeading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ivory/60 font-light mb-10 max-w-md mx-auto">{detail.ctaBody}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gold text-charcoal px-8 py-4 text-xs tracking-widest2 uppercase font-medium hover:bg-gold-bright transition-colors duration-400"
            >
              Get In Touch
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 sm:py-28">
        <div className="container-edit">
          <Reveal>
            <p className="eyebrow mb-4">Related Services</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-2xl sm:text-3xl uppercase mb-14 sm:mb-16">Explore More</h2>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((r, i) => (
              <motion.div
                key={r.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  to={`/services/${r.slug}`}
                  className="group relative block border border-white/10 overflow-hidden hover:border-gold/50 transition-colors duration-500"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={r.image}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                    <span className="absolute top-4 left-5 font-serif text-2xl text-gold/80">{r.number}</span>
                  </div>
                  <div className="p-6 flex items-center justify-between gap-3">
                    <h3 className="font-serif text-base text-ivory">{r.title}</h3>
                    <ArrowUpRight
                      size={18}
                      className="text-gold shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
