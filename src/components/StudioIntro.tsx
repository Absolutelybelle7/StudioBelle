import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import logo from '../assets/images/My Logo (1).png'

export default function StudioIntro() {
  return (
    <section id="intro" className="studio-intro" aria-label="StudioBelle introduction">
      <div className="intro-grain" />
      <motion.div
        className="intro-orbit intro-orbit-one"
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="intro-orbit intro-orbit-two"
        animate={{ rotate: -360 }}
        transition={{ duration: 64, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="intro-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        
        <img className="intro-logo" src={logo} alt="StudioBelle" />
        <p className="intro-tagline">Thoughtful digital experiences,<br />made to <em>move</em> people.</p>
        <a className="intro-enter" href="#hero">
        
        </a>
      </motion.div>


     
    </section>
  )
}
