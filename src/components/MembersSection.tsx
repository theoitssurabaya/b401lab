import React, { useState } from "react";
import { useLanguage, type Language } from "../context/LanguageContext";
import { translations } from "../contents/translations";
import type { I_lecturers } from "@/contents/MembersContent/memberList";
import { AnimatedCounter } from "./AnimatedCounter";

const STUDENT_ROLE_COLORS = [
  "from-zinc-700 to-zinc-900",
  "from-violet-500 to-purple-600",
  "from-emerald-500 to-teal-600",
];

export function MembersSection() {
  const { lang } = useLanguage();
  const t = translations[lang].members;
  const [selectedLecturer, setSelectedLecturer] = useState<I_lecturers | null>(null);

  function handleLecturerLang(language: Language, lecturers: I_lecturers){
    if(language == "en")
    {
      return {role: lecturers.role.en, specialty: lecturers.specialty.en};
    }
    else if(language == "id")
    {
      return {role: lecturers.role.id, specialty: lecturers.specialty.id}
    }
  }

  return (
    <section id="members" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-sm font-medium mb-4">
            {t.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 mb-5">
            {t.heading} <span className="text-zinc-900">{t.headingAccent}</span>
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">{t.body}</p>
        </div>

        {/* Lecturers Grid */}
        <div className="mb-14">
          <h3 className="font-display font-semibold text-zinc-700 text-sm uppercase tracking-wider mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            {t.lecturersLabel}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
            {t.lecturers.map((lecturer, idx) => {
              return (
                <div
                  key={lecturer.name}
                  onClick={() => setSelectedLecturer(lecturer)}
                  className="card-glass rounded-2xl overflow-hidden border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100/50 transition-all duration-300 flex flex-col animate-fade-in cursor-pointer group shadow-sm hover:shadow-md"
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  {/* Photo Section */}
                  <div className="aspect-[4/5] w-full bg-zinc-200 relative overflow-hidden">
                    {lecturer.imageUrl ? (
                      <img 
                        src={lecturer.imageUrl} 
                        alt={lecturer.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-white font-display font-bold text-5xl">
                        {lecturer.initials}
                      </div>
                    )}
                  </div>

                  {/* Info Section */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-zinc-900 font-semibold text-sm leading-snug">{lecturer.name}</p>
                      <p className="text-zinc-500 text-xs mt-1">{handleLecturerLang(lang, lecturer)?.role}</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-zinc-200/60 flex items-center justify-between text-zinc-400 group-hover:text-zinc-600 transition-colors">
                      <p className="text-[10px] font-medium truncate pr-3">{handleLecturerLang(lang, lecturer)?.specialty}</p>
                      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Students stats */}
        <div>
          <h3 className="font-display font-semibold text-zinc-700 text-sm uppercase tracking-wider mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {t.studentsLabel}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {t.studentRoles.map((role, idx) => (
              <div
                key={role.label}
                className="card-glass rounded-2xl p-6 border border-zinc-200 text-center hover:border-zinc-300 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{role.icon}</div>
                <div className={`font-display font-bold text-4xl text-zinc-800 mb-2`}>
                  <AnimatedCounter value={`${role.count}+`} />
                </div>
                <div className="text-zinc-600 text-sm">{role.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lecturer Details Modal */}
      {selectedLecturer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in" style={{ animationDuration: '0.15s', animationDelay: '0s' }}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedLecturer(null)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-zinc-200/50">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedLecturer(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-zinc-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image Area */}
            <div className="w-full md:w-2/5 md:min-h-[400px] shrink-0 bg-zinc-100">
              {selectedLecturer.imageUrl ? (
                <img 
                  src={selectedLecturer.imageUrl} 
                  alt={selectedLecturer.name}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full min-h-[250px] bg-zinc-800 flex items-center justify-center text-white font-display font-bold text-7xl">
                  {selectedLecturer.initials}
                </div>
              )}
            </div>

            {/* Modal Info Area */}
            <div className="flex-1 p-6 sm:p-8 overflow-y-auto">
              <h3 className="font-display font-bold text-2xl text-zinc-900 leading-tight mb-2">
                {selectedLecturer.name}
              </h3>
              <p className="text-zinc-500 font-medium text-sm mb-6 pb-6 border-b border-zinc-100">
                {handleLecturerLang(lang, selectedLecturer)?.role} • {handleLecturerLang(lang, selectedLecturer)?.specialty}
              </p>

              <div className="space-y-6">
                {selectedLecturer.education && selectedLecturer.education.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">Education</h4>
                    <ul className="space-y-2">
                      {selectedLecturer.education.map((edu, i) => (
                        <li key={i} className="text-sm text-zinc-600 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedLecturer.expertise && (
                  <div>
                    <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">Research Interests</h4>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {selectedLecturer.expertise}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
