import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/photos/stage-speaking.jpg'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-charcoal">
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Emmanuel Kipngetich Ronoh addressing an audience on stage"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/40" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 container-edit pb-24 sm:pb-28 w-full"
      >
        <motion.p variants={item} className="eyebrow mb-6">
          Eldoret, Kenya
        </motion.p>

        <motion.h1
          variants={item}
          className="font-serif text-ivory leading-[0.98] text-[13vw] sm:text-[9vw] md:text-[7.5vw] lg:text-[6.4vw] uppercase"
        >
          Emmanuel
          <br />
          Kipngetich Ronoh
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-sm sm:text-base tracking-[0.4em] uppercase text-gold"
        >
          Power. Purpose. Progress.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-ivory/75 text-base sm:text-lg font-light"
        >
          Political Strategist. Entrepreneur. Leader.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-gold text-charcoal text-xs tracking-widest2 uppercase px-8 py-4 transition-transform duration-300 hover:-translate-y-0.5"
          >
            Let's Connect
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-ivory/30 text-ivory text-xs tracking-widest2 uppercase px-8 py-4 hover:border-gold hover:text-gold transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>

      <motion.button
        type="button"
        onClick={() => window.scrollTo({ top: window.innerHeight * 0.92, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        aria-label="Scroll down"
        className="absolute bottom-8 right-8 z-10 hidden sm:flex flex-col items-center gap-2 text-ivory/60 hover:text-gold transition-colors"
      >
        <span className="text-[10px] tracking-widest2 uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  )
}
