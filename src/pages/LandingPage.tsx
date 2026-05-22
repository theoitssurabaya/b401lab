import React from "react";
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
import { LanguageProvider } from "../context/LanguageContext";

export function LandingPage() {
  return (
    <LanguageProvider>
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
