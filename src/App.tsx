import { useEffect, useState } from 'react'
import { ArrowUpRight, Heart } from 'lucide-react'
import './App.css'
import Designs from './components/custom/Designs'
import Navbar from './components/custom/navbar'
import Profile from './components/custom/Profile'
import Skills from './components/custom/Skills'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <div className="portfolio-shell">
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      <main>
        <Profile />
        <Skills />
        <Designs />
      </main>
      <footer className="site-footer">
        <a className="footer-brand" href="#profile">SF<span>.</span></a>
        <p>Thoughtful design, made with care.</p>
        <a className="footer-top" href="#profile">
          Back to top <ArrowUpRight size={15} />
        </a>
        <small>© {new Date().getFullYear()} Shareena Faleel · Made with <Heart size={12} fill="currentColor" /></small>
      </footer>
    </div>
  )
}

export default App
