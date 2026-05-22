import React from "react";
import { useLanguage, type Language } from "../context/LanguageContext";
import { translations } from "../contents/translations";
import type { I_lecturers } from "@/contents/MembersContent/memberList";

const LECTURER_GRADIENTS = [
  "from-cyan-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-emerald-500 to-teal-600",
];

const STUDENT_ROLE_COLORS = [
  "from-cyan-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-emerald-500 to-teal-600",
];

export function MembersSection() {
  const { lang } = useLanguage();
  const t = translations[lang].members;

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
    <section id="members" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-4">
            {t.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            {t.heading} <span className="gradient-text">{t.headingAccent}</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.body}</p>
        </div>

        {/* Lecturers */}
        <div className="mb-14">
          <h3 className="font-display font-semibold text-slate-300 text-sm uppercase tracking-wider mb-6">
            {t.lecturersLabel}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.lecturers.map((lecturer, idx) => (
              <div
                key={lecturer.name}
                className="card-glass rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300 flex items-center gap-4"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${LECTURER_GRADIENTS[idx]} flex items-center justify-center text-white font-display font-bold text-lg shrink-0 shadow-lg`}>
                  {lecturer.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm leading-snug truncate">{lecturer.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{handleLecturerLang(lang, lecturer)?.role}</p>
                  <p className="text-cyan-400 text-xs mt-1">{handleLecturerLang(lang, lecturer)?.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Students stats */}
        <div>
          <h3 className="font-display font-semibold text-slate-300 text-sm uppercase tracking-wider mb-6">
            {t.studentsLabel}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {t.studentRoles.map((role, idx) => (
              <div
                key={role.label}
                className="card-glass rounded-2xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{role.icon}</div>
                <div className={`font-display font-bold text-4xl bg-gradient-to-r ${STUDENT_ROLE_COLORS[idx]} bg-clip-text text-transparent mb-2`}>
                  {role.count}+
                </div>
                <div className="text-slate-400 text-sm">{role.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
