import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import profileImage from '../../assets/shareena2.jpg'

const Profile = () => (
  <section className="profile-section" id="profile" aria-labelledby="profile-name">
    <article className="profile-card">
      <div className="profile-cover" role="img" aria-label="Portfolio cover featuring a plant shop web design">
        <span className="cover-copy">Selected work · 2025—26</span>
      </div>
      <div className="profile-body">
        <div className="profile-identity">
          <img className="profile-avatar" src={profileImage} alt="Shareena Faleel" />
          <div className="profile-heading">
            <p className="eyebrow">Designer & visual storyteller</p>
            <h1 id="profile-name">Shareena Faleel</h1>
            <p className="profile-role">Graphic designer · UI/UX designer</p>
          </div>
        </div>
        <div className="profile-actions">
          <a className="action-link action-link-primary" href="mailto:shareenafaleel37@gmail.com">
            <Mail aria-hidden="true" size={16} />
            Get in touch
          </a>
          <a
            className="action-link action-link-whatsapp"
            href="https://wa.me/94786097763?text=Hello%20Shareena%2C%20I%20would%20like%20to%20discuss%20a%20design%20project."
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle aria-hidden="true" size={16} />
            WhatsApp
          </a>
          <a
            className="action-link"
            href="https://www.behance.net/shareenafaleel"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Behance <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </div>
      <div className="profile-divider" />
      <div className="profile-details">
        <div>
          <h2>A little about me</h2>
          <p>
            I create thoughtful visual identities, engaging graphics, and clear digital
            experiences. I love turning ideas into polished, user-friendly designs through
            a considered mix of creativity and detail.
          </p>
        </div>
        <div className="profile-contact" aria-label="Contact details">
          <a href="mailto:shareenafaleel37@gmail.com">
            <Mail aria-hidden="true" size={17} />
            <span>shareenafaleel37@gmail.com</span>
          </a>
          <a href="tel:+94786097763">
            <Phone aria-hidden="true" size={17} />
            <span>+94 78 609 7763</span>
          </a>
          <span className="profile-location">
            <MapPin aria-hidden="true" size={17} />
            <span>Sri Lanka</span>
          </span>
        </div>
      </div>
    </article>
  </section>
)

export default Profile
