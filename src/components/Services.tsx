import { motion } from 'framer-motion'
import { Code2, Layout, Server, Smartphone, Check, Megaphone } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Crafting responsive, accessible, and performant user interfaces with React, Typescript, and modern CSS.',
    features: ['Responsive design', 'Accessibility', 'Performance optimization', 'Design system integration'],
  },
 
  {
    icon: Smartphone,
    title: 'Progressive Web Apps',
    description: 'Creating installable, offline-capable web apps that work seamlessly across all devices.',
    features: ['Offline support', 'Push notifications', 'App-like experience', 'Cross-platform'],
  },
 

   {
    icon: Megaphone,
    title: 'Digital Solutions',
    description: 'Planning and running digital campaigns that get brands in front of the right audience.',
    features: ['Social media ads', 'Snap ads', 'Content Creation', 'SEO Optimization'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: 'var(--bg-elev)' }}>
      <div className="container">

        <h2 className="section-title">Services I offer.</h2>
        <p className="section-subtitle">From concept to deployment, I provide end-to-end web development services.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: 32, borderRadius: 16, background: 'var(--bg-card)',
                border: '1px solid var(--border)', position: 'relative', overflow: 'hidden',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-6px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{
                position: 'absolute', top: -40, right: -40, width: 120, height: 120, borderRadius: '50%',
                background: 'var(--primary-glow)', filter: 'blur(40px)', opacity: 0,
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0'}
              />
              <div style={{
                display: 'grid', placeItems: 'center', width: 52, height: 52, borderRadius: 14,
                background: 'var(--surface)', border: '1px solid var(--border)', marginBottom: 20,
              }}>
                <s.icon size={24} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 20, lineHeight: 1.6 }}>{s.description}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {s.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{
                      display: 'grid', placeItems: 'center', width: 18, height: 18, borderRadius: '50%',
                      background: 'var(--primary-glow)', flexShrink: 0,
                    }}>
                      <Check size={12} color="var(--primary)" strokeWidth={3} />
                    </span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
