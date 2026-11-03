import { motion, useInView } from 'framer-motion'
import { Camera, Clapperboard, Laptop, ShoppingBag, Smartphone, type LucideIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 10, suffix: '+', label: 'Happy Clients' },
  { value: 10, suffix: '+', label: 'Projects Delivered' },
  { value: 4, suffix: '+', label: 'Years Experience' },
]

const offerings: {
  title: string
  description: string
  icon: LucideIcon
}[] = [
  {
    icon: Laptop,
    title: 'Web Development',
    description: 'Custom, high-converting websites tailored to your brand.',
  },
  {
    icon:  Camera,
    title: 'Website Design',
    description: 'High-quality images that showcase your products in the best light.',
  },
  {
    icon:ShoppingBag,
    title: 'E-Commerce Solutions',
    description: 'Full setup, product upload, and seamless functionality.',
  },
  {
    icon: Clapperboard,
    title: 'Social Media Ads',
    description: 'Boost your brand visibility and drive engagement with targeted ads.',
  },
  {
    icon: Smartphone,
    title: 'Progressive Web Apps',
    description: 'Fast, reliable, and engaging web apps that work offline and on any device.',
  },
]

function useCountUp(target: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start: number | null = null
    let frame = 0
    const step = (ts: number) => {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, duration])

  return count
}

function StatValue({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const count = useCountUp(value, inView)
  return (
    <>
      {count}
      {suffix}
    </>
  )
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section id="about" ref={sectionRef} className="about-silk" aria-labelledby="about-heading">
      <svg className="about-silk-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="silk-base" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f6efe8" />
            <stop offset="35%" stopColor="#e7d4d0" />
            <stop offset="62%" stopColor="#c9b0bb" />
            <stop offset="100%" stopColor="#efe6df" />
          </linearGradient>
          <linearGradient id="silk-fold" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fbf6f1" stopOpacity="0" />
            <stop offset="28%" stopColor="#f3e4dc" stopOpacity="0.9" />
            <stop offset="48%" stopColor="#8d6a86" stopOpacity="0.38" />
            <stop offset="68%" stopColor="#f7eee8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#59396a" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="silk-deep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#59396a" stopOpacity="0" />
            <stop offset="40%" stopColor="#5c3a69" stopOpacity="0.28" />
            <stop offset="55%" stopColor="#f4e6df" stopOpacity="0.55" />
            <stop offset="78%" stopColor="#c9957d" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#f7f5f0" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="icon-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d8b4a4" />
            <stop offset="45%" stopColor="#59396a" />
            <stop offset="100%" stopColor="#c9957d" />
          </linearGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#silk-base)" />
        <path className="silk-path silk-path-a" d="M-80,210 C180,40 380,390 640,250 C900,110 1120,360 1520,180 L1520,900 L-80,900 Z" fill="url(#silk-fold)" />
        <path className="silk-path silk-path-b" d="M-80,430 C220,260 460,620 760,430 C1060,240 1240,560 1520,390 L1520,900 L-80,900 Z" fill="url(#silk-deep)" />
        <path className="silk-path silk-path-c" d="M-80,560 C260,470 520,760 820,560 C1120,360 1280,700 1520,540 L1520,900 L-80,900 Z" fill="url(#silk-fold)" opacity="0.7" />
      </svg>

      <div className="container about-silk-inner">
        <motion.div
          className="about-stats-pill"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4, margin: '80px 0px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="about-stat">
              {i > 0 && <span className="about-stat-diamond" aria-hidden="true" />}
              <div>
                <p className="about-stat-value">
                  <StatValue value={stat.value} suffix={stat.suffix} inView={inView} />
                </p>
                <p className="about-stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="about-kicker"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          What we do
        </motion.p>

        <motion.h2
          id="about-heading"
          className="about-headline"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          More Than Just Websites.
          <em>We Build Brands.</em>
        </motion.h2>

        <div className="about-offerings">
          {offerings.map((item, i) => (
            <motion.article
              key={item.title}
              className="about-offering"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 280, damping: 18 } }}
            >
              <motion.div
                className="about-offering-icon"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.4 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.18 }}
              >
                <item.icon size={44} strokeWidth={1.3} />
              </motion.div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
