import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import enTranslations from '@/locales/en.json';
import ruTranslations from '@/locales/ru.json';
import azTranslations from '@/locales/az.json';
import trTranslations from '@/locales/tr.json';
import deTranslations from '@/locales/de.json';
import frTranslations from '@/locales/fr.json';
import esTranslations from '@/locales/es.json';
import itTranslations from '@/locales/it.json';
import ptTranslations from '@/locales/pt.json';
import zhTranslations from '@/locales/zh.json';
import arTranslations from '@/locales/ar.json';
import { LANGUAGE_OPTIONS } from '@/shared/constants/languages';

type Translations = typeof enTranslations;

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void; // eslint-disable-line no-unused-vars
  t: (key: string, vars?: Record<string, string | number>) => string; // eslint-disable-line no-unused-vars
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
      const isValidLang = LANGUAGE_OPTIONS.some((opt) => opt.code === saved);
      return isValidLang ? saved : 'en';
    }
    return 'en';
  });

  const [translations, setTranslations] = useState<Translations>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') || 'en';
      const isValidLang = LANGUAGE_OPTIONS.some((opt) => opt.code === savedLang);
      const lang = isValidLang ? savedLang : 'en';

      switch (lang) {
        case 'ru':
          return ruTranslations;
        case 'az':
          return azTranslations;
        case 'tr':
          return trTranslations;
        case 'de':
          return deTranslations;
        case 'fr':
          return frTranslations;
        case 'es':
          return esTranslations;
        case 'it':
          return itTranslations;
        case 'pt':
          return ptTranslations;
        case 'zh':
          return zhTranslations;
        case 'ar':
          return arTranslations;
        default:
          return enTranslations;
      }
    }
    return enTranslations;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);

      switch (language) {
        case 'ru':
          setTranslations(ruTranslations);
          break;
        case 'az':
          setTranslations(azTranslations);
          break;
        case 'tr':
          setTranslations(trTranslations);
          break;
        case 'de':
          setTranslations(deTranslations);
          break;
        case 'fr':
          setTranslations(frTranslations);
          break;
        case 'es':
          setTranslations(esTranslations);
          break;
        case 'it':
          setTranslations(itTranslations);
          break;
        case 'pt':
          setTranslations(ptTranslations);
          break;
        case 'zh':
          setTranslations(zhTranslations);
          break;
        case 'ar':
          setTranslations(arTranslations);
          break;
        default:
          setTranslations(enTranslations);
          break;
      }
    }
  }, [language]);

  const t = (key: string, vars?: Record<string, string | number>): string => {
    // eslint-disable-line no-unused-vars
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

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};

export const useT = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useT must be used within a LanguageProvider');
  }
  return context;
};
