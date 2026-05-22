import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/icons';
import { t } from '../../i18n';
import { Button } from '../common/Button';

function Typewriter({ strings, speed = 80, pause = 1800 }) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    const current = strings[index % strings.length];

    if (!deleting && displayed.length < current.length) {
      timeout.current = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, speed);
    } else if (!deleting && displayed.length === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, speed / 2);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % strings.length);
    }

    return () => clearTimeout(timeout.current);
  }, [displayed, deleting, index, strings, speed, pause]);

  return (
    <span>
      {displayed}
      <span
        style={{
          borderRight: '2px solid var(--color-text-primary)',
          marginLeft: '2px',
          animation: 'blink 1s step-end infinite',
        }}
      />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Hero() {
  const titles = t('hero.titles');
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mx', `${x}%`);
      el.style.setProperty('--my', `${y}%`);
    };
    el.addEventListener('mousemove', handleMove);
    return () => el.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid background */}
      <div
        className="dot-grid dot-grid-fade"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Mouse-tracking spotlight */}
      <div className="hero-spotlight" />

      {/* Ambient glow blob — top left */}
      <div
        style={{
          position: 'absolute',
          width: '650px',
          height: '500px',
          top: '-200px',
          left: '-180px',
          background: 'rgba(255,255,255,0.016)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          pointerEvents: 'none',
          animation: 'float-slow 16s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      {/* Ambient glow blob — bottom right */}
      <div
        style={{
          position: 'absolute',
          width: '450px',
          height: '380px',
          bottom: '-180px',
          right: '0',
          background: 'rgba(255,255,255,0.01)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          animation: 'float-slow-alt 20s ease-in-out infinite',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '4rem 1.5rem 6rem',
          width: '100%',
        }}
      >
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: 'var(--color-text-secondary)',
            marginBottom: '0.75rem',
            letterSpacing: '0.1em',
          }}
        >
          {t('hero.greeting')}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            margin: '0 0 1rem',
            textShadow: '0 0 80px rgba(255,255,255,0.08), 0 0 160px rgba(255,255,255,0.04)',
          }}
        >
          {t('hero.name')}
        </motion.h1>

        {/* Typewriter title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            color: 'var(--color-text-secondary)',
            marginBottom: '1.5rem',
            minHeight: '2rem',
          }}
        >
          <Typewriter strings={titles} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          style={{
            maxWidth: '540px',
            fontSize: '1rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          {t('hero.tagline')}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}
        >
          <Button onClick={() => scrollTo('projects')}>
            {t('hero.cta.projects')}
          </Button>
          <Button variant="outline" onClick={() => scrollTo('contact')}>
            {t('hero.cta.contact')}
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
        >
          {[
            { href: 'https://github.com/SalvatMigliaccio', icon: <GithubIcon size={19} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/salvatore-migliaccio-552194225/', icon: <LinkedinIcon size={19} />, label: 'LinkedIn' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.15s ease, border-color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-text-primary)';
                e.currentTarget.style.borderColor = '#555';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text-secondary)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
              }}
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => scrollTo('about')}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--color-text-muted)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.3rem',
          zIndex: 1,
        }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
