import { motion } from 'framer-motion'
import { Check, Layout, Megaphone, Smartphone, type LucideIcon } from 'lucide-react'

const services: {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}[] = [
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
    <section id="services" className="services-silk" aria-labelledby="services-heading">
      <svg className="about-silk-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="services-silk-base" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f6efe8" />
            <stop offset="35%" stopColor="#e7d4d0" />
            <stop offset="62%" stopColor="#c9b0bb" />
            <stop offset="100%" stopColor="#efe6df" />
          </linearGradient>
          <linearGradient id="services-silk-fold" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fbf6f1" stopOpacity="0" />
            <stop offset="28%" stopColor="#f3e4dc" stopOpacity="0.9" />
            <stop offset="48%" stopColor="#8d6a86" stopOpacity="0.38" />
            <stop offset="68%" stopColor="#f7eee8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#59396a" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="services-silk-deep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#59396a" stopOpacity="0" />
            <stop offset="40%" stopColor="#5c3a69" stopOpacity="0.28" />
            <stop offset="55%" stopColor="#f4e6df" stopOpacity="0.55" />
            <stop offset="78%" stopColor="#c9957d" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#f7f5f0" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#services-silk-base)" />
        <path className="silk-path silk-path-a" d="M-80,210 C180,40 380,390 640,250 C900,110 1120,360 1520,180 L1520,900 L-80,900 Z" fill="url(#services-silk-fold)" />
        <path className="silk-path silk-path-b" d="M-80,430 C220,260 460,620 760,430 C1060,240 1240,560 1520,390 L1520,900 L-80,900 Z" fill="url(#services-silk-deep)" />
        <path className="silk-path silk-path-c" d="M-80,560 C260,470 520,760 820,560 C1120,360 1280,700 1520,540 L1520,900 L-80,900 Z" fill="url(#services-silk-fold)" opacity="0.7" />
      </svg>

      <div className="container services-silk-inner">
        <motion.p
          className="about-kicker"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          What I offer
        </motion.p>

        <motion.h2
          id="services-heading"
          className="about-headline services-headline"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          Thoughtful Digital Services.
          <em>Built Around You.</em>
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 280, damping: 18 } }}
            >
              <motion.div
                className="service-card-icon"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.2 + index * 0.35, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
              >
                <service.icon size={34} strokeWidth={1.5} />
              </motion.div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul>
                {service.features.map(feature => (
                  <li key={feature}>
                    <span className="service-check" aria-hidden="true">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
