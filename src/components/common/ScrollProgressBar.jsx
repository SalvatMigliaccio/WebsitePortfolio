import { useScrollProgress } from '../../hooks/useScrollProgress';

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 99999,
        height: '2px',
        width: `${progress}%`,
        background: 'linear-gradient(to right, rgba(255,255,255,0.7), rgba(255,255,255,0.2))',
        pointerEvents: 'none',
        transition: 'width 0.08s linear',
      }}
    />
  );
}
