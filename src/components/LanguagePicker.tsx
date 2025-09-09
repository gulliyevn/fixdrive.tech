import React, { useEffect, useRef, useState } from 'react';
import { LANGUAGE_OPTIONS, type LanguageOption } from '@/shared/constants/languages';
import { useT } from '@/contexts/LanguageContext';

type Props = {
  inverted?: boolean; // for header on transparent background
};

const LanguagePicker: React.FC<Props> = ({ inverted }) => {
  const { language, setLanguage } = useT();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const current = LANGUAGE_OPTIONS.find((l) => l.code === language) ?? LANGUAGE_OPTIONS[0];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const baseText = inverted ? 'text-white' : 'text-foreground';
  const baseBorder = inverted ? 'border-white/40' : 'border-border';
  const bg = inverted ? 'bg-transparent' : 'bg-background';

  return (
    <div ref={ref} className="relative">
      <button
        className={`flex items-center gap-2 rounded-md border px-2 py-1 text-sm ${baseText} ${baseBorder} ${bg} hover:opacity-90`}
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{current?.flag}</span>
        <span className="hidden sm:inline">{current?.label}</span>
      </button>
      {open && (
        <div
          className={`absolute right-0 mt-2 w-44 rounded-md border ${baseBorder} bg-card shadow-lg z-50`}
          role="listbox"
        >
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none;} .no-scrollbar{scrollbar-width:none;-ms-overflow-style:none;}`}</style>
          <ul className="max-h-64 overflow-auto no-scrollbar text-foreground">
            {LANGUAGE_OPTIONS.map((opt: LanguageOption) => (
              <li key={opt.code}>
                <button
                  className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 lang-item text-foreground`}
                  onClick={() => {
                    setLanguage(opt.code);
                    setOpen(false);
                  }}
                  role="option"
                  aria-selected={opt.code === language}
                >
                  <span>{opt.flag}</span>
                  <span>{opt.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguagePicker;
