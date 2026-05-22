import clsx from 'clsx';

export function Button({ children, variant = 'primary', href, onClick, className, ...props }) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.625rem 1.5rem',
    borderRadius: '6px',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.01em',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    border: '1px solid transparent',
  };

  const variants = {
    primary: {
      background: 'var(--color-accent)',
      color: '#0a0a0a',
      borderColor: 'var(--color-accent)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-text-primary)',
      borderColor: 'var(--color-border)',
    },
  };

  const style = { ...base, ...variants[variant] };

  const handleMouseEnter = (e) => {
    if (variant === 'primary') {
      e.currentTarget.style.background = 'var(--color-accent-dim)';
      e.currentTarget.style.borderColor = 'var(--color-accent-dim)';
    } else {
      e.currentTarget.style.borderColor = '#555';
      e.currentTarget.style.color = 'var(--color-accent)';
    }
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.currentTarget.style, variants[variant]);
  };

  if (href) {
    return (
      <a
        href={href}
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}
