import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { t } from '../../i18n';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const NAV_SECTIONS = ['hero', 'about', 'skills', 'projects', 'publications', 'contact'];
const NAV_KEYS = ['nav.home', 'nav.about', 'nav.skills', 'nav.projects', 'nav.publications', 'nav.contact'];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Navbar() {
  const activeId = useScrollSpy(NAV_SECTIONS);
  const scrolled = useScrollPosition(10);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: '64px',
        background: scrolled
          ? 'rgba(10,10,10,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid var(--color-border-subtle)'
          : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <nav
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            fontFamily: 'var(--font-mono)',
            fontSize: '1.1rem',
            fontWeight: 500,
            color: 'var(--color-text-primary)',
            letterSpacing: '0.05em',
          }}
        >
          SM
        </button>

        {/* Desktop links */}
        <div
          className="hidden md:flex"
          style={{ alignItems: 'center', gap: '0.25rem' }}
        >
          {NAV_SECTIONS.map((id, i) => {
            const isActive = activeId === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '5px',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 500 : 400,
                  color: isActive
                    ? 'var(--color-text-primary)'
                    : 'var(--color-text-secondary)',
                  transition: 'color 0.15s ease, background 0.15s ease',
                  background: isActive ? 'rgba(255,255,255,0.06)' : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                {t(NAV_KEYS[i])}
              </button>
            );
          })}
        </div>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* CV download – desktop only */}
          <a
            href="/cv.pdf"
            download
            className="hidden md:inline-flex"
            style={{
              alignItems: 'center',
              gap: '0.35rem',
              background: 'transparent',
              border: '1px solid var(--color-border)',
              borderRadius: '5px',
              padding: '0.3rem 0.75rem',
              fontSize: '0.8rem',
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
            <Download size={13} />
            {t('nav.cv')}
          </a>

          {/* Hamburger – mobile only */}
          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text-secondary)',
              padding: '0.25rem',
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(10,10,10,0.97)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--color-border)',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          {NAV_SECTIONS.map((id, i) => (
            <button
              key={id}
              onClick={() => {
                scrollTo(id);
                setMenuOpen(false);
              }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                padding: '0.6rem 0.5rem',
                fontSize: '0.95rem',
                color: activeId === id
                  ? 'var(--color-text-primary)'
                  : 'var(--color-text-secondary)',
                borderBottom: '1px solid var(--color-border-subtle)',
              }}
            >
              {t(NAV_KEYS[i])}
            </button>
          ))}
          <a
            href="/cv.pdf"
            download
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginTop: '0.5rem',
              padding: '0.6rem 0.5rem',
              fontSize: '0.9rem',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
            }}
          >
            <Download size={14} />
            {t('nav.cv')}
          </a>
        </div>
      )}
    </header>
  );
}
