"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Language switcher component
export default function LanguageSwitcher({ language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    {
      code: 'pt',
      name: 'Português',
      flag: 'icons/brazil_round_icon_64.png',
      country: 'Brasil'
    },
    {
      code: 'en',
      name: 'English',
      flag: 'icons/united_states_of_america_round_icon_64.png',
      country: 'United States'
    }
  ];

  const handleLanguageSelect = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.language-switcher')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative language-switcher">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 hover:border-purple-500/50 rounded-full flex items-center justify-center transition-all duration-300 p-1"
        title={language === 'pt' ? 'Mudar idioma' : 'Change language'}
      >
        <Image 
          src={`/${currentLanguage?.flag}`} 
          alt={currentLanguage?.name} 
          width={24} 
          height={24} 
          className="w-6 h-6 rounded-full object-cover" 
        />
      </button>

      {/* Dropdown */}
      <div className={`absolute top-12 right-0 bg-gray-800/95 backdrop-blur-sm border border-gray-600/50 rounded-xl shadow-2xl transition-all duration-300 origin-top-right ${
        isOpen 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
      }`}>
        <div className="p-2 min-w-[180px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 text-left ${
                language === lang.code
                  ? 'bg-purple-600/30 text-purple-300 border border-purple-500/30'
                  : 'hover:bg-gray-700/50 text-gray-300 hover:text-white'
              }`}
            >
              <div className="w-6 h-6 flex-shrink-0">
                <Image 
                  src={`/${lang.flag}`} 
                  alt={lang.name} 
                  width={24} 
                  height={24} 
                  className="w-full h-full rounded-full object-cover" 
                />
              </div>
              <div className="flex flex-col flex-grow">
                <span className="font-medium text-sm">{lang.name}</span>
                <span className="text-xs opacity-70">{lang.country}</span>
              </div>
              {language === lang.code && (
                <div className="ml-auto w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}