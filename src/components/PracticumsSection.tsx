import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../contents/translations";

const LEVEL_COLORS: Record<string, string> = {
  Beginner: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  Intermediate: "text-blue-400 bg-blue-500/10 border-blue-500/30",
  Advanced: "text-violet-400 bg-violet-500/10 border-violet-500/30",
  Pemula: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  Menengah: "text-blue-400 bg-blue-500/10 border-blue-500/30",
  Lanjutan: "text-violet-400 bg-violet-500/10 border-violet-500/30",
};

export function PracticumsSection() {
  const { lang } = useLanguage();
  const t = translations[lang].practicums;

  return (
    <section id="practicums" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-4">
            {t.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            {t.heading} <span className="gradient-text">{t.headingAccent}</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.body}</p>
        </div>

        {/* Practicum list */}
        <div className="space-y-4">
          {t.items.map((p, idx) => (
            <div
              key={p.code}
              className="card-glass rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Index & code */}
                <div className="flex items-center gap-4 md:w-24 shrink-0">
                  <span className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 font-mono text-sm font-medium">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-slate-600 font-mono text-xs">{p.code}</span>
                </div>

                {/* Main content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display font-semibold text-white text-xl">{p.title}</h3>
                    <span className={`px-2.5 py-0.5 rounded-full border text-xs font-medium ${LEVEL_COLORS[p.level] ?? "text-slate-400 bg-white/5 border-white/10"}`}>
                      {p.level}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.topics.map((topic) => (
                      <span key={topic} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sessions */}
                <div className="md:text-right shrink-0">
                  <div className="flex items-center gap-2 md:justify-end text-slate-500 text-sm">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {p.sessions} {t.sessions}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
