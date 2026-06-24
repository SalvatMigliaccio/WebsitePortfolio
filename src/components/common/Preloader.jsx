import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Block body scroll while loading
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = '';
    }, 1900);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeInOut' } }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            background: 'var(--color-bg-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '1.75rem',
          }}
        >
          {/* Logo */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '2.2rem',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              letterSpacing: '0.08em',
              textShadow: '0 0 60px rgba(255,255,255,0.15)',
            }}
          >
            SM
          </motion.span>

          {/* Animated line */}
          <div
            style={{
              width: '140px',
              height: '1px',
              background: 'var(--color-border)',
              borderRadius: '1px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.3 }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.7), transparent)',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
