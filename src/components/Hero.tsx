import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin,Camera } from 'lucide-react'
import backImg from '../assets/images/paper.jpg'

const socialLinks = [
  { Icon: Github, href: 'https://github.com/Absolutelybelle7' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/christabelle-adansi-bonnah-77b095296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { Icon: Camera, href: 'https://snapchat.com/t/2RmbYDIn' },
]
export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        textAlign: 'left',
        color: '#070707',
        backgroundImage: `url(${backImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.14) 45%, rgba(255,255,255,0.06) 100%)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 760,
          padding: '0 24px',
          marginLeft: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 500,
            lineHeight: 1.1,
            marginBottom: 24,
            marginTop: 38,
          }}
        >
          Building digital
          <br />
          experiences that
          <br />
          <span style={{ color: 'var(--primary)' }}>feel alive.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            maxWidth: 640,
            margin: '0 0 40px',
            fontSize: '1.05rem',
            fontWeight: 700,
            color: 'rgba(1, 1, 1, 0.88)',
            lineHeight: 1.8,
          }}
        >
          I'm Christabelle, a software developer passionate about building modern, responsive,
           and high-performing websites and web applications that help businesses grow..
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 16,
            flexWrap: 'wrap',
            marginBottom: 40,
          }}
        >
          <a
            href="#work"
            style={{
              padding: '14px 34px',
              borderRadius: 999,
              background: 'var(--primary)',
              color: 'var(--bg)',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            View My Work
            <ArrowDown size={18} />
          </a>

          <a
            href="#contact"
            style={{
              padding: '14px 34px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.75)',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          {socialLinks.map(({Icon, href}, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                display: 'grid',
                placeItems: 'center',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.22)',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              <Icon size={18} />
            </a>
          ))}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#fff',
          zIndex: 2,
        }}
      >
        <ArrowDown size={26} />
      </motion.a>
    </section>
  )
}
