import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, type Language } from "../context/LanguageContext";
import { translations } from "../contents/translations";
import Logo from "../assets/logo/Logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].nav;
  const navigate = useNavigate();
  const location = useLocation();
  const { section } = useParams<{ section?: string }>();
  const activeSection = section || "home";

  function switchLang(targetLang: Language) {
    // Swap the lang segment at the start of the path, keep everything else
    const newPath = location.pathname.replace(/^\/(en|id)/, `/${targetLang}`);
    navigate(newPath + location.search + location.hash);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "home" },
    { label: t.about, path: "about" },
    { label: t.research, path: "research" },
    { label: t.practicums, path: "practicums" },
    { label: t.projects, path: "projects" },
    { label: t.members, path: "members" },
    { label: t.contact, path: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${
        scrolled
          ? "bg-white/60 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to={`/${lang}`} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 group">
          <img 
            src={Logo} 
            alt="B401 Logo" 
            className="w-10 h-10 object-contain rounded-xl drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300"
          />
          <span className="font-display font-semibold text-zinc-900 text-sm hidden sm:block leading-tight whitespace-pre-line">
            {t.labName}
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={`/${lang}/${link.path === "home" ? "" : link.path}`}
                className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                  activeSection === link.path
                    ? "text-zinc-900 bg-zinc-100 font-medium"
                    : "text-zinc-700 hover:text-zinc-900 hover:bg-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: Lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center rounded-lg border border-white/15 bg-white overflow-hidden">
            <button
              id="lang-en-btn"
              onClick={() => switchLang("en")}
              className={`px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                lang === "en"
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-600 hover:text-zinc-900"
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
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              ID
            </button>
          </div>

          {/* CTA */}
          <Link
            to={`/${lang}/contact`}
            className="px-5 py-2 rounded-lg bg-zinc-900 text-white text-sm font-medium hover:opacity-90 hover:shadow-lg hover:shadow-black/50 transition-all duration-300"
          >
            {t.joinUs}
          </Link>
        </div>

        {/* Mobile: lang + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          {/* Language Switcher (mobile) */}
          <div className="flex items-center rounded-lg border border-white/15 bg-white overflow-hidden">
            <button
              id="lang-en-btn-mobile"
              onClick={() => switchLang("en")}
              className={`px-2.5 py-1 text-xs font-semibold transition-all duration-200 ${
                lang === "en"
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-600"
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
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-600"
              }`}
            >
              ID
            </button>
          </div>

          {/* Hamburger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-zinc-100 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-t border-zinc-200"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={`/${lang}/${link.path === "home" ? "" : link.path}`}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 text-sm rounded-lg transition-all duration-200 ${
                    activeSection === link.path
                      ? "text-zinc-900 bg-zinc-100 font-medium"
                      : "text-zinc-700 hover:text-zinc-900 hover:bg-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to={`/${lang}/contact`}
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-3 text-center rounded-lg bg-zinc-900 text-white text-sm font-medium"
              >
                {t.joinUs}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
