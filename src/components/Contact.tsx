import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export default function Contact({ initialMessage = '' }: { initialMessage?: string }) {
  const [form, setForm] = useState({ name: '', email: '', message: initialMessage })
  const [emailDraftOpened, setEmailDraftOpened] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    const subject = encodeURIComponent(`StudioBelle project enquiry from ${form.name.trim()}`)
    const body = encodeURIComponent(`${form.message.trim()}\n\nReply to: ${form.email.trim()}`)
    window.location.href = `mailto:adansibonnahc@gmail.com?subject=${subject}&body=${body}`
    setEmailDraftOpened(true)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60 }} className="contact-grid">
          <div>
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title">Let's build<br />something great.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: 36, lineHeight: 1.7 }}>
              Have a project in mind? I'm always open to discussing new opportunities and ideas.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: Mail, label: 'Email', value: 'adansibonnahc@gmail.com', href: 'mailto:adansibonnahc@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+233530121155', href: 'tel:+233530121155' },
                { icon: MapPin, label: 'Location', value: 'Accra, Ghana', href: 'https://maps.google.com/?q=Accra%2C%20Ghana' },
              ].map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === 'Location' ? '_blank' : undefined}
                  rel={c.label === 'Location' ? 'noreferrer' : undefined}
                  style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '4px 0' }}
                >
                  <div style={{
                    display: 'grid', placeItems: 'center', width: 48, height: 48, borderRadius: 12,
                    background: 'var(--surface)', border: '1px solid var(--border)', flexShrink: 0,
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                  >
                    <c.icon size={20} color="var(--primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{c.label}</div>
                    <div style={{ fontSize: '0.95rem', color: 'var(--text)' }}>{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            style={{
              padding: 36, borderRadius: 20, background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 8 }}>Your Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                 
                  style={{
                    width: '100%', padding: '14px 16px', borderRadius: 10,
                    background: 'var(--surface)', border: `1px solid ${errors.name ? 'var(--error)' : 'var(--border)'}`,
                    color: 'var(--text)', fontFamily: 'inherit', fontSize: '0.95rem', outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.currentTarget.style.borderColor = errors.name ? 'var(--error)' : 'var(--border)'}
                />
                {errors.name && <span style={{ fontSize: '0.78rem', color: 'var(--error)', marginTop: 6, display: 'block' }}>{errors.name}</span>}
              </div>

              <div>
                <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 8 }}>Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                 
                  style={{
                    width: '100%', padding: '14px 16px', borderRadius: 10,
                    background: 'var(--surface)', border: `1px solid ${errors.email ? 'var(--error)' : 'var(--border)'}`,
                    color: 'var(--text)', fontFamily: 'inherit', fontSize: '0.95rem', outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.currentTarget.style.borderColor = errors.email ? 'var(--error)' : 'var(--border)'}
                />
                {errors.email && <span style={{ fontSize: '0.78rem', color: 'var(--error)', marginTop: 6, display: 'block' }}>{errors.email}</span>}
              </div>

              <div>
                <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 8 }}>Message</label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={5}
                  style={{
                    width: '100%', padding: '14px 16px', borderRadius: 10,
                    background: 'var(--surface)', border: `1px solid ${errors.message ? 'var(--error)' : 'var(--border)'}`,
                    color: 'var(--text)', fontFamily: 'inherit', fontSize: '0.95rem', outline: 'none', resize: 'vertical',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.currentTarget.style.borderColor = errors.message ? 'var(--error)' : 'var(--border)'}
                />
                {errors.message && <span style={{ fontSize: '0.78rem', color: 'var(--error)', marginTop: 6, display: 'block' }}>{errors.message}</span>}
              </div>

              <button
                type="submit"
                style={{
                  padding: '14px 28px', borderRadius: 10, background: 'var(--primary)',
                  color: 'var(--bg)', fontWeight: 600, fontSize: '0.95rem',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px var(--primary-glow)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <>Continue by Email <Send size={16} /></>
              </button>
              {emailDraftOpened && (
                <p role="status" style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                  Your email app should open with the message. Review and send it there to complete your enquiry.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
