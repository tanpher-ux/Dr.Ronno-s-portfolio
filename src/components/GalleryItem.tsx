import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import type { GalleryImage } from '../data/gallery'

export default function GalleryItem({
  image,
  index,
  onOpen,
}: {
  image: GalleryImage
  index: number
  onOpen: () => void
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative block w-full overflow-hidden text-left ${
        image.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
      }`}
      aria-label={`View image: ${image.alt}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-colors duration-500 flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-400 text-ivory">
          <Eye size={26} strokeWidth={1.3} />
        </span>
      </div>
      <span className="absolute bottom-3 left-4 text-[10px] tracking-widest2 uppercase text-ivory/0 group-hover:text-ivory/90 transition-colors duration-500">
        {image.category}
      </span>
    </motion.button>
  )
}
