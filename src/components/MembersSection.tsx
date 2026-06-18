import React from "react";
import { useLanguage, type Language } from "../context/LanguageContext";
import { translations } from "../contents/translations";
import type { I_lecturers } from "@/contents/MembersContent/memberList";

const LECTURER_GRADIENTS = [
  "from-zinc-700 to-zinc-900",
  "from-violet-500 to-purple-600",
  "from-emerald-500 to-teal-600",
];

const STUDENT_ROLE_COLORS = [
  "from-zinc-700 to-zinc-900",
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

        {/* Lecturers */}
        <div className="mb-14">
          <h3 className="font-display font-semibold text-zinc-700 text-sm uppercase tracking-wider mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            {t.lecturersLabel}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.lecturers.map((lecturer, idx) => (
              <div
                key={lecturer.name}
                className="card-glass rounded-2xl p-6 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100 transition-all duration-300 flex items-center gap-4 animate-fade-in"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-zinc-900 font-display font-bold text-lg shrink-0 shadow-lg`}>
                  {lecturer.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-zinc-900 font-semibold text-sm leading-snug truncate">{lecturer.name}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{handleLecturerLang(lang, lecturer)?.role}</p>
                  <p className="text-zinc-700 text-xs mt-1">{handleLecturerLang(lang, lecturer)?.specialty}</p>
                </div>
              </div>
            ))}
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
                  {role.count}+
                </div>
                <div className="text-zinc-600 text-sm">{role.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
