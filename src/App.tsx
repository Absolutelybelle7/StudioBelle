import { useEffect, useState } from 'react'
import { MotionConfig, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {
  AboutPage,
  ConsultationPage,
  ContactPage,
  FaqPage,
  HomePage,
  PackagesPage,
  PortfolioPage,
  ProjectPage,
  ReservePage,
} from './pages/Pages'

function getPage(pathname: string) {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (path === '/') return <HomePage />
  if (path === '/about') return <AboutPage />
  if (path === '/services' || path === '/packages') return <PackagesPage />
  if (path === '/portfolio') return <PortfolioPage />
  if (path === '/consultation') return <ConsultationPage />
  if (path === '/contact') return <ContactPage />
  if (path === '/reserve') return <ReservePage />
  if (path === '/faq' || path === '/faqs') return <FaqPage />
  if (path.startsWith('/portfolio/')) return <ProjectPage slug={path.slice('/portfolio/'.length)} />
  return <ProjectPage slug="not-found" />
}

export default function App() {
  const [progress, setProgress] = useState(0)
  const pathname = window.location.pathname
  const page = getPage(pathname)

  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/'
    const titles: Record<string, string> = {
      '/': 'StudioBelle — Thoughtful digital experiences',
      '/about': 'About the Studio — StudioBelle',
      '/services': 'Packages & Expertise — StudioBelle',
      '/packages': 'Packages & Expertise — StudioBelle',
      '/portfolio': 'Selected Work — StudioBelle',
      '/consultation': 'Start a Conversation — StudioBelle',
      '/contact': 'Ask a Question — StudioBelle',
      '/reserve': 'Plan Your Project — StudioBelle',
      '/faq': 'Frequently Asked Questions — StudioBelle',
      '/faqs': 'Frequently Asked Questions — StudioBelle',
    }
    document.title = titles[path] ?? (path.startsWith('/portfolio/') ? 'Project Details — StudioBelle' : 'Page Not Found — StudioBelle')
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? Math.min(100, Math.max(0, (window.scrollY / total) * 100)) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="scroll-progress" style={{ width: `${progress}%` }} />
      <Navbar />
      <main key={pathname}>{page}</main>
      <Footer />
    </MotionConfig>
  )
}
