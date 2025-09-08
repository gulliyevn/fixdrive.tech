import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import enTranslations from '@/locales/en.json';
import ruTranslations from '@/locales/ru.json';
import { LANGUAGE_OPTIONS } from '@/shared/constants/languages';

type Translations = typeof enTranslations;

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') || 'en';
      // Validate that the saved language is in our supported languages
      const isValidLang = LANGUAGE_OPTIONS.some(opt => opt.code === saved);
      return isValidLang ? saved : 'en';
    }
    return 'en';
  });

  const [translations, setTranslations] = useState<Translations>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') || 'en';
      const isValidLang = LANGUAGE_OPTIONS.some(opt => opt.code === savedLang);
      const lang = isValidLang ? savedLang : 'en';
      return lang === 'ru' ? ruTranslations : enTranslations;
    }
    return enTranslations;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
      // For now, only support EN and RU. Other languages will fallback to EN
      setTranslations(language === 'ru' ? ruTranslations : enTranslations);
    }
  }, [language]);

  const t = (key: string, vars?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found
        value = enTranslations;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found in fallback
          }
        }
        break;
      }
    }

    if (typeof value !== 'string') {
      return key;
    }

    // Replace variables in the string
    if (vars) {
      return value.replace(/\{\{(\w+)\}\}/g, (match, varName) => {
        return vars[varName]?.toString() || match;
      });
    }

    return value;
  };

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useT = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useT must be used within a LanguageProvider');
  }
  return context;
};
