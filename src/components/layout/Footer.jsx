import { Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/icons';
import { t } from '../../i18n';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        padding: '2rem 0',
        background: 'var(--color-bg-primary)',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* Copyright */}
        <p
          style={{
            margin: 0,
            fontSize: '0.8rem',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          © {year} Salvatore Migliaccio — {t('footer.rights')}
        </p>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {[
            { href: 'https://github.com/SalvatMigliaccio', icon: <GithubIcon size={16} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/salvatore-migliaccio-552194225/', icon: <LinkedinIcon size={16} />, label: 'LinkedIn' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                display: 'inline-flex',
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              {icon}
            </a>
          ))}

          <a
            href="/cv.pdf"
            download
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.78rem',
              color: 'var(--color-text-muted)',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              transition: 'color 0.15s ease',
              borderLeft: '1px solid var(--color-border)',
              paddingLeft: '0.75rem',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
          >
            <Download size={13} />
            {t('footer.cv')}
          </a>
        </div>
      </div>
    </footer>
  );
}
