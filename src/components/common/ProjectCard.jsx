import { ExternalLink, GitBranch, Globe } from 'lucide-react';
import { t } from '../../i18n';

export function ProjectCard({ project }) {
  const title = t(`${project.translationKey}.title`);
  const desc = t(`${project.translationKey}.desc`);
  const tags = t(`${project.translationKey}.tags`);
  const ctaLabel = project.deployed ? t('projects.cta.live') : t('projects.cta');
  const ctaIcon = project.deployed ? <Globe size={13} /> : <ExternalLink size={13} />;

  return (
    <div
      style={{
        background: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '10px',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#484848';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.04)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <GitBranch size={16} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
          <h3
            style={{
              margin: 0,
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.01em',
            }}
          >
            {title}
          </h3>
        </div>
        {project.wip && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              background: 'rgba(255,255,255,0.06)',
              color: 'var(--color-text-muted)',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              padding: '2px 8px',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {t('projects.wip')}
          </span>
        )}
      </div>

      {/* Description */}
      <p
        style={{
          margin: 0,
          fontSize: '0.875rem',
          color: 'var(--color-text-secondary)',
          lineHeight: '1.65',
          flexGrow: 1,
        }}
      >
        {desc}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          fontSize: '0.8rem',
          color: 'var(--color-text-secondary)',
          textDecoration: 'none',
          fontFamily: 'var(--font-mono)',
          transition: 'color 0.15s ease',
          width: 'fit-content',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
      >
        {ctaIcon}
        {ctaLabel}
      </a>
    </div>
  );
}
