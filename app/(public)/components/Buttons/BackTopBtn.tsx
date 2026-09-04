'use client';

import { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const BackTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="btn fixed left-5 bottom-10 z-50">
      <button
        type="button"
        onClick={handleClick}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
        className={`flex h-10 w-10 items-center justify-center rounded-full bg-(--primary) text-(--secondary) cursor-pointer transition-opacity ${isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        <FaArrowAltCircleUp size={24} />
      </button>
    </div>
  );
};

export default BackTopBtn;
