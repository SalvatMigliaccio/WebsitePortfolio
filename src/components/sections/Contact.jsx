import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/icons';
import { t } from '../../i18n';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const inputStyle = {
  width: '100%',
  background: 'var(--color-bg-elevated)',
  border: '1px solid var(--color-border)',
  borderRadius: '6px',
  padding: '0.75rem 1rem',
  fontSize: '0.9rem',
  color: 'var(--color-text-primary)',
  fontFamily: 'var(--font-sans)',
  outline: 'none',
  transition: 'border-color 0.15s ease',
  boxSizing: 'border-box',
};

export function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 0',
        background: 'var(--color-bg-surface)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <SectionTitle title={t('contact.title')} subtitle={t('contact.subtitle')} />
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {/* Name */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  color: 'var(--color-text-secondary)',
                  marginBottom: '0.4rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.05em',
                }}
              >
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder={t('contact.form.placeholder.name')}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = '#555')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
              />
            </div>

            {/* Email */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  color: 'var(--color-text-secondary)',
                  marginBottom: '0.4rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.05em',
                }}
              >
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder={t('contact.form.placeholder.email')}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = '#555')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
              />
            </div>

            {/* Message */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  color: 'var(--color-text-secondary)',
                  marginBottom: '0.4rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.05em',
                }}
              >
                {t('contact.form.message')}
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder={t('contact.form.placeholder.message')}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={(e) => (e.target.style.borderColor = '#555')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={status === 'sending'}
              style={{ alignSelf: 'flex-start', opacity: status === 'sending' ? 0.6 : 1 }}
            >
              <Send size={14} />
              {status === 'sending' ? t('contact.form.sending') : t('contact.form.send')}
            </Button>

            {/* Feedback */}
            {status === 'success' && (
              <p style={{ fontSize: '0.85rem', color: '#8bc8a0', margin: 0 }}>
                {t('contact.form.success')}
              </p>
            )}
            {status === 'error' && (
              <p style={{ fontSize: '0.85rem', color: '#d07070', margin: 0 }}>
                {t('contact.form.error')}
              </p>
            )}
          </motion.form>

          {/* Right: Social links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={2}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {[
              {
                icon: <Mail size={18} />,
                label: 'Email',
                handle: t('contact.email'),
                href: `mailto:${t('contact.email')}`,
              },
              {
                icon: <GithubIcon size={18} />,
                label: 'GitHub',
              handle: '@SalvatMigliaccio',
              href: 'https://github.com/SalvatMigliaccio',
              },
              {
                icon: <LinkedinIcon size={18} />,
                label: 'LinkedIn',
                handle: 'Salvatore Migliaccio',
              href: 'https://www.linkedin.com/in/salvatore-migliaccio-552194225/',
              },
            ].map(({ icon, label, handle, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '1rem 1.25rem',
                  textDecoration: 'none',
                  transition: 'border-color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#444')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = 'var(--color-border)')
                }
              >
                <span style={{ color: 'var(--color-text-secondary)' }}>{icon}</span>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.78rem',
                      color: 'var(--color-text-muted)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {handle}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
