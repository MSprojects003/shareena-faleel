import { ArrowUpRight, Image, LayoutTemplate, Maximize2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useScrollReveal } from '@/lib/use-scroll-reveal'

import ui1 from '../../assets/ui_ux/img1.jpg'
import ui2 from '../../assets/ui_ux/mobile ui.jpg'
import ui3 from '../../assets/ui_ux/ui3.jpg'
import ui4 from '../../assets/ui_ux/ui4.jpg'
import ui5 from '../../assets/ui_ux/ui5.jpg'
import ui6 from '../../assets/ui_ux/ui ux 1.jpg'
import graphic1 from '../../assets/graphic/img1.jpg'
import graphic2 from '../../assets/graphic/IMG2.jpg'
import graphic3 from '../../assets/graphic/IMG3.jpg'
import graphic4 from '../../assets/graphic/IMG4.jpg'
import graphic6 from '../../assets/graphic/img6.jpg'
import graphic7 from '../../assets/graphic/img7.jpg'
import graphic8 from '../../assets/graphic/img8.jpg'
import graphic9 from '../../assets/graphic/img9.jpg'
import graphic10 from '../../assets/graphic/img10.jpg'
import graphic11 from '../../assets/graphic/img11.jpg'
import graphic12 from '../../assets/graphic/img12.jpg'
import graphic13 from '../../assets/graphic/img13.jpg'
import graphic15 from '../../assets/graphic/img15.jpg'
import graphic17 from '../../assets/graphic/img17.jpg'
import graphic21 from '../../assets/graphic/img21.jpg'
import graphic23 from '../../assets/graphic/img 23.jpg'
import graphic24 from '../../assets/graphic/img 24.jpg'
import graphic25 from '../../assets/graphic/img25.jpg'
import graphic26 from '../../assets/graphic/img26.png'
import what7 from '../../assets/graphic/what7.jpg'
import what11 from '../../assets/graphic/what11.jpg'
import whatNew from '../../assets/graphic/whatnew.jpg'

type Design = {
  title: string
  description: string
  image: string
  link?: string
}

const graphicDesigns: Design[] = [
  { title: 'Burger Post', description: 'Bold and spicy food campaign', image: graphic1 },
  { title: 'Chicken Post Design', description: 'Promotional food artwork', image: graphic2 },
  { title: 'Rent a Car Poster', description: 'Modern automotive campaign', image: whatNew },
  { title: 'Burger Poster', description: 'A deliciously bold burger ad', image: what7 },
  { title: 'Flyer Mockup', description: 'Clean, contemporary print design', image: what11 },
  { title: 'Orange Poster', description: 'Bright fruit advertisement', image: graphic3 },
  { title: 'Furniture Post Design', description: 'Furniture advertisement', image: graphic4 },
  { title: 'Class Post', description: 'Education campaign artwork', image: graphic6 },
  { title: 'Car Poster', description: 'A polished automotive ad', image: graphic7 },
  { title: 'Spring Rolls', description: 'Fresh food campaign', image: graphic8 },
  { title: 'Yummy Burger Poster', description: 'An appetizing burger ad', image: graphic9 },
  { title: 'Acer Aspire Laptop', description: 'Technology product advertisement', image: graphic10 },
  { title: 'Ice Cream Post', description: 'Playful dessert campaign', image: graphic11 },
  { title: 'Chicken Burger Poster', description: 'Fresh, bold and unforgettable', image: graphic12 },
  { title: 'Cannon Printer Advertisement', description: 'Product advertising concept', image: graphic13 },
  { title: 'iPhone Post', description: 'Mobile product advertisement', image: graphic15 },
  { title: 'AMS Solutions Web Ad', description: 'Digital service promotion', image: graphic17 },
  { title: 'Maths Tuition Class', description: 'Education advertisement', image: graphic21 },
  { title: 'Jeep Poster Design', description: 'Automotive campaign concept', image: graphic23 },
  { title: 'ASF Gutter', description: 'Business card design', image: graphic24 },
  { title: 'Business Studies', description: 'Education campaign artwork', image: graphic25 },
  { title: 'Illustrator Bird Post', description: 'Illustration and poster design', image: graphic26 },
]

