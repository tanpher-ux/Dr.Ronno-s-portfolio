import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Stat {
  value: number
  suffix?: string
  label: string
}

const STATS: Stat[] = [
  { value: 12, suffix: '+', label: 'Years in Strategy & Leadership' },
  { value: 40, suffix: '+', label: 'Campaigns & Initiatives Advised' },
  { value: 2, label: 'Enterprises Founded' },
  { value: 15, suffix: 'K+', label: 'Community Members Engaged' },
]

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="border-l border-gold/30 pl-5"
        >
          <p className="font-serif text-4xl sm:text-5xl text-gold">
            <Counter value={stat.value} suffix={stat.suffix} />
          </p>
          <p className="mt-2 text-xs sm:text-sm tracking-wide text-ivory/60 font-light leading-snug">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
