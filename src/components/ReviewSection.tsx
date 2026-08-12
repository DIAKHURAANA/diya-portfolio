import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { useMobile } from '../hooks/useMobile';
import { useInView } from '../hooks/useInView';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  tag: string;
}

const testimonialsList: Testimonial[] = [
  {
    id: 1,
    name: 'Marcus Vance',
    role: 'Creative Director',
    company: 'Nextlevel Studio',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    quote: "Dia's 3D motion assets and UI/UX design transformed our entire brand launch. The speed, aesthetic direction, and technical execution exceeded all our expectations.",
    tag: '3D Modeling & Web UI',
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'Head of Product',
    company: 'Aura Digital',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    quote: "Working with Dia was an absolute dream. She brought photorealistic 3D visuals and responsive UI designs that boosted our landing page conversions by 140%.",
    tag: 'Web & Brand Identity',
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Founder & CEO',
    company: 'Solaris Systems',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    quote: "Exceptional craftsmanship! Dia has a rare ability to translate complex SaaS tech concepts into mind-blowing 3D interactive art and intuitive user flows.",
    tag: 'SaaS UX & WebGL',
  },
  {
    id: 4,
    name: 'Sophia Laurent',
    role: 'VP of Marketing',
    company: 'Lumen Cosmetics',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    quote: "The UGC video ad campaigns and video editing Dia delivered generated our highest ROI to date across Meta and TikTok ads. Highly recommended!",
    tag: 'Ads & UGC Video',
  },
];

export const ReviewSection: React.FC = () => {
  const isMobile = useMobile();
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.05 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cubicEase = [0.22, 1, 0.36, 1] as const;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  useEffect(() => {
    if (isInView && !isPaused) {
      timeoutRef.current = setTimeout(() => {
        handleNext();
      }, 5000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, isPaused, isInView]);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative min-h-screen w-full py-28 px-6 sm:px-10 md:px-16 bg-transparent overflow-hidden border-t border-white/10 select-none"
    >
      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C84B31]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: cubicEase }}
            className="flex items-center justify-center gap-3 mb-3"
          >
            <MessageSquare className="w-4 h-4 text-[#C84B31]" />
            <span className="font-syne text-xs uppercase tracking-[0.3em] text-[#C84B31] font-bold">
              💬 COMMENTS & CLIENT REVIEWS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: isMobile ? undefined : 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: cubicEase }}
            className="font-bebas text-5xl sm:text-6xl md:text-7xl uppercase tracking-wider text-[#F0E6D2] leading-none"
          >
            CLIENT TRUST & TESTIMONIALS
          </motion.h2>
        </div>

        {/* Featured Card + Slider Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -30 }}
              transition={{ duration: 0.7, ease: cubicEase }}
              whileHover={{ y: isMobile ? 0 : -6, transition: { duration: 0.3 } }}
              className="p-8 sm:p-12 rounded-3xl bg-black/50 md:backdrop-blur-xl border border-white/20 hover:border-[#C84B31]/70 shadow-[0_20px_50px_rgba(0,0,0,0.9)] hover:shadow-[0_0_40px_rgba(200,75,49,0.5)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Soft Ambient Corner Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C84B31]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex justify-between items-center mb-8 relative z-10">
                <div className="flex gap-1.5 text-amber-400">
                  {[...Array(testimonialsList[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <Quote className="text-[#C84B31] w-9 h-9 opacity-80" />
              </div>

              <span className="font-syne text-xs uppercase tracking-widest text-[#C84B31] font-bold block mb-4">
                {testimonialsList[activeIndex].tag}
              </span>

              {/* Quote Paragraph */}
              <p className="font-syne text-base sm:text-xl font-light text-[#F0E6D2] leading-relaxed italic mb-8 relative z-10">
                &ldquo;{testimonialsList[activeIndex].quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10 relative z-10">
                <img
                  src={testimonialsList[activeIndex].avatar}
                  alt={testimonialsList[activeIndex].name}
                  loading="lazy"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#C84B31]/60"
                />
                <div>
                  <h4 className="font-cinzel text-lg font-bold text-white relative inline-block">
                    <span className="text-[#C84B31] font-extrabold">{testimonialsList[activeIndex].name}</span>
                  </h4>
                  <p className="font-syne text-xs text-[#EAE0D5]/70 font-light mt-0.5">
                    {testimonialsList[activeIndex].role} &bull; <span className="text-white font-semibold">{testimonialsList[activeIndex].company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonialsList.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === i ? 'w-8 bg-[#C84B31]' : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all cursor-pointer hover:border-[#C84B31]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all cursor-pointer hover:border-[#C84B31]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;

