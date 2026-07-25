import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import ecommerceImg from '../assets/images/ecommerce.png'
import NGOImg from '../assets/images/NGO.png'
import schImg from '../assets/images/school.png'
import restaurantImg from '../assets/images/restaurant.png'
import shipImg from '../assets/images/shipping.png'
import hotelImg from '../assets/images/hotel.png'


const projects = [
  {
    title: 'E-commerce',
    category: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with Stripe payments, inventory, and order management.',
    tags: ['React', 'TypeScript', 'Supabase', 'Stripe'],
    image: ecommerceImg,
    link: 'https://ecommerce.studio-belle.com/',
  },
  {
    title: 'Mass Love Foundation',
    category: 'NGO Website',
    description: 'A website for non-profit organizations to showcase their work and raise funds.',
    tags: ['React', 'Node.js', 'Typescript', 'Supabase'],
    image: NGOImg,
    link: 'https://mass-love-foundation.vercel.app/',
    featured: true,
  },
  {
    title: 'School Website',
    category: 'Educational Website',
    description: 'A website for schools to manage student records and information.',
    tags: ['React', 'Typescript', 'Firebase', 'Tailwind CSS'],
    image: schImg,
    link: 'https://adinkra-heritage.vercel.app/',
    featured: false,
  },
  {
    title: 'La Date Restaurant',
    category: 'Restaurant Website',
    description: 'A website for a restaurant to manage reservations and orders.',
    tags: ['Typescript', 'Stripe', 'Supabase'],
    image: restaurantImg,
    link: 'https://la-date.vercel.app/',
    featured: false,
  },
  {
    title: 'Shipping Company',
    category: 'Web Application',
    description: 'A web application for shipping companies to manage orders and track packages.',
    tags: ['React', 'Node.js', 'Firebase'],
    image: shipImg,
    link: 'https://royalton-shipping.vercel.app/',
    featured: false,
  },
  {
    title: 'Lotus Hotel',
    category: 'Hotel Website',
    description: 'A website for hotels to manage reservations and bookings.',
    tags: ['React', 'Node.js', 'Firebase', 'Typescript'],
    image: hotelImg,
    link: 'https://lotushotel.vercel.app/',
    featured: false,
  },
]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

  return (
    <section id="work" className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 50 }}>
          <div>
            <div className="section-label">Selected Work</div>
            <h2 className="section-title">Projects I've built.</h2>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '8px 16px', borderRadius: 999, fontSize: '0.85rem',
                  background: filter === cat ? 'var(--primary)' : 'var(--surface)',
                  color: filter === cat ? 'var(--bg)' : 'var(--text-muted)',
                  border: '1px solid', borderColor: filter === cat ? 'var(--primary)' : 'var(--border)',
                  transition: 'all 0.2s', fontWeight: 500,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {projects.filter(p => filter === 'All' || p.category === filter).map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              style={{
                borderRadius: 16, overflow: 'hidden', background: 'var(--bg-card)',
                border: '1px solid var(--border)', position: 'relative',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-6px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{ position: 'relative', height: 220, overflow: 'hidden', background: 'var(--surface)' }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block', transition: 'transform 0.5s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, var(--bg-card) 100%)' }} />
                {p.featured && (
                  <span style={{
                    position: 'absolute', top: 12, right: 12, padding: '4px 12px', borderRadius: 999,
                    background: 'var(--primary)', color: 'var(--bg)', fontSize: '0.7rem', fontWeight: 600,
                  }}>
                    Featured
                  </span>
                )}
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--primary)', marginBottom: 4 }}>{p.category}</div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{p.title}</h3>
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'grid', placeItems: 'center', width: 36, height: 36, borderRadius: 10,
                      background: 'var(--surface)', border: '1px solid var(--border)',
                      transition: 'background 0.2s, border-color 0.2s', flexShrink: 0,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.borderColor = 'var(--primary)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.borderColor = 'var(--border)' }}
                  >
                    <ArrowUpRight size={16} style={{ color: 'var(--text-muted)' }} />
                  </a>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 16, lineHeight: 1.6 }}>{p.description}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      padding: '4px 10px', borderRadius: 6, background: 'var(--surface)',
                      fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 50 }}>
          <a href="https://github.com/Absolutelybelle7" target="_blank" rel="noopener noreferrer" aria-label="View more on GitHub (opens in a new tab)" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px',
            borderRadius: 999, border: '1px solid var(--border-light)', fontWeight: 500, fontSize: '0.95rem',
            transition: 'border-color 0.2s, background 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.background = 'var(--surface)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.background = 'transparent' }}
          >
            <Github size={18} /> View more on GitHub <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
