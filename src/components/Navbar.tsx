import React, { useState, useEffect } from "react";
import { useLanguage, buildLangUrl, type Language } from "../context/LanguageContext";
import { translations } from "../contents/translations";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].nav;

  function switchLang(targetLang: Language) {
    const url = buildLangUrl(targetLang, window.location.pathname);
    window.location.href = url;
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.about, href: "#about" },
    { label: t.research, href: "#research" },
    { label: t.practicums, href: "#practicums" },
    { label: t.projects, href: "#projects" },
    { label: t.members, href: "#members" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-lg border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm font-display shadow-lg group-hover:shadow-cyan-500/40 transition-shadow duration-300">
            B401
          </div>
          <span className="font-display font-semibold text-white text-sm hidden sm:block leading-tight whitespace-pre-line">
            {t.labName}
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center rounded-lg border border-white/15 bg-white/5 overflow-hidden">
            <button
              id="lang-en-btn"
              onClick={() => switchLang("en")}
              className={`px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                lang === "en"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              EN
            </button>
            <div className="w-px h-4 bg-white/15" />
            <button
              id="lang-id-btn"
              onClick={() => switchLang("id")}
              className={`px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                lang === "id"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ID
            </button>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:opacity-90 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            {t.joinUs}
          </a>
        </div>

        {/* Mobile: lang + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          {/* Language Switcher (mobile) */}
          <div className="flex items-center rounded-lg border border-white/15 bg-white/5 overflow-hidden">
            <button
              id="lang-en-btn-mobile"
              onClick={() => switchLang("en")}
              className={`px-2.5 py-1 text-xs font-semibold transition-all duration-200 ${
                lang === "en"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : "text-slate-400"
              }`}
            >
              EN
            </button>
            <div className="w-px h-3.5 bg-white/15" />
            <button
              id="lang-id-btn-mobile"
              onClick={() => switchLang("id")}
              className={`px-2.5 py-1 text-xs font-semibold transition-all duration-200 ${
                lang === "id"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : "text-slate-400"
              }`}
            >
              ID
            </button>
          </div>

          {/* Hamburger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-slate-900/95 backdrop-blur-lg border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-3 text-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium"
          >
            {t.joinUs}
          </a>
        </div>
      </div>
    </header>
  );
}
