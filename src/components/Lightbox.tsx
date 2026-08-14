import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, type PanInfo } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { GalleryImage } from '../data/gallery'

export default function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryImage[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const image = images[index]
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeBtnRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onPrev, onNext])

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80) onNext()
    else if (info.offset.x > 80) onPrev()
  }

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`Image ${index + 1} of ${images.length}: ${image.alt}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] bg-charcoal/97 backdrop-blur-sm flex items-center justify-center"
        onClick={onClose}
      >
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-6 right-6 text-ivory/80 hover:text-gold transition-colors z-10 p-2"
        >
          <X size={30} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Previous image"
          className="absolute left-1 sm:left-8 top-1/2 -translate-y-1/2 text-ivory/70 hover:text-gold transition-colors z-10 p-2"
        >
          <ChevronLeft size={26} className="sm:hidden" />
          <ChevronLeft size={36} className="hidden sm:block" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Next image"
          className="absolute right-1 sm:right-8 top-1/2 -translate-y-1/2 text-ivory/70 hover:text-gold transition-colors z-10 p-2"
        >
          <ChevronRight size={26} className="sm:hidden" />
          <ChevronRight size={36} className="hidden sm:block" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={handleDragEnd}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[80vw] sm:max-w-[88vw] max-h-[80vh] flex flex-col items-center"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-[80vw] sm:max-w-[88vw] max-h-[64vh] sm:max-h-[70vh] object-contain select-none"
              draggable={false}
            />
            <p className="mt-4 text-ivory/60 text-xs tracking-widest2 uppercase">
              {image.category} — {index + 1} / {images.length}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}
