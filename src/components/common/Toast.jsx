import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';

export function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(onClose, 3500);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          key={toast.id}
          initial={{ opacity: 0, y: -16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.96 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: '5.5rem',
            right: '1.5rem',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            background: 'var(--color-bg-elevated)',
            border: `1px solid ${toast.type === 'success' ? 'rgba(134,195,148,0.35)' : 'rgba(210,110,110,0.35)'}`,
            borderRadius: '10px',
            padding: '0.9rem 1.1rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.55)',
            maxWidth: '340px',
            width: 'max-content',
          }}
        >
          {toast.type === 'success' ? (
            <CheckCircle size={17} style={{ color: '#86c394', flexShrink: 0, marginTop: '1px' }} />
          ) : (
            <XCircle size={17} style={{ color: '#d26e6e', flexShrink: 0, marginTop: '1px' }} />
          )}
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-primary)', lineHeight: 1.45, flex: 1 }}>
            {toast.message}
          </p>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text-muted)',
              padding: '1px',
              display: 'flex',
              flexShrink: 0,
              marginTop: '1px',
            }}
          >
            <X size={13} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
