import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../contents/translations";

const AREA_STYLES = [
  { color: "from-cyan-500 to-teal-500", badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30", accent: "border-cyan-500/30 hover:border-cyan-400/60" },
  { color: "from-violet-500 to-purple-600", badge: "bg-violet-500/10 text-violet-400 border-violet-500/30", accent: "border-violet-500/30 hover:border-violet-400/60" },
  { color: "from-blue-500 to-indigo-600", badge: "bg-blue-500/10 text-blue-400 border-blue-500/30", accent: "border-blue-500/30 hover:border-blue-400/60" },
  { color: "from-orange-500 to-amber-500", badge: "bg-orange-500/10 text-orange-400 border-orange-500/30", accent: "border-orange-500/30 hover:border-orange-400/60" },
  { color: "from-emerald-500 to-green-600", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30", accent: "border-emerald-500/30 hover:border-emerald-400/60" },
  { color: "from-rose-500 to-pink-600", badge: "bg-rose-500/10 text-rose-400 border-rose-500/30", accent: "border-rose-500/30 hover:border-rose-400/60" },
];

export function ResearchSection() {
  const { lang } = useLanguage();
  const t = translations[lang].research;

  return (
    <section id="research" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-medium mb-4">
            {t.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            {t.heading} <span className="gradient-text">{t.headingAccent}</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.body}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.areas.map((area, idx) => {
            const style = AREA_STYLES[idx];
            return (
              <div
                key={area.title}
                className={`card-glass rounded-2xl p-6 border transition-all duration-300 group cursor-default hover:-translate-y-1 hover:shadow-xl ${style!.accent}`}
              >
                {/* Gradient top bar */}
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${style!.color} mb-5 group-hover:w-full transition-all duration-500`} />

                <span className={`inline-block px-3 py-1 rounded-full border text-xs font-medium mb-3 ${style!.badge}`}>
                  {area.tag}
                </span>
                <h3 className="font-display font-semibold text-white text-xl mb-3 leading-snug">
                  {area.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{area.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
