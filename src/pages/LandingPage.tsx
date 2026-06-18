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
  const { lang, section } = useParams<{ lang: string; section?: string }>();

  // Redirect any unknown lang slug to English
  if (!lang || !SUPPORTED_LANGS.includes(lang as Language)) {
    return <Navigate to="/en" replace />;
  }

  const resolvedLang = lang as Language;

  return (
    <LanguageProvider lang={resolvedLang}>
      <div className="min-h-screen bg-slate-50 relative overflow-hidden">
        {/* Subtle, cool-toned background blobs for glassmorphism to blur */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-200/40 blur-[100px] animate-float pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-200/40 blur-[120px] animate-float pointer-events-none" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-teal-200/40 blur-[80px] animate-float pointer-events-none" style={{ animationDelay: "4s" }} />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 pt-24">
            <div key={section || "home"} className="animate-fade-in">
              {(!section || section === "home") && <HeroSection />}
              {section === "about" && <AboutSection />}
              {section === "research" && <ResearchSection />}
              {section === "practicums" && <PracticumsSection />}
              {section === "projects" && <ProjectsSection />}
              {section === "members" && <MembersSection />}
              {section === "equipment" && <EquipmentSection />}
              {section === "contact" && <ContactSection />}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
