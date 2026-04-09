'use client';

import { ReactNode, Children } from 'react';
import AnimatedSection from './AnimatedSection';

interface StaggeredGridProps {
  children: ReactNode[];
  className?: string;
  staggerMs?: number;
}

export default function StaggeredGrid({
  children,
  className = '',
  staggerMs = 120,
}: StaggeredGridProps) {
  const childArray = Children.toArray(children);

  return (
    <div className={className}>
      {childArray.map((child, index) => (
        <AnimatedSection key={index} delay={index * staggerMs}>
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
}
