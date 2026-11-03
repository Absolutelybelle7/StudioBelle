import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import logoImg from '../assets/images/My Logo (1).png'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Packages', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(window.location.pathname !== '/')
  const [open, setOpen] = useState(false)
  const isHome = window.location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(!isHome || window.scrollY > window.innerHeight * 0.72)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  return (
    <motion.header
      className={`site-header${scrolled ? ' is-scrolled' : ''}`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="nav-inner container" aria-label="Main navigation">
        <a className="nav-brand" href="/" aria-label="StudioBelle home">
          <img src={logoImg} alt="StudioBelle" />
          <span>STUDIO BELLE
          <small> DIGITAL SOLUTIONS</small>
          </span>
        </a>
        <div className="nav-links">
          {links.map(link => (
            <a key={link.href} href={link.href} aria-current={window.location.pathname === link.href ? 'page' : undefined}>
              {link.label}
            </a>
          ))}
        </div>
        <a className="nav-contact" href="/consultation">Let’s talk <ArrowUpRight size={15} /></a>
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {[...links, { label: 'Contact', href: '/consultation' }].map(link => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={16} /></a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
