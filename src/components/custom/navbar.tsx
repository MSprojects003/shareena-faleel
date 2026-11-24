import { Download, Folder, Moon, Paintbrush, Sun, UserRound } from 'lucide-react'
import cv from '../../assets/cv/FATHIMA SHAREENA new 1 (1).pdf'

type NavbarProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const Navbar = ({ theme, onToggleTheme }: NavbarProps) => (
  <nav className="site-nav" aria-label="Main navigation">
    <a className="nav-brand" href="#profile" aria-label="Shareena Faleel, home">
      SF<span>.</span>
    </a>
    <div className="nav-links">
      <a className="nav-link" href="#profile" aria-label="Profile">
        <UserRound aria-hidden="true" size={16} />
        <span>Profile</span>
      </a>
      <a className="nav-link" href="#skills" aria-label="Skills">
        <Paintbrush aria-hidden="true" size={16} />
        <span>Skills</span>
      </a>
      <a className="nav-link" href="#designs" aria-label="Work">
        <Folder aria-hidden="true" size={16} />
        <span>Work</span>
      </a>
      <a
        className="nav-link nav-link-resume"
        href={cv}
        download="Shareena_Faleel.pdf"
        aria-label="Download resume"
      >
        <Download aria-hidden="true" size={15} />
        <span>Resume</span>
      </a>
      <button
        className="nav-link nav-theme"
        type="button"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        aria-pressed={theme === 'dark'}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        {theme === 'light' ? <Moon aria-hidden="true" size={16} /> : <Sun aria-hidden="true" size={16} />}
        <span>{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
      </button>
    </div>
  </nav>
)

export default Navbar
