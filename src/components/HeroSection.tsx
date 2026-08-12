import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Palette, Video, Megaphone, Layers, Sparkles, User, Mail, ArrowDown } from 'lucide-react';
import { Magnet } from './Magnet';
import { useMobile } from '../hooks/useMobile';

interface HeroSectionProps {
  onContactClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const isMobile = useMobile();
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : 50]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  // 6 Portfolio Branding Indicators
  const skillIcons = [
    { icon: Globe, label: 'Web Design' },
    { icon: Palette, label: 'UI/UX Design' },
    { icon: Video, label: 'Video Editing' },
    { icon: Megaphone, label: 'Ads / Marketing' },
    { icon: Layers, label: 'Brand Design' },
    { icon: Sparkles, label: 'Creativity & Innovation' },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-x-clip bg-transparent pt-5 pb-6 px-5 sm:px-8 md:px-12 select-none">
      {/* Glowing Cursor Follow Light Effect (Dual Ring) - Hidden on Mobile for GPU smoothness */}
      {!isMobile && (
        <>
          <div
            className="pointer-events-none fixed z-20 w-[480px] h-[480px] rounded-full bg-gradient-to-r from-[#C84B31]/30 via-rose-600/20 to-purple-700/25 blur-3xl transition-transform duration-75 ease-out opacity-90"
            style={{
              transform: `translate3d(${cursorPos.x - 240}px, ${cursorPos.y - 240}px, 0)`,
            }}
          />
          <div
            className="pointer-events-none fixed z-20 w-44 h-44 rounded-full bg-[#C84B31]/40 blur-2xl transition-transform duration-100 ease-out opacity-75"
            style={{
              transform: `translate3d(${cursorPos.x - 88}px, ${cursorPos.y - 88}px, 0)`,
            }}
          />
        </>
      )}

      {/* Grain & Dark Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,12,0.9)_100%)] pointer-events-none z-10" />

      {/* Top Header / Nav Bar */}
      <header className="relative z-30 flex flex-wrap justify-between items-center w-full gap-4 pb-2">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 group cursor-pointer">
            <img
              src="/logo-emblem.png"
              alt="MOTIONMUSE Logo Emblem"
              loading="lazy"
              className="h-8 sm:h-9 w-auto object-contain drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-xs sm:text-sm font-syne uppercase tracking-[0.25em] text-[#EAE0D5]/90 font-bold group-hover:text-white transition-colors">
              MOTIONMUSE.DESIGN
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 ml-6 border-l border-white/10 pl-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#EAE0D5]/80 font-syne uppercase tracking-wider text-xs hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#C84B31]/30 bg-[#C84B31]/10 md:backdrop-blur-md text-[#EAE0D5] text-xs font-syne uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#C84B31] animate-pulse shadow-[0_0_8px_#C84B31]" />
          <span>AVAILABLE FOR FREELANCE</span>
        </div>
      </header>

      {/* Main Content Grid (Left & Right Column) */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end max-w-7xl mx-auto w-full my-auto pt-10 sm:pt-16 pb-6"
      >
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -30, filter: isMobile ? undefined : 'blur(8px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 flex flex-col justify-end space-y-5"
        >
          {/* Category Title */}
          <div>
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider text-[#F0E6D2] leading-none mb-3">
              UI / UX / WEB
            </h2>
            <div className="flex flex-col space-y-1 font-syne text-xs uppercase tracking-[0.2em] text-[#F0E6D2]/70 font-semibold">
              <span>USER EXPERIENCE</span>
              <span>USER INTERFACE</span>
              <span>WEB DESIGN</span>
            </div>
          </div>

          <div className="w-12 border-t border-[#C84B31]/60 my-2" />

          {/* Red Quote Block */}
          <div className="space-y-2">
            <span className="font-cinzel text-3xl font-bold text-[#C84B31] leading-none block">
              &ldquo;
            </span>
            <p className="font-syne text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F0E6D2]/90 leading-relaxed max-w-sm">
              I DESIGN DIGITAL EXPERIENCES THAT ARE INTUITIVE, BEAUTIFUL AND IMPACTFUL.
            </p>
            {/* Digital Signature */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-3 flex flex-col items-start select-none"
            >
              <div className="relative group flex flex-col">
                {/* Handwritten Calligraphy Signature */}
                <span className="font-signature text-3xl sm:text-4xl text-[#F0E6D2] tracking-wider leading-none drop-shadow-[0_2px_12px_rgba(200,75,49,0.35)] group-hover:text-white transition-colors py-1">
                  Dia Khurana
                </span>
                
                {/* Animated Red Flourish Underline SVG */}
                <svg className="w-40 h-4 -mt-1 pointer-events-none" viewBox="0 0 140 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                    d="M 5 10 C 35 2, 70 14, 115 6 C 128 4, 135 12, 105 13"
                    stroke="#C84B31"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="flex items-center gap-2 pt-1.5 opacity-90">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31] animate-ping" />
                <span className="font-syne text-[9px] uppercase tracking-[0.25em] text-[#C84B31] font-bold">
                  DIGITAL SIGNATURE
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: 30, filter: isMobile ? undefined : 'blur(8px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-6 flex flex-col justify-end space-y-4 text-left"
        >
          {/* Decorative Stamp / Circular Badge */}
          <div className="flex justify-start mb-1">
            <div className="w-10 h-10 rounded-full border border-dashed border-[#C84B31]/60 flex items-center justify-center text-[#C84B31]">
              <Sparkles className="w-5 h-5 animate-spin-slow" />
            </div>
          </div>

          {/* Name in Cinzel */}
          <div>
            <h3 className="font-cinzel text-4xl sm:text-5xl font-bold uppercase tracking-tight text-[#F0E6D2] leading-tight">
              DIA<br />KHURANA
            </h3>
            <p className="font-syne text-xs uppercase tracking-[0.25em] text-[#C84B31] font-bold mt-1">
              UI/UX & WEB DESIGNER
            </p>
          </div>

          {/* Description */}
          <p className="font-syne text-xs font-light text-[#EAE0D5]/70 leading-relaxed max-w-sm">
            I’m a digital designer crafting clean, modern and user-focused designs. I help brands communicate, engage and grow through thoughtful design solutions.
          </p>

          <div className="w-full border-t border-white/10 my-2" />

          {/* 3 Stats Row */}
          <div className="grid grid-cols-3 gap-3 pt-1">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#F0E6D2]">
                <User className="w-3.5 h-3.5 text-[#C84B31]" />
                <span className="font-cinzel text-lg sm:text-xl font-bold">4+</span>
              </div>
              <span className="font-syne text-[9px] uppercase tracking-wider text-[#EAE0D5]/60 font-semibold mt-0.5">
                YEARS EXPERIENCE
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#F0E6D2]">
                <Mail className="w-3.5 h-3.5 text-[#C84B31]" />
                <span className="font-cinzel text-lg sm:text-xl font-bold">28+</span>
              </div>
              <span className="font-syne text-[9px] uppercase tracking-wider text-[#EAE0D5]/60 font-semibold mt-0.5">
                PROJECTS COMPLETED
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#F0E6D2]">
                <User className="w-3.5 h-3.5 text-[#C84B31]" />
                <span className="font-cinzel text-lg sm:text-xl font-bold">12+</span>
              </div>
              <span className="font-syne text-[9px] uppercase tracking-wider text-[#EAE0D5]/60 font-semibold mt-0.5">
                HAPPY CLIENTS
              </span>
            </div>
          </div>

          {/* Magnetic CTA Button with Ripple Glow Animation */}
          <div className="pt-3 w-full">
            <Magnet padding={100} strength={2.5} className="w-full">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onContactClick}
                className="relative group overflow-hidden w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C84B31] via-[#d8482b] to-[#b03d27] text-[#F0E6D2] font-syne text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-[0_4px_25px_rgba(200,75,49,0.5)] hover:shadow-[0_0_40px_rgba(200,75,49,0.95)] cursor-pointer border border-white/20"
              >
                {/* Expanding Ripple Glow Effect on Hover */}
                <span className="absolute inset-0 w-full h-full bg-white/25 rounded-xl scale-0 group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none opacity-0 group-hover:opacity-100" />
                {/* Soft Radial Ambient Glow */}
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>GET IN TOUCH</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-sans">&rarr;</span>
                </span>
              </motion.button>
            </Magnet>
          </div>
        </motion.div>
      </motion.div>

      {/* 🔻 HERO SECTION – BOTTOM ICON STRIP */}
      <div className="relative z-30 w-full pt-4 pb-2 mt-4">
        {/* Top Border Line with Gradient Fade */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#F0E6D2]/30 to-transparent mb-5" />

        {/* Horizontal Row of Minimal Icons */}
        <div className="flex flex-wrap items-center justify-between sm:justify-around gap-4 px-2 max-w-6xl mx-auto">
          {skillIcons.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{
                  opacity: 0.6,
                  y: 0,
                  x: isMobile ? 0 : [0, 2.5, 0, -2.5, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.1 * index },
                  y: { duration: 0.6, delay: 0.1 * index },
                  x: isMobile ? { duration: 0 } : { duration: 4 + index * 0.5, repeat: Infinity, ease: 'easeInOut' },
                }}
                whileHover={{
                  scale: 1.1,
                  opacity: 1,
                  transition: { duration: 0.3, ease: 'easeInOut' },
                }}
                className="group relative flex items-center gap-2 cursor-pointer py-1 px-2.5 rounded-lg transition-all duration-300 hover:bg-white/5"
              >
                {/* Minimal Outline Icon with Hover Glow */}
                <IconComponent
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#F0E6D2] opacity-80 group-hover:opacity-100 group-hover:text-white transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(200,75,49,0.9)]"
                  strokeWidth={1.6}
                />

                {/* Subtle Monoline Skill Label */}
                <span className="font-syne text-[10px] sm:text-xs uppercase tracking-widest text-[#EAE0D5]/70 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-all duration-300 font-medium whitespace-nowrap">
                  {item.label}
                </span>

                {/* Subtle Hover Indicator Dot */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C84B31] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_6px_#C84B31]" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-30 flex justify-center pt-3">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-[#EAE0D5]/60 hover:text-white text-[10px] font-syne uppercase tracking-widest transition-colors cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-[#C84B31]" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

