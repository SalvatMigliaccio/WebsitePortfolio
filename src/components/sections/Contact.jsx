import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Mail, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/icons';
import { t } from '../../i18n';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';
import { Toast } from '../common/Toast';

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
  const [toast, setToast] = useState(null);
  const [copied, setCopied] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function showToast(type, message) {
    setToast({ type, message, id: Date.now() });
  }

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(t('contact.email'));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
          title: 'Portfolio Contact',
          time: new Date().toLocaleString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          }),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      showToast('success', "Message sent! I'll get back to you soon.");
    } catch (err) {
      console.error('[EmailJS error]', err);
      setStatus('error');
      showToast('error', 'Something went wrong. Please try again.');
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
            <button
              type="submit"
              disabled={status === 'sending'}
              onMouseEnter={(e) => {
                if (status !== 'sending') {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.color = '#fff';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1.4rem',
                borderRadius: '6px',
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'transparent',
                color: 'var(--color-text-primary)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                cursor: status === 'sending' ? 'default' : 'pointer',
                opacity: status === 'sending' ? 0.5 : 1,
                transition: 'border-color 0.2s ease, background 0.2s ease, color 0.2s ease',
              }}
            >
              <Send size={14} />
              {status === 'sending' ? t('contact.form.sending') : t('contact.form.send')}
            </button>

            {/* Feedback */}
            {status === 'sending' && (
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>
                {t('contact.form.sending')}…
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
            {/* Email card with copy button */}
            <div style={{ position: 'relative' }}>
              <a
                href={`mailto:${t('contact.email')}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '1rem 1.25rem',
                  paddingRight: '3.25rem',
                  textDecoration: 'none',
                  transition: 'border-color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#444')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              >
                <span style={{ color: 'var(--color-text-secondary)' }}><Mail size={18} /></span>
                <div>
                  <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>Email</p>
                  <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>{t('contact.email')}</p>
                </div>
              </a>
              <button
                onClick={handleCopyEmail}
                title={copied ? 'Copied!' : 'Copy email'}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: copied ? '#86c394' : 'var(--color-text-muted)',
                  display: 'flex',
                  padding: '4px',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => { if (!copied) e.currentTarget.style.color = 'var(--color-text-primary)'; }}
                onMouseLeave={(e) => { if (!copied) e.currentTarget.style.color = 'var(--color-text-muted)'; }}
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
              </button>
            </div>

            {/* GitHub + LinkedIn */}
            {[
              { icon: <GithubIcon size={18} />, label: 'GitHub', handle: '@SalvatMigliaccio', href: 'https://github.com/SalvatMigliaccio' },
              { icon: <LinkedinIcon size={18} />, label: 'LinkedIn', handle: 'Salvatore Migliaccio', href: 'https://www.linkedin.com/in/salvatore-migliaccio-552194225/' },
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
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              >
                <span style={{ color: 'var(--color-text-secondary)' }}>{icon}</span>
                <div>
                  <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>{label}</p>
                  <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>{handle}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
      <Toast toast={toast} onClose={() => setToast(null)} />
    </section>
  );
}
