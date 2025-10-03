"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { translations } from './translations';
import EducationAccordion from './components/EducationAccordion';
import ImageCarousel from './components/ImageCarousel';
import LanguageSwitcher from './components/LanguageSwitcher';

// TechnologyCard component
function TechnologyCard({ icon, title, description, hoverColor, bgColor = "gray-500/20" }) {
  // Hover color mappings to ensure Tailwind includes these classes
  const hoverColorMap = {
    'orange-500': 'hover:border-orange-500/50',
    'red-500': 'hover:border-red-500/50',
    'blue-500': 'hover:border-blue-500/50',
    'yellow-500': 'hover:border-yellow-500/50',
    'cyan-500': 'hover:border-cyan-500/50',
    'purple-500': 'hover:border-purple-500/50',
  };

  // Background colors
  const bgColorMap = {
    'white': 'bg-white',
    'orange-500/20': 'bg-orange-500/20',
    'red-500/20': 'bg-red-500/20',
    'blue-500/20': 'bg-blue-500/20',
    'yellow-500/20': 'bg-yellow-500/20',
    'cyan-500/20': 'bg-cyan-500/20',
    'purple-500/20': 'bg-purple-500/20',
  };

  const hoverClass = hoverColorMap[hoverColor] || 'hover:border-gray-500/50';
  const backgroundClass = bgColorMap[bgColor] || 'bg-gray-500/20';

  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 border border-gray-700/50 ${hoverClass} transition-all duration-300`}>
      <div className={`w-10 h-10 ${backgroundClass} rounded-xl flex items-center justify-center mb-3 p-2`}>
        <Image src={`/icons/${icon}`} alt={title} width={24} height={24} className="w-full h-full object-contain" />
      </div>
      <h4 className="font-semibold mb-2 text-sm">{title}</h4>
      <p className="text-gray-400 text-xs leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// ExperienceItem component
function ExperienceItem({ title, company, period, description, technologies }) {
  const techColorMap = {
    'blue-600': {
      bg: 'bg-blue-600/20',
      text: 'text-blue-300',
      border: 'border-blue-500/30'
    },
    'green-600': {
      bg: 'bg-green-600/20',
      text: 'text-green-300',
      border: 'border-green-500/30'
    },
    'purple-600': {
      bg: 'bg-purple-600/20',
      text: 'text-purple-300',
      border: 'border-purple-500/30'
    },
    'orange-600': {
      bg: 'bg-orange-600/20',
      text: 'text-orange-300',
      border: 'border-orange-500/30'
    },
    'red-600': {
      bg: 'bg-red-600/20',
      text: 'text-red-300',
      border: 'border-red-500/30'
    },
    'indigo-600': {
      bg: 'bg-indigo-600/20',
      text: 'text-indigo-300',
      border: 'border-indigo-500/30'
    },
    'gray-600': {
      bg: 'bg-gray-600/20',
      text: 'text-gray-300',
      border: 'border-gray-500/30'
    }
  };

  return (
    <div className="relative pl-8 border-l-2 border-purple-500/30">
      <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
      <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
          <div>
            <h4 className="text-lg font-semibold text-white">{title}</h4>
            <p className="text-purple-400 font-medium">{company}</p>
          </div>
          <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => {
            const colors = techColorMap[tech.color] || techColorMap['gray-600'];
            return (
              <span key={index} className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm border ${colors.border}`}>
                {tech.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Image carousel component






export default function ModernPortfolio() {
  const [language, setLanguage] = useState('pt');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 lg:px-12">
        <div className="text-lg font-semibold">HS</div>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-purple-400 transition-colors">{t.nav.about}</a>
          <a href="#experience" className="hover:text-purple-400 transition-colors">{t.nav.experience}</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">{t.nav.contact}</a>
        </div>
        <div className="flex items-center gap-4">
          {/* Language switcher */}
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
      </nav>

      {/* Hero section */}
      <main className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Main content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
                Heitor Aparecido da Silva<br />
                <span className="text-purple-400">{t.hero.title}</span>
              </h1>
              <p className="text-gray-300 text-lg">
                {t.hero.subtitle}
              </p>
            </div>

            {/* About me section */}
            <div id="about" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-lg">
                  👨‍💻
                </div>
                {t.about.title}
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                {/* Text content */}
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {t.about.text1}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {t.about.text2}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-orange-600/30 text-orange-300 rounded-full text-sm border border-orange-500/30">Java</span>
                    <span className="px-3 py-1 bg-green-600/30 text-green-300 rounded-full text-sm border border-green-500/30">Spring Boot</span>
                    <span className="px-3 py-1 bg-red-600/30 text-red-300 rounded-full text-sm border border-red-500/30">Angular</span>
                    <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm border border-blue-500/30">MySQL</span>
                    <span className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm border border-purple-500/30">Python</span>
                  </div>
                </div>

                {/* Image carousel */}
                <div className="relative">
                  <ImageCarousel />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Tech cards grid */}
          <div className="grid grid-cols-2 gap-4">
            <TechnologyCard 
              icon="java.svg" 
              title={t.technologies.java.title}
              description={t.technologies.java.description}
              hoverColor="orange-500"
              bgColor="white"
            />
            
            <TechnologyCard 
              icon="angular.png" 
              title={t.technologies.angular.title}
              description={t.technologies.angular.description}
              hoverColor="red-500"
              bgColor="red-500/20"
            />
            
            <TechnologyCard 
              icon="mysql.png" 
              title={t.technologies.mysql.title}
              description={t.technologies.mysql.description}
              hoverColor="blue-500"
              bgColor="blue-500/20"
            />
            
            <TechnologyCard 
              icon="python.png" 
              title={t.technologies.python.title}
              description={t.technologies.python.description}
              hoverColor="yellow-500"
              bgColor="yellow-500/20"
            />
            
            <TechnologyCard 
              icon="react.png" 
              title={t.technologies.react.title}
              description={t.technologies.react.description}
              hoverColor="cyan-500"
              bgColor="cyan-500/20"
            />
            
            <TechnologyCard 
              icon="git.png" 
              title={t.technologies.git.title}
              description={t.technologies.git.description}
              hoverColor="purple-500"
              bgColor="purple-500/20"
            />
          </div>
        </div>

        {/* Professional experience section */}
        <div id="experience" className="mt-16 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-lg">
              💼
            </div>
            {t.experience.title}
          </h3>
          
          <div className="space-y-8">
            <ExperienceItem 
              title={t.experiences.consultant.title}
              company={t.experiences.consultant.company}
              period="Fev/2023 - Fev/2024"
              description={t.experiences.consultant.description}
              technologies={[
                { name: "Python", color: "blue-600" },
                { name: language === 'pt' ? "Testes" : "Testing", color: "green-600" },
                { name: "Scrum", color: "purple-600" }
              ]}
            />

            <ExperienceItem 
              title={t.experiences.developer.title}
              company={t.experiences.developer.company}
              period="Mai/2022 - Jan/2023"
              description={t.experiences.developer.description}
              technologies={[
                { name: "Java", color: "orange-600" },
                { name: "Spring", color: "red-600" },
                { name: "MySQL", color: "indigo-600" },
                { name: "Git", color: "gray-600" },
                { name: "Angular", color: "blue-600" }
              ]}
            />

            <ExperienceItem 
              title={t.experiences.intern.title}
              company={t.experiences.intern.company}
              period="Jun/2021 - Abr/2022"
              description={t.experiences.intern.description}
              technologies={[
                { name: "JavaScript", color: "orange-600" },
                { name: "jQuery", color: "red-600" },
                { name: "HTML/CSS", color: "indigo-600" },
                { name: "Bootstrap", color: "gray-600" },
                { name: "PHP", color: "blue-600" }
              ]}
            />

            {/* Experience - Education accordion */}
            <div className="relative pl-8 border-l-2 border-purple-500/30">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
              <EducationAccordion language={language} translations={translations} />
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div id="contact" className="mt-16 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t.contact.title}</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">📧</span>
                  <span>heitor.ap.silva98@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">📍</span>
                  <span>{t.contact.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">💼</span>
                  <span>{t.contact.available}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-start lg:items-end gap-4">
              <div className="flex gap-4 flex-wrap">
                <a href="https://www.linkedin.com/in/hanove/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full overflow-hidden hover:scale-105 transition-transform">
                  <Image src="/icons/linkedin.png" alt="LinkedIn" width={40} height={40} className="w-full h-full object-cover" />
                </a>
                <a href="https://github.com/hanove" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full overflow-hidden hover:scale-105 transition-transform">
                  <Image src="/icons/github.png" alt="GitHub" width={40} height={40} className="w-full h-full object-cover" />
                </a>
                <a href="mailto:heitor.ap.silva98@gmail.com" className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-sm">✉</span>
                </a>
                <a href="https://t.me/hanoveap" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full overflow-hidden hover:scale-105 transition-transform">
                  <Image src="/icons/telegram.png" alt="Telegram" width={40} height={40} className="w-full h-full object-cover" />
                </a>
              </div>
              <div className="flex gap-3">
                <a 
                  href="https://t.me/hanoveap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-sm transition-colors border border-blue-400 flex items-center gap-2"
                >
                  {t.contact.hello} <span className="text-lg">👋</span>
                </a>
                <a 
                  href={`/cv/CV - Heitor Aparecido da Silva ${language === 'en' ? 'EN' : 'PT'}.pdf`}
                  download={`CV - Heitor Aparecido da Silva ${language === 'en' ? 'EN' : 'PT'}.pdf`}
                  className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-full text-sm transition-colors border border-gray-600 inline-flex items-center gap-2"
                >
                  <span>📄</span> {t.contact.download}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
