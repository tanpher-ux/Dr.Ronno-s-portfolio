import {
  Compass,
  MessageSquareText,
  Megaphone,
  Share2,
  Newspaper,
  Mic2,
  type LucideIcon,
} from 'lucide-react'
import madarakaPoster from '../assets/photos/madaraka-poster.jpg'
import doubleExposureCall from '../assets/photos/double-exposure-call.jpg'
import fieldSunglasses from '../assets/photos/field-sunglasses.jpg'
import greenHeadshot from '../assets/photos/green-headshot.jpg'
import twoMenLaughing from '../assets/photos/two-men-laughing.jpg'
import stageSpeaking from '../assets/photos/stage-speaking.jpg'

export interface Service {
  number: string
  slug: string
  title: string
  description: string
  icon: LucideIcon
  image: string
}

export const services: Service[] = [
  {
    number: '01',
    slug: 'political-consulting',
    title: 'Political Consulting',
    description:
      'Strategic political insight, positioning and advisory support designed to help leaders navigate complex political environments.',
    icon: Compass,
    image: madarakaPoster,
  },
  {
    number: '02',
    slug: 'political-communications',
    title: 'Political Communications Strategist',
    description:
      'Developing clear and persuasive communication strategies that connect leadership, vision and audiences.',
    icon: MessageSquareText,
    image: doubleExposureCall,
  },
  {
    number: '03',
    slug: 'campaign-strategy-management',
    title: 'Campaign Strategy & Management',
    description:
      'Strategic planning, campaign organization, messaging and execution designed around clear objectives.',
    icon: Megaphone,
    image: fieldSunglasses,
  },
  {
    number: '04',
    slug: 'social-media-management',
    title: 'Social Media Management',
    description:
      'Building a consistent digital presence through strategic content, audience engagement and communication.',
    icon: Share2,
    image: greenHeadshot,
  },
  {
    number: '05',
    slug: 'media-press-relations',
    title: 'Media & Press Relations',
    description:
      'Strategic media engagement, public communication and reputation management.',
    icon: Newspaper,
    image: twoMenLaughing,
  },
  {
    number: '06',
    slug: 'public-speaking',
    title: 'Public Speaking',
    description:
      'Compelling speeches and presentations designed to communicate ideas and strengthen leadership presence.',
    icon: Mic2,
    image: stageSpeaking,
  },
]
