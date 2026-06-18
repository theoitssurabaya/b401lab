import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../contents/translations";
import { AnimatedCounter } from "./AnimatedCounter";
import robodogImg from "../assets/robots/robodog.png";

export function EquipmentSection() {
  const { lang } = useLanguage();
  const t = translations[lang].equipment;

  return (
    <section id="equipment" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in relative" style={{ animationDelay: "0.1s" }}>
          {/* Decorative images */}
          <div className="absolute top-0 right-0 w-48 md:w-64 opacity-40 hidden lg:block translate-x-1/4 pointer-events-none">
            <img src={robodogImg} alt="Robo Dog" className="w-full h-full object-contain animate-float" style={{ animationDelay: "1.5s" }} />
          </div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-sm font-medium mb-4">
            {t.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 mb-5">
            {t.heading} <span className="text-zinc-900">{t.headingAccent}</span>
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">{t.body}</p>
        </div>

        {/* Equipment grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {t.items.map((item, idx) => (
            <div
              key={item.name}
              className="card-glass rounded-2xl p-5 border border-zinc-200 hover:border-zinc-200 hover:bg-zinc-100 transition-all duration-300 group text-center animate-fade-in"
              style={{ animationDelay: `${0.2 + idx * 0.05}s` }}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="font-medium text-zinc-900 text-sm leading-snug mb-1">{item.name}</div>
              <div className="text-zinc-500 text-xs">{item.category}</div>
            </div>
          ))}
        </div>

        {/* Lab features */}
        <div className="card-glass rounded-2xl p-8 border border-zinc-200 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.labFeatures.map((feat) => (
              <div key={feat.title} className="text-center">
                <div className="text-3xl mb-2">{feat.icon}</div>
                <div className="font-display font-bold text-3xl text-zinc-900 mb-1"><AnimatedCounter value={feat.value} /></div>
                <div className="text-zinc-900 font-medium text-sm mb-1">{feat.title}</div>
                <div className="text-zinc-500 text-xs">{feat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
