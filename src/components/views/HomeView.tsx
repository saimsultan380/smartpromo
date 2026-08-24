"use client";

import { useState } from "react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Services from "@/components/home/Services";
import AboutFirm from "@/components/home/AboutFirm";
import ROICalculator from "@/components/home/ROICalculator";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
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

      {/* Main Glassmorphic Sticky Header */}
      <Navbar onOpenConsultation={() => handleOpenConsultation("general-inquiry")} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section with Live KPI Badges & Boardroom Visual */}
        <Hero onOpenConsultation={() => handleOpenConsultation("cfo-advisory")} />

        {/* Certified Integrations & Financial Software Bar */}
        <TrustBar />

        {/* 4 Core Pillars Bento Grid */}
        <Services onSelectService={(serviceId) => handleOpenConsultation(serviceId)} />

        {/* About Firm & Comparison Matrix */}
        <AboutFirm onOpenConsultation={() => handleOpenConsultation("about-advisory")} />

        {/* Interactive Capital & Tax Savings ROI Estimator */}
        <ROICalculator onOpenConsultation={() => handleOpenConsultation("tax-optimization")} />

        {/* Transparent Solutions & Pricing Matrix with Frequency Toggle */}
        <Pricing onSelectTier={(tierId) => handleOpenConsultation(`tier-${tierId}`)} />

        {/* Client Success Stories & Verified Metrics */}
        <Testimonials />

        {/* Closing High-Impact Call to Action Banner */}
        <CtaBanner onOpenConsultation={() => handleOpenConsultation("cfo-advisory")} />
      </main>

      {/* Comprehensive Enterprise Footer */}
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
