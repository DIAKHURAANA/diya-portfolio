import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useMobile } from '../hooks/useMobile';

interface FaqItem {
  question: string;
  answer: string;
}

const faqsList: FaqItem[] = [
  {
    question: 'What software and tech stack do you use for 3D & UI/UX creation?',
    answer:
      'I specialize in Figma, Blender, Cinema 4D, Octane/Redshift, Framer, Webflow, React, WebGL/Three.js, and Adobe Creative Suite for video editing, motion graphics, and UI design.',
  },
  {
    question: 'How long does a typical digital design project take?',
    answer:
      'Single landing pages or brand visual assets take 3 to 7 business days. Full WebGL applications, custom 3D motion packages, or SaaS UI design systems range between 2 to 4 weeks.',
  },
  {
    question: 'Do you offer custom 3D web animation integration?',
    answer:
      'Yes! I deliver optimized 3D assets formatted specifically for WebGL, Three.js, Spline, or Lottie, maintaining 60fps performance across desktop and mobile devices.',
  },
  {
    question: 'What services are included in Ads, UGC & Social Media Management?',
    answer:
      'I craft high-converting video ad creatives, edit authentic UGC Reels/TikToks, optimize landing page CTA flows, and manage full social media channels with content strategy and grid design.',
  },
  {
    question: 'What is your pricing structure for brand design & WebGL projects?',
    answer:
      'Projects are structured either on a fixed project-based quote or retainer model depending on scope. Contact me directly with your brief to receive a custom proposal within 24 hours.',
  },
];

export const FaqSection: React.FC = () => {
  const isMobile = useMobile();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const cubicEase = [0.22, 1, 0.36, 1] as const;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative min-h-screen w-full py-28 px-6 sm:px-10 md:px-16 bg-transparent overflow-hidden border-t border-white/10 select-none"
    >
      {/* Background Ambient Gradient */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#C84B31]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: cubicEase }}
            className="flex items-center justify-center gap-3 mb-3"
          >
            <HelpCircle className="w-4 h-4 text-[#C84B31]" />
            <span className="font-syne text-xs uppercase tracking-[0.3em] text-[#C84B31] font-bold">
              ❓ FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: isMobile ? undefined : 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: cubicEase }}
            className="font-bebas text-5xl sm:text-6xl md:text-7xl uppercase tracking-wider text-[#F0E6D2] leading-none"
          >
            QUESTIONS & ANSWERS
          </motion.h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqsList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25, filter: isMobile ? undefined : 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: Math.min(index * 0.1, 0.3), ease: cubicEase }}
                className={`border border-white/15 rounded-2xl bg-black/40 md:backdrop-blur-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-l-4 border-l-[#C84B31] border-white/30 shadow-[0_0_30px_rgba(200,75,49,0.3)]' : 'hover:border-l-4 hover:border-l-[#C84B31]/60 hover:border-white/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center gap-4 cursor-pointer select-none min-h-[44px]"
                >
                  <span className="font-syne font-medium text-base sm:text-lg text-[#F0E6D2] tracking-wide">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#C84B31] shrink-0 transition-transform duration-300">
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: cubicEase }}
                    >
                      <div className="px-6 pb-6 pt-1 text-[#EAE0D5]/70 font-syne font-light text-xs sm:text-sm leading-relaxed border-t border-white/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
