import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Magnet } from './Magnet';
import { Sparkles, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cubicEase = [0.22, 1, 0.36, 1] as const;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setTilt({ x: -y, y: x });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const bulletPoints = [
    'Detail oriented',
    'Problem solver',
    'Minimal & modern',
    'Always learning',
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center bg-transparent px-6 sm:px-10 md:px-16 py-28 overflow-hidden border-t border-white/10 select-none"
    >
      {/* Background Cinematic Light Movement */}
      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [-30, 30, -30],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-10 w-96 h-96 bg-[#C84B31] rounded-full blur-[160px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN: Line-by-Line Reveal with Mask Wipe Title & 4 Red Bullets */}
        <motion.div
          initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: cubicEase }}
          className="lg:col-span-7 flex flex-col space-y-7"
        >
          {/* Tagline */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#C84B31]" />
            <span className="font-syne text-xs uppercase tracking-[0.3em] text-[#C84B31] font-bold">
              ABOUT DIA KHURANA
            </span>
          </div>

          {/* Mask Clip-Path Title Reveal */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', y: 30 }}
              whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: cubicEase }}
              className="font-bebas text-5xl sm:text-6xl md:text-7xl uppercase tracking-wider text-[#F0E6D2] leading-none"
            >
              CRAFTING <span className="font-cinzel text-[#C84B31] font-bold">DIGITAL EXPERIENCES</span> WITH PURPOSE & PASSION
            </motion.h2>
          </div>

          {/* Line-by-Line Progressive Scroll Reveal Text */}
          <div className="space-y-4 font-syne text-base sm:text-lg font-light text-[#EAE0D5]/90 leading-relaxed max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: cubicEase }}
            >
              I’m a UI/UX & Web Designer with a passion for minimal design, clean interfaces and seamless experiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35, ease: cubicEase }}
            >
              I believe great design is not just about how it looks, but how it works.
            </motion.p>
          </div>

          {/* 4 Red Bullet Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: cubicEase }}
            className="grid grid-cols-2 gap-4 pt-2"
          >
            {bulletPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4, ease: cubicEase }}
                className="p-4 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md flex items-center gap-3 hover:border-[#C84B31]/60 transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#C84B31] shadow-[0_0_10px_#C84B31] shrink-0" />
                <span className="font-syne text-xs sm:text-sm font-semibold text-[#F0E6D2] tracking-wider uppercase">
                  {point}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <div className="pt-3">
            <Magnet padding={80} strength={2.5}>
              <button
                onClick={onContactClick}
                className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-[#C84B31] hover:bg-[#b03d27] text-[#F0E6D2] font-syne text-xs uppercase tracking-widest font-bold transition-all shadow-[0_4px_20px_rgba(200,75,49,0.4)] cursor-pointer"
              >
                <span>LET&apos;S BUILD TOGETHER</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Magnet>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Floating Image with Zoom + Blur Fade-In + 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, x: 50, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: cubicEase }}
          className="lg:col-span-5 relative"
        >
          {/* Floating Loop Motion Container */}
          <motion.div
            animate={{ y: [0, -8, 0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="relative rounded-3xl overflow-hidden border border-white/20 bg-black/50 backdrop-blur-xl shadow-2xl group cursor-pointer"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img
                src="/about-me.jpg"
                alt="Dia Khurana Portrait"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-between">
              <div>
                <span className="font-syne text-[10px] uppercase tracking-widest text-[#C84B31] font-bold block">
                  DIGITAL CRAFTSMANSHIP
                </span>
                <h4 className="font-cinzel text-lg font-bold text-[#F0E6D2] mt-0.5">
                  INTUITIVE & BEAUTIFUL
                </h4>
              </div>
              <Sparkles className="w-6 h-6 text-[#C84B31] animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
