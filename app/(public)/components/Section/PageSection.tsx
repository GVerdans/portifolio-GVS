import type { ReactNode } from 'react';

interface PageSectionProps {
  children: ReactNode;
  backgroundClassName?: string;
}

export default function PageSection({
  children,
  backgroundClassName = '',
}: PageSectionProps) {
  return (
    <section
      className={`relative flex min-h-screen w-full flex-col overflow-hidden rounded-xl py-20 shadow-2xl sm:px-8 md:py-30 md:px-15 lg:m-auto lg:w-3/4 lg:flex-row ${backgroundClassName}`}>
      {children}
    </section>
  );
}
