import madarakaPoster from '../assets/photos/madaraka-poster.jpg'
import doubleExposureCall from '../assets/photos/double-exposure-call.jpg'
import staircase from '../assets/photos/staircase.jpg'
import poolTable from '../assets/photos/pool-table.jpg'
import patioWhiteShirt from '../assets/photos/patio-white-shirt.jpg'
import couchRelaxed from '../assets/photos/couch-relaxed.jpg'
import fieldSunglasses from '../assets/photos/field-sunglasses.jpg'
import couchTwoMen from '../assets/photos/couch-two-men.jpg'
import patioSide from '../assets/photos/patio-side.jpg'
import greenHeadshot from '../assets/photos/green-headshot.jpg'
import studioCaneClose from '../assets/photos/studio-cane-close.jpg'
import twoMenLaughing from '../assets/photos/two-men-laughing.jpg'
import studioPortraitRedTie from '../assets/photos/studio-portrait-red-tie.jpg'
import studioCrossedArms from '../assets/photos/studio-crossed-arms.jpg'
import stageSpeaking from '../assets/photos/stage-speaking.jpg'
import studioCaneFull from '../assets/photos/studio-cane-full.jpg'

export interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  tall?: boolean
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: stageSpeaking,
    alt: 'Emmanuel Kipngetich Ronoh addressing the crowd on stage with the Kenyan flag backdrop',
    category: 'Public Speaking',
    tall: true,
  },
  {
    id: 2,
    src: madarakaPoster,
    alt: 'Madaraka Day tribute graphic honoring Emmanuel Kipngetich Ronoh, Youth Leader & Civic Advocate',
    category: 'Civic Engagement',
  },
  {
    id: 3,
    src: studioCaneFull,
    alt: 'Formal studio portrait of Emmanuel Kipngetich Ronoh in a navy mandarin-collar suit',
    category: 'Portrait',
    tall: true,
  },
  {
    id: 4,
    src: studioPortraitRedTie,
    alt: 'Studio portrait of Emmanuel Kipngetich Ronoh in a dark suit with a red tie',
    category: 'Portrait',
  },
  {
    id: 5,
    src: staircase,
    alt: 'Emmanuel Kipngetich Ronoh descending a wooden staircase in a formal suit',
    category: 'Leadership',
  },
  {
    id: 6,
    src: fieldSunglasses,
    alt: 'Emmanuel Kipngetich Ronoh standing on an open field at a public event',
    category: 'Events',
    tall: true,
  },
  {
    id: 7,
    src: doubleExposureCall,
    alt: 'Double-exposure portrait of Emmanuel Kipngetich Ronoh set against a golden sunset sky',
    category: 'Portrait',
  },
  {
    id: 8,
    src: studioCaneClose,
    alt: 'Close studio portrait of Emmanuel Kipngetich Ronoh holding a ceremonial cane',
    category: 'Portrait',
  },
  {
    id: 9,
    src: twoMenLaughing,
    alt: 'Emmanuel Kipngetich Ronoh sharing a light moment with a colleague outdoors',
    category: 'Meetings',
    tall: true,
  },
  {
    id: 10,
    src: patioWhiteShirt,
    alt: 'Emmanuel Kipngetich Ronoh seated at an outdoor garden table in a white shirt and tie',
    category: 'Community',
  },
  {
    id: 11,
    src: patioSide,
    alt: 'Emmanuel Kipngetich Ronoh seated in profile at an outdoor patio setting',
    category: 'Community',
  },
  {
    id: 12,
    src: couchRelaxed,
    alt: 'Emmanuel Kipngetich Ronoh seated in a lounge in a tailored grey suit',
    category: 'Business',
    tall: true,
  },
  {
    id: 13,
    src: couchTwoMen,
    alt: 'Emmanuel Kipngetich Ronoh in discussion with a colleague in a lounge setting',
    category: 'Meetings',
  },
  {
    id: 14,
    src: studioCrossedArms,
    alt: 'Studio headshot of Emmanuel Kipngetich Ronoh with arms crossed in a dark suit',
    category: 'Portrait',
  },
  {
    id: 15,
    src: greenHeadshot,
    alt: 'Outdoor portrait of Emmanuel Kipngetich Ronoh against natural greenery',
    category: 'Portrait',
    tall: true,
  },
  {
    id: 16,
    src: poolTable,
    alt: 'Emmanuel Kipngetich Ronoh in a moment of leisure beside a pool table',
    category: 'Leisure',
  },
]
