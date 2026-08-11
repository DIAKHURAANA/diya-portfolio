import React, { useState } from 'react';
import { ScrollBackground } from './components/ScrollBackground';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { FeaturedProjectSection } from './components/FeaturedProjectSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ReviewSection } from './components/ReviewSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-syne overflow-x-clip relative">
      {/* Scroll-Driven 3D Frame Animation Background */}
      <ScrollBackground />

      <div className="relative z-10">
        {/* 1. HERO SECTION */}
        <HeroSection onContactClick={handleOpenModal} />

        {/* 2. LATEST PROJECTS SECTION (Marquee Showcase) */}
        <MarqueeSection />

        {/* 3. WORK & FEATURED PROJECTS SECTION */}
        <ProjectsSection />

        {/* 4. PROCESS SECTION (JUST ABOVE COMMERCIAL ADS & BRANDING) */}
        <ProcessSection />

        {/* 5. COMMERCIAL ADS & BRANDING (FLAGSHIP SHOWCASE) */}
        <FeaturedProjectSection onOpenModal={handleOpenModal} />

        {/* 6. SERVICE SECTION */}
        <ServicesSection />

        {/* 7. ABOUT SECTION */}
        <AboutSection onContactClick={handleOpenModal} />

        {/* 8. REVIEWS SECTION */}
        <ReviewSection />

        {/* 9. FAQS SECTION */}
        <FaqSection />

        {/* 10. CONTACT SECTION & FOOTER */}
        <ContactSection />

        {/* Contact Form Modal */}
        <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default App;

