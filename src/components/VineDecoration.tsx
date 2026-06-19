import { useEffect, useRef } from 'react';

interface VineDecorationProps {
  side: 'left' | 'right';
  speed?: number;
}

function VineSvg() {
  return (
    <svg
      width="120"
      height="900"
      viewBox="0 0 120 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 0 C20 60, 100 140, 60 200 C20 260, 100 340, 60 400
           C20 460, 100 540, 60 600 C20 660, 100 740, 60 800 C40 830, 60 870, 60 900"
        stroke="var(--color-primary)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.35"
      />
      {[90, 230, 380, 520, 670, 810].map((y, i) => (
        <ellipse
          key={y}
          cx={i % 2 === 0 ? 30 : 90}
          cy={y}
          rx="16"
          ry="9"
          fill="var(--color-hero-glow)"
          opacity="0.4"
          transform={`rotate(${i % 2 === 0 ? -25 : 25} ${i % 2 === 0 ? 30 : 90} ${y})`}
        />
      ))}
    </svg>
  );
}

export default function VineDecoration({ side, speed = 0.12 }: VineDecorationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;
      const offset = window.scrollY * speed;
      ref.current.style.transform = `translateY(${side === 'left' ? offset : -offset}px)`;
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [side, speed]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        [side]: 0,
        zIndex: 0,
        pointerEvents: 'none',
        willChange: 'transform',
      }}
    >
      <VineSvg />
    </div>
  );
}
