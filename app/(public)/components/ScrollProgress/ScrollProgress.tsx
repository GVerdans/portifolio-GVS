'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress =
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

      setProgress(Math.min(currentProgress, 100));
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-50 h-screen w-1 bg-(--primary)/20"
      role="progressbar"
      aria-label="Progresso da página"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}>
      <div
        className="w-full bg-(--primary) transition-[height] duration-150"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
}
