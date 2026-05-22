import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../contents/translations";

export function EquipmentSection() {
  const { lang } = useLanguage();
  const t = translations[lang].equipment;

  return (
    <section id="equipment" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
            {t.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            {t.heading} <span className="gradient-text">{t.headingAccent}</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.body}</p>
        </div>

        {/* Equipment grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {t.items.map((item) => (
            <div
              key={item.name}
              className="card-glass rounded-2xl p-5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/8 transition-all duration-300 group text-center"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="font-medium text-white text-sm leading-snug mb-1">{item.name}</div>
              <div className="text-slate-500 text-xs">{item.category}</div>
            </div>
          ))}
        </div>

        {/* Lab features */}
        <div className="card-glass rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.labFeatures.map((feat) => (
              <div key={feat.title} className="text-center">
                <div className="text-3xl mb-2">{feat.icon}</div>
                <div className="font-display font-bold text-3xl gradient-text mb-1">{feat.value}</div>
                <div className="text-white font-medium text-sm mb-1">{feat.title}</div>
                <div className="text-slate-500 text-xs">{feat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
