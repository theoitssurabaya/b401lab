import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ResearchSection } from "../components/ResearchSection";
import { PracticumsSection } from "../components/PracticumsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { MembersSection } from "../components/MembersSection";
import { EquipmentSection } from "../components/EquipmentSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { LanguageProvider, SUPPORTED_LANGS, type Language } from "../context/LanguageContext";

export function LandingPage() {
  const { lang } = useParams<{ lang: string }>();

  // Redirect any unknown lang slug to English
  if (!lang || !SUPPORTED_LANGS.includes(lang as Language)) {
    return <Navigate to="/en" replace />;
  }

  const resolvedLang = lang as Language;

  return (
    <LanguageProvider lang={resolvedLang}>
      <div className="min-h-screen bg-slate-950">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ResearchSection />
          <PracticumsSection />
          <ProjectsSection />
          <MembersSection />
          <EquipmentSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
