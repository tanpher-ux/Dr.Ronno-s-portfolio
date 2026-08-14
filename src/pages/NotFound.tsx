import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-[100svh] flex items-center justify-center bg-charcoal px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <p className="eyebrow mb-6">404</p>
        <h1 className="font-serif text-4xl sm:text-6xl uppercase mb-6">Page not found</h1>
        <p className="text-ivory/60 font-light mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 border border-gold/60 text-gold text-xs tracking-widest2 uppercase px-8 py-4 hover:bg-gold hover:text-charcoal transition-colors duration-300"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
