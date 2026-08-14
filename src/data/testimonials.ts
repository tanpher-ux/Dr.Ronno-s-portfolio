export interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Emmanuel brings a rare combination of strategic clarity and genuine commitment to public service. His counsel shaped how our team approached an entire election cycle.',
    name: 'County Campaign Director',
    role: 'Rift Valley Region',
  },
  {
    id: 2,
    quote:
      'Working with Hawthorne Consultancy transformed how our organization communicates. Emmanuel has a gift for translating complex positions into messages people trust.',
    name: 'Civic Organization Lead',
    role: 'Eldoret, Kenya',
  },
  {
    id: 3,
    quote:
      "His grasp of both grassroots realities and institutional strategy is unusual. Emmanuel doesn't just advise — he builds capacity that outlasts any single campaign.",
    name: 'Community Development Partner',
    role: 'Uasin Gishu County',
  },
]
