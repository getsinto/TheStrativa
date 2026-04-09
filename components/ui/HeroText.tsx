'use client';

import { ReactNode } from 'react';

interface HeroTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function HeroText({
  children,
  className = '',
  delay = 0,
}: HeroTextProps) {
  return (
    <div
      className={className}
      style={{
        animation: `fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`,
      }}
    >
      {children}
    </div>
  );
}
