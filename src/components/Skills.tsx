import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import experienceBg from '../assets/images/experience.jpg'
import nodeImg from '../assets/images/node.jpg'
import tsImg from '../assets/images/ts.jpg'
import exImg from '../assets/images/ejs.jpg'
import supImg from '../assets/images/sb.jpg'
import jsImg from '../assets/images/js.jpg'
import cssImg from '../assets/images/css.jpg'
import htImg from '../assets/images/html.jpg'
import twImg from '../assets/images/tailwind.jpg'
import reactImg from '../assets/images/react.jpg'
import figImg from '../assets/images/Figma.jpg'
import gitImg from '../assets/images/git.jpg'

const skills = [
  { name: 'React', level: 95, image: reactImg },
  { name: 'TypeScript', level: 92, image: tsImg },
  { name: 'Node.js / Express', level: 88, image: nodeImg },
  { name: 'Firebase / Supabase', level: 85, image: supImg },
  { name: 'UI/UX Design', level: 80, image: figImg },
]

const tools = [
  { name: 'React', image: reactImg },
  { name: 'TypeScript', image: tsImg },
  { name: 'Node.js', image: nodeImg },
  { name: 'Express', image: exImg },
  { name: 'Supabase', image: supImg },
  { name: 'Tailwind CSS', image: twImg },
  { name: 'Git', image: gitImg },
  { name: 'HTML', image: htImg },
  { name: 'CSS', image: cssImg },
  { name: 'JavaScript', image: jsImg },
  { name: 'Figma', image: figImg },
  { name: 'React', image: reactImg },
  { name: 'TypeScript', image: tsImg },
]

const experienceHighlights = [
  { label: 'Years of experience', value: '3+' },
  { label: 'Projects delivered', value: '10+' },
  { label: 'Happy clients', value: '12+' },
]

const marqueeItems = [...skills, ...tools]
const loopItems = [...marqueeItems, ...marqueeItems]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true)
    }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="section" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.55), rgba(233, 210, 208, 0.78))' }}>
      <div className="container">
        <div className="section-label">Skills & Experience</div>
        <h2 className="section-title">A focused toolkit for building products people enjoy using.</h2>
        <p className="section-subtitle">I blend thoughtful design, modern engineering, and product intuition to turn ideas into polished experiences.</p>
      </div>

      {/* Slow horizontal skills carousel */}
      <div
        ref={ref}
        style={{
          position: 'relative',
          marginTop: 48,
          padding: '28px 0',
          background: '#10151f',
          overflow: 'hidden',
        }}
      >
        <motion.div
          className="marquee-track"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', width: 'max-content' }}
        >
          {loopItems.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '0 36px',
                whiteSpace: 'nowrap',
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  color: 'var(--primary)',
                  flexShrink: 0,
                  overflow: 'hidden',
                }}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  />
                ) : item.image ? (
                  <img src={item.image} alt={item.name} />
                ) : null}
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>
                {item.name}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '1.4rem', marginLeft: 24 }}>—</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div
        style={{
          position: 'relative',
          minHeight: 420,
          marginTop: 0,
          backgroundImage: `url(${experienceBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'grayscale(0.15)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(10,14,22,0.15) 0%, rgba(10,14,22,0.75) 62%, rgba(10,14,22,0.9) 100%)',
          }}
        />

        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: 360, textAlign: 'right' }}
          >
            <div style={{ color: '#fff', fontSize: '1.6rem', fontWeight: 700, marginBottom: 16 }}>
              Experience snapshot
            </div>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 28 }}>
              A practical mix of strategy, design, and delivery — built through real projects, real clients, and real deadlines.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {experienceHighlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'baseline',
                    gap: 12,
                    borderBottom: '1px solid rgba(255,255,255,0.18)',
                    paddingBottom: 12,
                  }}
                >
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>{item.label}</span>
                  <span style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 700 }}>{item.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 45s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  )
}