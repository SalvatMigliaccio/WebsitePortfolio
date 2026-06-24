import { Mic2, ExternalLink } from 'lucide-react';
import { t } from '../../i18n';

export function TalkCard({ talk }) {
  return (
    <article
      style={{
        background: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '10px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.9rem',
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--color-text-muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Talk - {talk.date}
        </p>
        <Mic2 size={15} style={{ color: 'var(--color-text-muted)' }} />
      </div>

      <div>
        <h3 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>{talk.title}</h3>
        <p style={{ margin: '0.35rem 0 0', fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>{talk.event}</p>
      </div>

      {Array.isArray(talk.speakers) && talk.speakers.length > 0 && (
        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
          {talk.speakers.join(' | ')}
        </p>
      )}

      {talk.summary && (
        <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
          {talk.summary}
        </p>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {talk.topics.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <a
        href={talk.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: 'auto',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          width: 'fit-content',
          textDecoration: 'none',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          color: 'var(--color-text-secondary)',
        }}
      >
        <ExternalLink size={13} />
        {t('talks.cta')}
      </a>
    </article>
  );
}
