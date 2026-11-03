import type { ReactNode } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, Sparkles } from 'lucide-react'
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Projects, { projects } from '../components/Projects'
import Services from '../components/Services'
import Skills from '../components/Skills'
import StudioIntro from '../components/StudioIntro'
import { packageCurrency, packages } from '../data/packages'

function PageHeading({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description: string }) {
  return (
    <section className="page-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{description}</p>
        </motion.div>

      </div>
    </section>
  )
}

function PageCta({ title, link = '/consultation', linkLabel = 'Let’s talk about it' }: { title: string; link?: string; linkLabel?: string }) {
  return (
    <section className="page-cta">
      <div className="container">
        <p>HAVE SOMETHING IN MIND?</p>
        <h2>{title}</h2>
        <a className="button button-dark" href={link}>{linkLabel}<ArrowUpRight size={17} /></a>
      </div>
    </section>
  )
}

export function HomePage() {
  return (
    <>
      <StudioIntro />
      <Hero />
      <section className="home-intro">
        <div className="container home-intro-grid">
          <div>
            <div className="section-label">A CREATIVE STUDIO WITH BIG IDEAS</div>
            <h2>Good work starts with <em>good questions.</em></h2>
          </div>
          <div>
            <p>StudioBelle is an independent digital studio creating purposeful websites and thoughtful experiences. From first sketch to final line of code, every detail has a reason to be here.</p>
            <a className="inline-link" href="/about">Get to know the studio <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>
      <Projects limit={3} heading="A few things I've made." />
      <PageCta title="Let’s make your next idea real." link="/reserve" linkLabel="Get a project estimate" />
    </>
  )
}

export function AboutPage() {
  return (
    <>
      <PageHeading
        eyebrow="About the studio"
        title={<>Small by design.<br /><em>Thoughtful by nature.</em></>}
        description="A little about the person, process, and point of view behind StudioBelle."
      />
      <About />
      <motion.section
        className="values-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.16 } },
        }}
      >
        <div className="container">
          <motion.h2
            className="section-title"
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
            }}
          >
            A good digital experience should feel as good as it works.
          </motion.h2>
          <div className="values-grid">
            {[
              ['01', 'People first', 'Useful, accessible experiences are built around the people who use them.'],
              ['02', 'Details matter', 'Careful typography, clear interactions, and fast load times all add up.'],
              ['03', 'Made to last', 'Thoughtful foundations give a product room to grow and change.'],
            ].map(([number, title, description]) => (
              <motion.article
                key={number}
                variants={{
                  hidden: { opacity: 0, y: 36, rotateX: 8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { type: 'spring', stiffness: 90, damping: 18 },
                  },
                }}
                whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
                whileTap={{ scale: 0.99 }}
                className="value-card"
              >
                <motion.span
                  variants={{
                    hidden: { opacity: 0, scale: 0.7, rotate: -18 },
                    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.45, delay: 0.16 } },
                  }}
                >
                  {number}
                </motion.span>
                <h3>{title}</h3><p>{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
      <Skills />
      <PageCta title="Have a good idea? Let's give it shape." />
    </>
  )
}

