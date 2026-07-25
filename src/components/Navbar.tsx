import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logoImg from '../assets/images/My Logo (2).png'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = links.map(l => l.href.slice(1))
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id)
            return
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        background: scrolled ? 'rgba(29, 14, 39, 0.22)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.3s, border-color 0.3s',
        
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: '1.1rem', marginLeft: -8 }}>
          <img
            src={logoImg}
            alt="StudioBelle logo"
            style={{ width: 100, height: 150, objectFit: 'contain', borderRadius: 12, display: 'block' }}
          />
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div className="nav-links" style={{ display: 'flex', gap: 28 }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontSize: '0.92rem',
                  color: scrolled ? '#000' : '#fff',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = scrolled ? '#000' : '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = scrolled ? '#000' : '#fff')}
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            style={{
              padding: '10px 22px',
              borderRadius: 999,
              background: 'var(--primary)',
              color: 'var(--bg)',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px var(--primary-glow)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            Let's Talk
          </a>
          <button className="nav-toggle" onClick={() => setOpen(!open)} style={{ display: 'none' }}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden', background: 'var(--bg-elev)', borderBottom: '1px solid var(--border)' }}
          >
            <div className="container" style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  style={{ color: scrolled ? '#000' : '#fff', fontWeight: 500 }}>
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-toggle { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}
