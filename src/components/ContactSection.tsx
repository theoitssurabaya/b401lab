import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../contents/translations";

const CONTACT_ICONS = [
  // Location
  <svg key="loc" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>,
  // Email
  <svg key="email" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>,
  // Clock
  <svg key="clock" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export function ContactSection() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  const contactItems = [
    { label: t.locationLabel, value: t.locationValue },
    { label: t.emailLabel, value: t.emailValue },
    { label: t.hoursLabel, value: t.hoursValue },
  ];

  return (
    <section id="contact" className="section-padding bg-slate-900/50">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact info */}
          <div className="space-y-5">
            {contactItems.map((item, idx) => (
              <div
                key={item.label}
                className="card-glass rounded-2xl p-6 border border-white/10 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  {CONTACT_ICONS[idx]}
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-white text-sm whitespace-pre-line leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="card-glass rounded-2xl p-8 border border-white/10">
            <h3 className="font-display font-semibold text-white text-xl mb-6">{t.formTitle}</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-slate-400 text-sm mb-1.5">
                    {t.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder={t.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-slate-400 text-sm mb-1.5">
                    {t.emailFormLabel}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder={t.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-slate-400 text-sm mb-1.5">
                  {t.subjectLabel}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder={t.subjectPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-slate-400 text-sm mb-1.5">
                  {t.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder={t.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                />
              </div>
              <button
                id="contact-submit-btn"
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                {t.sendBtn}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
