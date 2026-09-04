'use client';

import { useLanguage, type Language } from '../../context/LanguageContext';

const languages: { code: Language; label: string }[] = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="flex items-center gap-1 border-l border-(--tertiary)/30 pl-3 sm:pl-4"
      aria-label="Selecionar idioma"
      role="group">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          aria-label={`Mudar idioma para ${label}`}
          aria-pressed={language === code}
          className={`min-w-8 rounded-md px-1.5 py-1 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--secondary) ${language === code ? 'bg-(--tertiary) text-(--quartiary)' : 'text-(--tertiary)/70 hover:bg-(--secondary) hover:text-(--tertiary)'}`}>
          {label}
        </button>
      ))}
    </div>
  );
}
