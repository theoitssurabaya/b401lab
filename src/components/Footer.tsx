import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../contents/translations";

export function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;
  const navT = translations[lang].nav;
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: navT.about, href: "#about" },
    { label: navT.research, href: "#research" },
    { label: navT.practicums, href: "#practicums" },
    { label: navT.projects, href: "#projects" },
    { label: navT.members, href: "#members" },
    { label: navT.contact, href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm font-display">
                B401
              </div>
              <span className="font-display font-semibold text-white text-sm leading-tight whitespace-pre-line">
                {t.labName}
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">{t.tagline}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-slate-300 text-sm uppercase tracking-wider mb-4">
              {t.quickLinksLabel}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* University info */}
          <div>
            <h4 className="font-display font-semibold text-slate-300 text-sm uppercase tracking-wider mb-4">
              {t.institutionLabel}
            </h4>
            <div className="space-y-2 text-slate-500 text-sm">
              {t.institutionLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-2">
                <a
                  href="https://www.its.ac.id/komputer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:text-cyan-400 transition-colors duration-200"
                >
                  its.ac.id/komputer↗
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {year} {t.copyright}
          </p>
          <p className="text-slate-700 text-xs">{t.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
