import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../contents/translations";

const PROJECT_STYLES = [
  { gradient: "from-cyan-500/20 to-teal-500/10" },
  { gradient: "from-blue-500/20 to-indigo-500/10" },
  { gradient: "from-violet-500/20 to-purple-500/10" },
  { gradient: "from-orange-500/20 to-amber-500/10" },
  { gradient: "from-emerald-500/20 to-green-500/10" },
  { gradient: "from-rose-500/20 to-pink-500/10" },
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
      case "Completed": return "text-emerald-400 bg-emerald-500/10 border-emerald-500/30";
      case "Active": return "text-blue-400 bg-blue-500/10 border-blue-500/30";
      case "Research": return "text-orange-400 bg-orange-500/10 border-orange-500/30";
      default: return "text-slate-400 bg-white/5 border-white/10";
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-4">
            {t.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            {t.heading} <span className="gradient-text">{t.headingAccent}</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.body}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((project, idx) => {
            const style = PROJECT_STYLES[idx];
            return (
              <div
                key={project.title}
                className="card-glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Color header */}
                <div className={`h-24 bg-gradient-to-br ${style!.gradient} relative overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)" }}
                  />
                  {/* Decorative circuit */}
                  <div className="absolute bottom-3 right-3 w-12 h-12 opacity-20">
                    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
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
                    <h3 className="font-display font-semibold text-white text-lg leading-snug">
                      {project.title}
                    </h3>
                    <span className={`shrink-0 px-2.5 py-0.5 rounded-full border text-xs font-medium ${getStatusColor(project.status)}`}>
                      {getStatusLabel(project.status)}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-xs">
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
