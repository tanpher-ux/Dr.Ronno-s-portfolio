import PageHeader from '../components/PageHeader'
import Gallery from '../components/Gallery'
import headerImage from '../assets/photos/field-sunglasses.jpg'

export default function GalleryPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Gallery"
        title="Moments in Leadership"
        description="A visual record of engagement, strategy and public life across Kenya."
        image={headerImage}
      />
      <Gallery showHeading={false} />
    </div>
  )
}
