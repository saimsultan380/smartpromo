"use client";

import { useState } from "react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutFirm from "@/components/home/AboutFirm";
import Pricing from "@/components/home/Pricing";
import CtaBanner from "@/components/home/CtaBanner";
import ConsultationModal from "@/components/ui/ConsultationModal";

export default function HomeView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("cfo-advisory");

  const handleOpenConsultation = (service: string = "cfo-advisory") => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Utility Bar */}
      <TopBar />

      {/* Main Sticky Header */}
      <Navbar onOpenConsultation={() => handleOpenConsultation("general-inquiry")} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with 3 Core Capability Cards */}
        <Hero onOpenConsultation={() => handleOpenConsultation("cfo-advisory")} />

        {/* 2. About Firm Section */}
        <AboutFirm onOpenConsultation={() => handleOpenConsultation("about-advisory")} />

        {/* 3. Scalable Financial Solutions & Transparent Pricing */}
        <Pricing onSelectTier={(tierId) => handleOpenConsultation(`tier-${tierId}`)} />

        {/* 4. Call to Action Banner */}
        <CtaBanner onOpenConsultation={() => handleOpenConsultation("cfo-advisory")} />
      </main>

      {/* Enterprise Footer */}
      <Footer />

      {/* Interactive Consultation / Quote Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
