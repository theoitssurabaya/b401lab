import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../contents/translations";
import { handleHeroHeading } from "../contents/HeroContent/handleHeading";

export function HeroSection() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Solid background subtle grid pattern could go here, but keeping it clean for matte dark */}

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-zinc-100 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-zinc-600/10 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-zinc-200/50 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-zinc-400 animate-pulse" />
          {t.badge}
        </div>

        {/* Main heading */}
        {handleHeroHeading(lang)}

        {/* Tagline */}
        <p
          className="text-zinc-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.15s" }}
        >
          {t.tagline}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            to={`/${lang}/research`}
            id="hero-explore-btn"
            className="px-8 py-3.5 rounded-xl bg-zinc-900 text-white font-semibold hover:opacity-90 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            {t.exploreResearch}
          </Link>
          <Link
            to={`/${lang}/about`}
            id="hero-about-btn"
            className="px-8 py-3.5 rounded-xl border border-zinc-300 text-zinc-900 font-semibold hover:bg-zinc-100 hover:border-zinc-400 transition-all duration-300"
          >
            {t.aboutLab}
          </Link>
        </div>

        {/* Stats */}
        <div
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.45s" }}
        >
          {t.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-3xl text-zinc-900">{stat.value}</div>
              <div className="text-zinc-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
