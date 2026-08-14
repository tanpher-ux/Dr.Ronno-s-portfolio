import { useCallback, useState } from 'react'
import Reveal from './Reveal'
import GalleryItem from './GalleryItem'
import Lightbox from './Lightbox'
import { galleryImages } from '../data/gallery'

export default function Gallery({
  showHeading = true,
  limit,
  bare = false,
}: {
  showHeading?: boolean
  limit?: number
  bare?: boolean
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const images = limit ? galleryImages.slice(0, limit) : galleryImages

  const close = useCallback(() => setActiveIndex(null), [])
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length],
  )
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length],
  )

  return (
    <section className={bare ? '' : 'bg-charcoal py-28 sm:py-36'}>
      <div className="container-edit">
        {showHeading && (
          <>
            <Reveal>
              <p className="eyebrow mb-4">Gallery</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl max-w-3xl leading-[1.05] uppercase mb-16 sm:mb-20">
                Moments in leadership.
              </h2>
            </Reveal>
          </>
        )}

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
          {images.map((image, i) => (
            <div key={image.id} className="break-inside-avoid">
              <GalleryItem image={image} index={i} onOpen={() => setActiveIndex(i)} />
            </div>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={images}
          index={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}
