import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const current = testimonials[index]

  const go = (dir: 1 | -1) => {
    setDirection(dir)
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length)
  }

  return (
    <div className="max-w-3xl mx-auto text-center">
      <Quote className="mx-auto text-gold/60 mb-8" size={36} strokeWidth={1.2} />

      <div className="relative min-h-[220px] sm:min-h-[180px] flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -24 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="px-2"
          >
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl leading-relaxed text-ivory/90">
              "{current.quote}"
            </p>
            <p className="mt-8 text-gold text-xs tracking-widest2 uppercase">{current.name}</p>
            <p className="mt-1 text-ivory/50 text-xs tracking-wide">{current.role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="text-ivory/50 hover:text-gold transition-colors p-2"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => {
                setDirection(i > index ? 1 : -1)
                setIndex(i)
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 transition-all duration-300 ${
                i === index ? 'w-6 bg-gold' : 'w-1.5 bg-ivory/25'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="text-ivory/50 hover:text-gold transition-colors p-2"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  )
}
