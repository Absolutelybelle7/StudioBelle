
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import bg from '../assets/images/mockup bg copy.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section hero-full-bg"
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <motion.div
        className="hero-content container"
        initial={{ opacity: 0, x: -28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.25,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Building the
          <br />
          <span className="hero-serif">web, with</span>
          <br />
          <span className="hero-accent">intention.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.65 }}
        >
          I’m Christabelle — a developer and digital creative
          turning ambitious ideas into considered, memorable
          experiences for the screen.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          <motion.a
            className="button button-dark"
            href="#work"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore selected work
            <ArrowUpRight size={17} />
          </motion.a>

          <motion.a
            className="hero-text-link"
            href="#about"
            whileHover={{ x: 4 }}
          >
            A little about me
            <ArrowDownRight size={16} />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.a
        className="hero-scroll"
        href="#about"
        aria-label="Scroll to about section"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDownRight size={19} />
      </motion.a>
    </section>
  )
}