const uiUxDesigns: Design[] = [
  {
    title: 'PlantHaven Indoor Plants',
    description: 'Indoor plant e-commerce website design',
    image: ui1,
    link: 'https://www.behance.net/gallery/230470455/PlantHaven-Indoor-Plant-E-commerce-Web-Design',
  },
  {
    title: 'Modern Furniture App',
    description: 'Mobile furniture shopping experience',
    image: ui2,
    link: 'https://www.behance.net/gallery/229221837/Modern-Furniture-App-UI-Design',
  },
  {
    title: 'Secret Notes Perfume',
    description: 'Luxury fragrance e-commerce concept',
    image: ui3,
    link: 'https://www.behance.net/gallery/228687623/Secret-Notes-Luxury-Perfume-Online-Store-Design',
  },
  {
    title: 'Coffee Haven',
    description: 'Warm, inviting coffee shop website',
    image: ui4,
    link: 'https://www.behance.net/gallery/231418857/Coffee-Haven-Web-Design-Concept',
  },
  {
    title: 'Explore Sri Lanka',
    description: 'Travel experience UI/UX case study',
    image: ui5,
    link: 'https://www.behance.net/gallery/231695447/Explore-Sri-Lanka-(Case-Study)-UIUX-Design',
  },
  {
    title: 'Furniture Shopping App',
    description: 'Mobile app UI/UX case study',
    image: ui6,
    link: 'https://www.behance.net/gallery/253923375/Modern-Furniture-Shopping-App-UIUX-Case-Study',
  },
]

type DesignCardProps = {
  design: Design
  index: number
  imageFit?: 'cover' | 'contain'
}

const DesignCard = ({ design, index, imageFit = 'cover' }: DesignCardProps) => {
  const reveal = useScrollReveal<HTMLElement>()

  return (
    <article
      ref={reveal.ref}
      className={`${reveal.className} design-card`}
      style={{ transitionDelay: `${Math.min(index, 10) * 35}ms` }}
    >
      <Dialog>
        <DialogTrigger asChild>
          <button
            className="design-image-trigger"
            type="button"
            aria-label={`Preview ${design.title}`}
            onContextMenu={(event) => event.preventDefault()}
          >
            <img
              className={`design-image${imageFit === 'contain' ? ' design-image-contain' : ''}`}
              src={design.image}
              alt={design.title}
              loading="lazy"
              decoding="async"
              draggable={false}
              onContextMenu={(event) => event.preventDefault()}
            />
            <span className="image-hint" aria-hidden="true">
              <Maximize2 size={16} />
            </span>
            <span className="image-credit">Shareena Faleel</span>
          </button>
        </DialogTrigger>
        <DialogContent className="preview-dialog">
          <DialogTitle className="sr-only">{design.title} preview</DialogTitle>
          <img
            className={imageFit === 'contain' ? 'preview-image-contain' : undefined}
            src={design.image}
            alt={design.title}
            draggable={false}
            onContextMenu={(event) => event.preventDefault()}
          />
        </DialogContent>
      </Dialog>
      <div className="design-caption">
        <h3>{design.title}</h3>
        <p>{design.description}</p>
        {design.link && (
          <a
            className="behance-link"
            href={design.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View case study <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        )}
      </div>
    </article>
  )
}

const Designs = () => (
  <section className="designs-section" id="designs" aria-labelledby="designs-title">
    <div className="section-heading designs-heading">
      <div>
        <p className="eyebrow">A few things I’ve made</p>
        <h2 id="designs-title">Selected work</h2>
        <p>Browse visual design projects and digital experiences.</p>
      </div>
      <span className="design-count">{graphicDesigns.length + uiUxDesigns.length} projects</span>
    </div>

    <Tabs defaultValue="graphic" className="gallery-tabs">
      <TabsList className="gallery-tab-list" aria-label="Portfolio categories">
        <TabsTrigger className="gallery-tab" value="graphic">
          <Image aria-hidden="true" size={17} />
          Graphic design
        </TabsTrigger>
        <TabsTrigger className="gallery-tab" value="uiux">
          <LayoutTemplate aria-hidden="true" size={17} />
          UI/UX design
        </TabsTrigger>
      </TabsList>

      <TabsContent className="gallery-content" value="graphic">
        <div className="design-grid">
          {graphicDesigns.map((design, index) => (
            <DesignCard key={design.title} design={design} index={index} />
          ))}
        </div>
      </TabsContent>

      <TabsContent className="gallery-content" value="uiux">
        <div className="design-grid">
          {uiUxDesigns.map((design, index) => (
            <DesignCard key={design.title} design={design} index={index} imageFit="contain" />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  </section>
)

export default Designs