export function PackagesPage() {
  return (
    <>
      <PageHeading
        eyebrow="Packages & Expertise"
        title={<>The right kind of help<br /><em>for what’s next.</em></>}
        description="Flexible digital support from first idea through launch and beyond. Every project is scoped around your goals."
      />
      <Services />
      <PricingPackages />
      <section className="process-section">
        <div className="container">
          <div className="section-label">A clear, collaborative process</div>
          <h2 className="section-title">From first hello to launch day.</h2>
          <div className="process-grid">
            {[
              ['01', 'Discover', 'We talk through your goals, audience, and the details that matter most.'],
              ['02', 'Design & build', 'A considered visual direction becomes a responsive, working experience.'],
              ['03', 'Refine & launch', 'We test, polish, and get your project ready for the real world.'],
            ].map(([number, title, description]) => (
              <article className="process-step" key={number}>
                <span>{number}</span><div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCta title="Not sure which package fits? Let's talk." link="/reserve" linkLabel="Plan your project" />
    </>
  )
}

function PricingPackages() {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="section-label">Website packages · GHS</div>
        <h2 className="section-title">A useful starting point for your budget.</h2>
        <p className="section-subtitle">Choose a starting scope. If your needs fall between packages, the final proposal will be tailored to the work.</p>
        <div className="pricing-grid">
          {packages.map((plan, index) => (
            <motion.article key={plan.slug} className={`pricing-card${index === 1 ? ' pricing-featured' : ''}`} whileHover={{ y: -5 }}>
              {index === 1 && <span className="pricing-popular">MOST POPULAR</span>}
              <p className="pricing-name">{plan.name}</p>
              <p className="pricing-amount">{plan.priceLabel}{plan.price !== null && <span>{plan.slug === 'commerce' ? 'Starting estimate' : 'One-time estimate'}</span>}</p>
              <p className="pricing-description">{plan.description}</p>
              <p className="pricing-ideal"><strong>Good for:</strong> {plan.idealFor}</p>
              <p className="pricing-timeline"><strong>Typical timeline:</strong> {plan.timeline}</p>
              <ul>{plan.deliverables.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul>
              <a className="pricing-link" href={`/reserve?package=${plan.slug}`}>Choose this package <ArrowUpRight size={16} /></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PortfolioPage() {
  return (
    <>
      <PageHeading
        eyebrow="Selected work"
        title={<>Made with purpose.<br /><em>Built to connect.</em></>}
        description="A selection of digital projects designed and developed to solve real problems and make a lasting impression."
      />
      <Projects />
      <PageCta title="Your project could be next." link="/reserve" linkLabel="Plan a project like this" />
    </>
  )
}

export function ConsultationPage() {
  const query = new URLSearchParams(window.location.search)
  const selected = packages.find(plan => plan.slug === query.get('package'))
  const initialMessage = selected
    ? query.get('message') ?? `I'm interested in the ${selected.name}${selected.priceLabel ? ` (${selected.priceLabel})` : ''}. I'd like to discuss the scope and next steps.`
    : ''
  return (
    <>
      <PageHeading
        eyebrow="Book your consultation"
        title={<>Let’s talk about<br /><em>your vision.</em></>}
        description="Share a little about your project and the best way to reach you. A package selection is a starting point, not a booking or payment."
      />
      <section className="consultation-steps">
        <div className="container">
          {[
            ['01', 'Connect', 'Tell me about the project'],
            ['02', 'Your vision', 'We clarify the scope'],
            ['03', 'Next steps', 'Receive a written proposal'],
          ].map(([number, title, description], index) => (
            <div className={`consultation-step${index === 0 ? ' current' : ''}`} key={number}>
              <span>{number}</span><div><strong>{title}</strong><small>{description}</small></div>
            </div>
          ))}
        </div>
      </section>
      <Contact initialMessage={initialMessage} />
    </>
  )
}

export function ContactPage() {
  return (
    <>
      <PageHeading
        eyebrow="Ask a question"
        title={<>A quick question?<br /><em>I'm listening.</em></>}
        description="For a general enquiry, collaboration, or anything else, send a note and I’ll get back to you."
      />
      <Contact initialMessage={new URLSearchParams(window.location.search).get('message') ?? ''} />
    </>
  )
}

const faqItems = [
  {
    question: 'How do I choose the right package?',
    answer: 'Start with the pages and functionality you need. Essential suits a small informational site, Signature adds more tailored content and interaction, Online Store is for selling products, and custom application work is scoped separately. If you are unsure, send an enquiry and we can narrow it down.',
  },
  {
    question: 'Are the prices fixed?',
    answer: 'The displayed amounts are starting estimates in Ghana cedis. Your written proposal confirms the pages, features, revisions, timeline, and final cost before any work begins.',
  },
  {
    question: 'How long does a website take?',
    answer: 'A small business site often takes a few weeks once content and feedback are ready. Online stores and custom applications generally need longer. The package timelines are indicative and will be confirmed in the proposal.',
  },
  {
    question: 'What is not included in the package price?',
    answer: 'Unless a proposal explicitly includes them, domain registration, hosting, paid software, payment-provider transaction fees, professional photography, and copywriting are separate costs. Third-party fees are paid to the relevant provider.',
  },
  {
    question: 'What ongoing costs should I plan for?',
    answer: 'Domain and hosting renewals are recurring third-party costs and are not included unless your proposal says so. Prices vary by provider, domain extension, and hosting plan, so confirm current rates before purchasing. Maintenance is optional and separately scoped.',
  },
  {
    question: 'What do you need from me to get started?',
    answer: 'A short description of your goals, audience, required pages, examples you like, and any existing brand assets is a good start. You can provide final copy and images later according to the agreed project schedule.',
  },
  {
    question: 'Can you help after the website launches?',
    answer: 'Yes. Ongoing maintenance and updates can be scoped as a separate monthly service. The work and fee are agreed in writing so you know what support is covered.',
  },
  {
    question: 'Do you work with clients outside Accra?',
    answer: 'Yes. Projects can be discussed and delivered remotely. Meetings, feedback, and handover can be handled online.',
  },
]

export function FaqPage() {
  return (
    <>
      <PageHeading
        eyebrow="Good to know"
        title={<>Questions, meet<br /><em>clear answers.</em></>}
        description="A few helpful details about pricing, timelines, and working together."
      />
      <section className="faq-section">
        <div className="container">
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details className="faq-item" key={item.question} open={index === 0}>
                <summary><span>{item.question}</span><ChevronDown size={19} /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <PageCta title="Still have a question? Send a note." link="/contact" linkLabel="Ask a question" />
    </>
  )
}

export function ReservePage() {
  const initialSlug = new URLSearchParams(window.location.search).get('package') ?? packages[0].slug
  const [selectedSlug, setSelectedSlug] = useState(
    packages.some(plan => plan.slug === initialSlug) ? initialSlug : packages[0].slug,
  )
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const plan = packages.find(item => item.slug === selectedSlug) ?? packages[0]
  const addOns = [
    { slug: 'copywriting', title: 'Website copywriting support', price: 800, cadence: 'one-time' },
    { slug: 'catalogue', title: 'Extra product catalogue setup', price: 600, cadence: 'one-time' },
    { slug: 'maintenance', title: 'Ongoing maintenance plan', price: 450, cadence: 'monthly' },
  ]
  const selectedExtras = addOns.filter(item => selectedAddOns.includes(item.slug))
  const oneTimeTotal = (plan.price ?? 0) + selectedExtras.filter(item => item.cadence === 'one-time').reduce((total, item) => total + item.price, 0)
  const quoteMessage = `I'm interested in the ${plan.name}. The starting estimate is ${plan.priceLabel}.${selectedExtras.length ? ` Add-ons I'm considering: ${selectedExtras.map(item => `${item.title} (${packageCurrency(item.price)} ${item.cadence})`).join(', ')}.` : ''} Please help me confirm the scope and final quote.`

  const toggleAddOn = (slug: string) => {
    setSelectedAddOns(current => current.includes(slug) ? current.filter(item => item !== slug) : [...current, slug])
  }

  return (
    <>
      <PageHeading
        eyebrow="Plan your project"
        title={<>A first estimate.<br /><em>Then a real conversation.</em></>}
        description="Select a starting package and any optional support. This estimate is for planning only; it does not reserve a date or take payment."
      />
      <section className="reserve-section">
        <div className="container reserve-grid">
          <div className="reserve-options">
            <div className="section-label">01 · Choose a package</div>
            <div className="reserve-package-list">
              {packages.map(item => (
                <label key={item.slug} className={`reserve-package${selectedSlug === item.slug ? ' selected' : ''}`}>
                  <input type="radio" name="package" value={item.slug} checked={selectedSlug === item.slug} onChange={() => setSelectedSlug(item.slug)} />
                  <span><strong>{item.name}</strong><small>{item.description}</small></span>
                  <b>{item.priceLabel}</b>
                </label>
              ))}
            </div>
            <div className="section-label reserve-addon-label">02 · Optional support</div>
            <div className="reserve-addon-list">
              {addOns.map(item => (
                <label className="reserve-addon" key={item.slug}>
                  <input type="checkbox" checked={selectedAddOns.includes(item.slug)} onChange={() => toggleAddOn(item.slug)} />
                  <span>{item.title}<small>{item.cadence === 'monthly' ? 'Billed monthly if agreed' : 'One-time estimate'}</small></span>
                  <b>{packageCurrency(item.price)}{item.cadence === 'monthly' ? '/mo' : ''}</b>
                </label>
              ))}
            </div>
          </div>
          <aside className="reserve-summary">
            <div className="section-label">03 · Estimate</div>
            <h2>Your starting scope</h2>
            <p>{plan.name}</p>
            <div className="reserve-summary-row"><span>Package estimate</span><strong>{plan.priceLabel}</strong></div>
            {selectedExtras.filter(item => item.cadence === 'one-time').map(item => (
              <div className="reserve-summary-row" key={item.slug}><span>{item.title}</span><strong>{packageCurrency(item.price)}</strong></div>
            ))}
            <div className="reserve-total"><span>Estimated one-time total</span><strong>{plan.price === null ? 'Scope required' : packageCurrency(oneTimeTotal)}</strong></div>
            {selectedExtras.some(item => item.cadence === 'monthly') && <p className="reserve-recurring">Plus {packageCurrency(450)}/month for maintenance, if selected.</p>}
            <small>Estimate only, not a quote or payment request. Hosting, domain, and third-party fees are excluded. The final price is confirmed in writing after we agree on scope.</small>
            <a className="button button-dark" href={`/consultation?package=${plan.slug}&message=${encodeURIComponent(quoteMessage)}`}>Discuss this project <ArrowUpRight size={16} /></a>
          </aside>
        </div>
      </section>
    </>
  )
}

export function ProjectPage({ slug }: { slug: string }) {
  const project = projects.find(item => item.slug === slug)
  if (!project) {
    return (
      <>
        <PageHeading eyebrow="Project not found" title={<>This page took<br /><em>a wrong turn.</em></>} description="That project isn’t in the portfolio, but there’s plenty more to explore." />
        <PageCta title="Take a look at the portfolio." link="/portfolio" linkLabel="Explore projects" />
      </>
    )
  }

  return (
    <>
      <section className="project-detail-hero">
        <div className="container">
          <a className="inline-link" href="/portfolio"><ArrowLeft size={16} /> Back to portfolio</a>
          <div className="project-detail-copy">
            <div className="section-label">{project.category}</div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <a className="button button-dark" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel ?? 'Visit live project'} <ArrowUpRight size={17} /></a>
          </div>
          <div className="project-detail-image">
            {project.image
              ? <img src={project.image} alt={`${project.title} project preview`} loading="lazy" decoding="async" />
              : <div className="project-placeholder placeholder-detail"><span>STUDIOBELLE · SELECTED WORK</span><strong>{project.title}</strong><span>{project.category}</span></div>}
          </div>
        </div>
      </section>
      <section className="project-detail-info">
        <div className="container">
          <div><Sparkles size={20} /><span>THE BUILD</span></div>
          <p>{project.description} The experience was designed to feel clear, approachable, and easy to use across devices.</p>
        </div>
      </section>
      <PageCta title="Have a project with a similar vision?" />
    </>
  )
}
