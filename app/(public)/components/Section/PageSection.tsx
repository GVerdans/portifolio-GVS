'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface PageSectionProps {
  children: ReactNode;
  backgroundClassName?: string;
}

export default function PageSection({
  children,
  backgroundClassName = '',
}: PageSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section-reveal relative flex min-h-screen snap-start flex-col overflow-hidden rounded-xl py-20 shadow-2xl sm:px-8 md:py-30 md:px-15 lg:m-auto lg:w-3/4 lg:flex-row ${isVisible ? 'section-reveal-visible' : ''} ${backgroundClassName}`}>
      {children}
    </section>
  );
}
