import {
  AppWindow,
  Blend,
  Code2,
  Component,
  Figma,
  Image,
  PenTool,
  Shapes,
} from 'lucide-react'
import { useScrollReveal } from '@/lib/use-scroll-reveal'

const skills = [
  { name: 'Adobe Photoshop', icon: Image },
  { name: 'Adobe Illustrator', icon: PenTool },
  { name: 'Figma', icon: Figma },
  { name: 'Canva', icon: Blend },
  { name: 'UI/UX design', icon: Component },
  { name: 'Web design', icon: AppWindow },
  { name: 'Visual identity', icon: Shapes },
  { name: 'Frontend basics', icon: Code2 },
]

const SkillCard = ({ name, icon: Icon, index }: (typeof skills)[number] & { index: number }) => {
  const reveal = useScrollReveal<HTMLElement>()

  return (
    <article
      ref={reveal.ref}
      className={`${reveal.className} skill-card`}
      style={{ transitionDelay: `${index * 45}ms` }}
    >
      <span className="skill-icon">
        <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
      </span>
      <h3>{name}</h3>
    </article>
  )
}

const Skills = () => (
  <section className="skills-section" id="skills" aria-labelledby="skills-title">
    <div className="section-heading">
      <div>
        <p className="eyebrow">What I bring</p>
        <h2 id="skills-title">Skills & tools</h2>
        <p>A blend of creative craft and digital design thinking.</p>
      </div>
    </div>
    <div className="skill-grid">
      {skills.map(({ name, icon: Icon }, index) => (
        <SkillCard key={name} name={name} icon={Icon} index={index} />
      ))}
    </div>
  </section>
)

export default Skills
