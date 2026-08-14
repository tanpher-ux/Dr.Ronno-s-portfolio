import PageHeader from '../components/PageHeader'
import Services from '../components/Services'
import headerImage from '../assets/photos/stage-speaking.jpg'

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Services"
        title="Strategic Counsel"
        description="Six areas of practice built to help leaders navigate political, communications and organizational complexity."
        image={headerImage}
      />
      <Services showHeading={false} />
    </div>
  )
}
