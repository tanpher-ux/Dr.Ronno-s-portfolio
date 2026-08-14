import { motion } from 'framer-motion'

export default function PageHeader({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string
  title: string
  description?: string
  image: string
}) {
  return (
    <section className="relative min-h-[56svh] sm:min-h-[64svh] flex items-end overflow-hidden bg-charcoal">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
      </motion.div>

      <div className="relative z-10 container-edit pb-14 sm:pb-20 pt-28 sm:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="eyebrow mb-5"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl uppercase leading-[0.98] max-w-4xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
            className="mt-6 max-w-xl text-ivory/70 text-base sm:text-lg font-light"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
