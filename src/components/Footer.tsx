import { Github, Linkedin, Camera, ArrowUp } from 'lucide-react'
import logo from '../assets/images/My Logo (1).png'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '40px 0', background: 'var(--bg-elev)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <img src={logo} alt="StudioBelle Logo" style={{ height: 140 }} />
          <div style={{ display: 'flex', gap: 24, fontSize: '0.88rem', color: 'var(--text-muted)' }} className="footer-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Packages</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/faq">FAQ</a>
            <a href="/contact">Ask a question</a>
            <a href="/reserve">Project estimate</a>
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            {[
              { Icon: Github, href: 'https://github.com/Absolutelybelle7' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/christabelle-adansi-bonnah-77b095296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
              { Icon: Camera, href: 'https://snapchat.com/t/2RmbYDIn' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'grid', placeItems: 'center', width: 38, height: 38, borderRadius: 10,
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <item.Icon size={17} color="var(--text-muted)" />
              </a>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: 30, paddingTop: 24, borderTop: '1px solid var(--border)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
            © {new Date().getFullYear()} StudioBelle. All rights reserved.
          </p>
          <a href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.82rem', color: 'var(--text-muted)',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            Back to home <ArrowUp size={14} />
          </a>
        </div>
      </div>

    </footer>
  )
}
