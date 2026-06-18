import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../contents/translations";
import openmanipulatorImg from "../assets/robots/openmanipulator.png";

const PROJECT_STYLES = [
  { bg: "bg-zinc-900" },
  { bg: "bg-zinc-900" },
  { bg: "bg-zinc-900" },
  { bg: "bg-zinc-900" },
  { bg: "bg-zinc-900" },
  { bg: "bg-zinc-900" },
];

export function ProjectsSection() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "Completed": return t.statusCompleted;
      case "Active": return t.statusActive;
      case "Research": return t.statusResearch;
      default: return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "text-neutral-700 bg-neutral-200/50 border-neutral-300";
      case "Active": return "text-zinc-600 bg-zinc-100 border-zinc-200";
      case "Research": return "text-slate-700 bg-slate-200/50 border-slate-300";
      default: return "text-zinc-600 bg-white border-zinc-200";
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in relative" style={{ animationDelay: "0.1s" }}>
          {/* Decorative images */}
          <div className="absolute top-0 right-0 w-48 md:w-64 opacity-40 hidden lg:block translate-x-1/4 pointer-events-none">
            <img src={openmanipulatorImg} alt="Robot Arm" className="w-full h-full object-contain animate-float" style={{ animationDelay: "1s" }} />
          </div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-200/50 border border-slate-300 text-slate-700 text-sm font-medium mb-4">
            {t.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 mb-5">
            {t.heading} <span className="text-zinc-900">{t.headingAccent}</span>
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">{t.body}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((project, idx) => {
            const style = PROJECT_STYLES[idx];
            return (
              <div
                key={project.title}
                className="card-glass rounded-2xl overflow-hidden border border-zinc-200 hover:border-zinc-300 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl animate-fade-in"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                {/* Color header */}
                <div className={`h-24 ${style!.bg} relative overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-50"
                  />
                  {/* Decorative circuit */}
                  <div className="absolute bottom-3 right-3 w-12 h-12 opacity-20">
                    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-zinc-900">
                      <circle cx="24" cy="24" r="8" />
                      <line x1="24" y1="0" x2="24" y2="16" />
                      <line x1="24" y1="32" x2="24" y2="48" />
                      <line x1="0" y1="24" x2="16" y2="24" />
                      <line x1="32" y1="24" x2="48" y2="24" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display font-semibold text-zinc-900 text-lg leading-snug">
                      {project.title}
                    </h3>
                    <span className={`shrink-0 px-2.5 py-0.5 rounded-full border text-xs font-medium ${getStatusColor(project.status)}`}>
                      {getStatusLabel(project.status)}
                    </span>
                  </div>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg bg-white border border-zinc-200 text-zinc-600 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
