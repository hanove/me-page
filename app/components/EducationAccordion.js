"use client";

import { useState } from 'react';

// Education accordion component
export default function EducationAccordion({ language, translations }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = translations[language];

  const academicExperiences = [
    {
      title: t.education.academicExperiences.tcc.title,
      period: "2024 - 2025",
      description: t.education.academicExperiences.tcc.description,
      technologies: ["Neo4j", "Cypher", "Java", "PostgreSQL", "PL/SQL", "R"]
    },
    {
      title: t.education.academicExperiences.monitor.title,
      period: language === 'pt' ? "abr/2025 - jul/2025" : "Apr/2025 - Jul/2025",
      description: t.education.academicExperiences.monitor.description,
      technologies: language === 'pt' ? ["C/C++", "Banco de Dados", "Algoritmos", "Estruturas de Dados", "Lógica de Programação"] : ["C/C++", "Database", "Algorithms", "Data Structures", "Programming Logic"]
    },
    {
      title: t.education.academicExperiences.research.title,
      period: language === 'pt' ? "ago/2019 - mai/2020" : "Aug/2019 - May/2020",
      description: t.education.academicExperiences.research.description,
      technologies: ["Angular", "JavaScript", "PostgreSQL", "Git"]
    },
    {
      title: t.education.academicExperiences.leadership.title,
      period: "2019",
      description: t.education.academicExperiences.leadership.description,
      technologies: language === 'pt' ? ["Comunicação", "Organização", "Trabalho em equipe"] : ["Communication", "Organization", "Teamwork"]
    }
  ];

  return (
    <div className="bg-gray-800/50 rounded-xl transition-all duration-300">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left hover:bg-gray-800/70 rounded-xl transition-all duration-300 flex items-center justify-between"
      >
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
            <div>
              <h4 className="text-lg font-semibold text-white">{t.education.degree}</h4>
              <p className="text-purple-400 font-medium">{t.education.university}</p>
            </div>
            <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
              2017 - 2025
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            {t.education.description}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-yellow-600/20 text-yellow-300 rounded-full text-sm border border-yellow-500/30">
              {language === 'pt' ? 'Algoritmos' : 'Algorithms'}
            </span>
            <span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
              {language === 'pt' ? 'Engenharia de Software' : 'Software Engineering'}
            </span>
            <span className="px-3 py-1 bg-pink-600/20 text-pink-300 rounded-full text-sm border border-pink-500/30">
              {language === 'pt' ? 'Design de Banco de Dados' : 'Database Design'}
            </span>
          </div>
        </div>
        
        {/* Expand/Collapse icon */}
        <div className="ml-4 flex-shrink-0">
          <div className={`w-8 h-8 bg-purple-600/30 rounded-full flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {/* Expandable content */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6">
          <div className="border-t border-gray-600/30 pt-6">
            <h5 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              {t.education.academicTitle}
            </h5>
            
            <div className="space-y-6">
              {academicExperiences.map((experience, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-5 border border-gray-600/20">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <h6 className="font-semibold text-purple-300">{experience.title}</h6>
                    <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {experience.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-700/30 text-gray-300 rounded text-xs border border-gray-600/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}