import { motion } from 'framer-motion'
import { timeline } from '../data/timeline'

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-white/10" />

      <ol className="space-y-12 sm:space-y-14">
        {timeline.map((entry, i) => (
          <motion.li
            key={entry.year}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative pl-8 sm:pl-10"
          >
            <span className="absolute left-0 top-1.5 h-[15px] w-[15px] sm:h-[19px] sm:w-[19px] rounded-full border-2 border-gold bg-charcoal" />
            <p className="text-gold text-xs tracking-widest2 uppercase mb-2">{entry.year}</p>
            <h3 className="font-serif text-xl sm:text-2xl text-ivory mb-2">{entry.title}</h3>
            <p className="text-ivory/60 font-light leading-relaxed max-w-xl">
              {entry.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
