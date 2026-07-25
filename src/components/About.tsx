import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 10, suffix: '+', label: 'Projects Delivered' },
  { value: 10, suffix: '+', label: 'Happy Clients' },
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
]

function useCountUp(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start: number | null = null
    let frame: number
    const step = (ts: number) => {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, duration])
  return count
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true)
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="about-grid">
          <div>
            <div className="section-label">About Me</div>
            <h2 className="section-title">Turning ideas into<br />polished products.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: 20, lineHeight: 1.7 }}>
              I specialize in building end-to-end web applications — from pixel-perfect frontends to scalable backend systems. My approach combines clean code, thoughtful design, and a relentless focus on performance.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: 32, lineHeight: 1.7 }}>
              Beyond writing code, I’m constantly learning, experimenting with new technologies,
               and turning ideas into knowledge through my passion for web development.
            </p>

           
          </div>

          <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  padding: 32, borderRadius: 16, background: 'var(--bg-card)',
                  border: '1px solid var(--border)', textAlign: 'center',
                  transition: 'border-color 0.3s, transform 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary)' }}>
                  {useCountUp(s.value, inView)}{s.suffix}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
