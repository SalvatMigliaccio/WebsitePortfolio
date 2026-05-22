import { createContext, useContext, useState, useMemo } from 'react';
import { translations, defaultLang } from '../translations';

const LanguageContext = createContext(null);

function detectLang() {
  const stored = localStorage.getItem('lang');
  if (stored === 'en' || stored === 'it') return stored;
  const browser = navigator.language?.slice(0, 2).toLowerCase();
  return browser === 'it' ? 'it' : defaultLang;
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLang);

  function toggleLang() {
    const next = lang === 'en' ? 'it' : 'en';
    setLang(next);
    localStorage.setItem('lang', next);
  }

  function t(key) {
    return translations[lang][key] ?? translations[defaultLang][key] ?? key;
  }

  const value = useMemo(() => ({ lang, toggleLang, t }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
