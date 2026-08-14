import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'
import headerImage from '../assets/photos/patio-white-shirt.jpg'

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Let's Connect"
        description="For speaking engagements, advisory inquiries or general correspondence, reach out below."
        image={headerImage}
      />
      <Contact showHeading={false} />
    </div>
  )
}
