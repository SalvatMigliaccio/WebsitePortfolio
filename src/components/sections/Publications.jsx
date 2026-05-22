import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const publications = [
  {
    title: 'A Moving Target Defense Framework to Improve Resilience of Cloud-Edge Systems',
    venue: 'Springer Book Chapter',
    year: '2025',
    tags: ['Moving Target Defense', 'Cloud-Edge', 'Cyber Security', 'Resilience'],
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-87778-0_24',
  },
];

export function Publications() {
  return (
    <section
      id="publications"
      style={{
        padding: '6rem 1.5rem',
        background: 'var(--color-bg-primary)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <SectionTitle
          title="Publications"
          subtitle="Peer-reviewed research contributions"
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {publications.map((pub, i) => (
            <motion.a
              key={i}
              href={pub.url}
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
                background: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '10px',
                padding: '1.5rem 1.75rem',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#484848';
                e.currentTarget.style.background = 'var(--color-bg-elevated)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.04)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.background = 'var(--color-bg-surface)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                {/* Icon */}
                <div
                  style={{
                    flexShrink: 0,
                    marginTop: '2px',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    background: 'var(--color-bg-elevated)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <BookOpen size={18} style={{ color: 'var(--color-text-muted)' }} />
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                    <p
                      style={{
                        margin: 0,
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--color-text-primary)',
                        lineHeight: 1.45,
                      }}
                    >
                      {pub.title}
                    </p>
                    <ExternalLink
                      size={15}
                      style={{ flexShrink: 0, marginTop: '3px', color: 'var(--color-text-muted)' }}
                    />
                  </div>

                  {/* Venue + year */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginTop: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {pub.venue}
                    </span>
                    <span style={{ color: 'var(--color-border)' }}>·</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      {pub.year}
                    </span>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.75rem' }}>
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px',
                          background: 'var(--color-bg-primary)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
