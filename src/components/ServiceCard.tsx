import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '../data/services'

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="group relative border border-white/10 bg-charcoal-light overflow-hidden flex flex-col hover:border-gold/50 transition-colors duration-500 h-full"
      >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
        <span className="absolute top-4 left-5 font-serif text-3xl text-gold/80">
          {service.number}
        </span>
        <span className="absolute top-4 right-5 text-ivory/80">
          <Icon size={22} strokeWidth={1.4} />
        </span>
      </div>

      <div className="p-7 flex flex-col flex-1">
        <h3 className="font-serif text-xl text-ivory mb-3">{service.title}</h3>
        <p className="text-ivory/65 text-sm leading-relaxed font-light flex-1">
          {service.description}
        </p>
        <div className="mt-6 flex items-center gap-2 text-gold text-xs tracking-widest2 uppercase">
          Learn more
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>
      </Link>
    </motion.div>
  )
}
