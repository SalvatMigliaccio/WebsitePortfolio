import clsx from 'clsx';

export function SectionTitle({ title, subtitle, className }) {
  return (
    <div className={clsx('mb-12 md:mb-16', className)}>
      <h2
        style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          letterSpacing: '-0.02em',
          marginBottom: '0.5rem',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: 'var(--color-text-secondary)',
            fontSize: '1rem',
            marginTop: '0.5rem',
          }}
        >
          {subtitle}
        </p>
      )}
      <div
        style={{
          marginTop: '1rem',
          width: '2.5rem',
          height: '2px',
          background: 'linear-gradient(to right, var(--color-text-primary), transparent)',
          borderRadius: '2px',
        }}
      />
    </div>
  );
}
