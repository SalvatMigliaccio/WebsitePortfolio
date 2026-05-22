import { motion } from 'framer-motion';
import { PenLine, ExternalLink } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

// Add real posts here as you write them:
// { title, date, description, tags, url }
const posts = [];

export function Blog() {
  return (
    <section
      id="blog"
      style={{
        padding: '6rem 1.5rem',
        background: 'var(--color-bg-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <SectionTitle
          title="Notes & Articles"
          subtitle="Technical writing on cryptography, AI, and security research"
        />

        {posts.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {posts.map((post, i) => (
              <motion.a
                key={i}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={i}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '10px',
                  padding: '1.5rem 1.75rem',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#484848';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,255,255,0.06)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                  <p style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'var(--color-text-primary)', lineHeight: 1.4 }}>
                    {post.title}
                  </p>
                  <ExternalLink size={15} style={{ flexShrink: 0, marginTop: '3px', color: 'var(--color-text-muted)' }} />
                </div>
                {post.description && (
                  <p style={{ margin: '0.5rem 0 0', fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                    {post.description}
                  </p>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>
                    {post.date}
                  </span>
                  {post.tags?.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          /* Empty state */
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4rem 2rem',
              gap: '1.25rem',
              background: 'var(--color-bg-elevated)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                background: 'var(--color-bg-primary)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <PenLine size={22} style={{ color: 'var(--color-text-muted)' }} />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                Articles coming soon
              </p>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem', color: 'var(--color-text-secondary)', maxWidth: '380px', lineHeight: 1.65 }}>
                I'am working on technical articles about PQC, Agentic AI, and digital security. Check back soon.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
