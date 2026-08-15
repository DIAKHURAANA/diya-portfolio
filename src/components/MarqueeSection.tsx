import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMobile } from '../hooks/useMobile';
import { useInView } from '../hooks/useInView';
import { LazyVideo } from './LazyVideo';

interface MarqueeProject {
  title: string;
  tag: string;
  image?: string;
  video?: string;
}

const marqueeProjects: MarqueeProject[] = [
  { title: "FEATURED MOTION #01", tag: "Featured Reel", video: "/videos/featured_clip_01.mp4" },
  { title: "FEATURED MOTION #02", tag: "Brand Reel", video: "/videos/featured_clip_02.mp4" },
  { title: "PRODUCT ADS", tag: "Product Ads", video: "/videos/smartphone_product_ad.mp4" },
  { title: "MOTION", tag: "Motion", video: "/videos/showcase_05.mp4" },
  { title: "MOTION SHOWCASE #01", tag: "Recent Motion", video: "/videos/recent_motion_01.mp4" },
  { title: "MOTION SHOWCASE #02", tag: "Commercial Motion", video: "/videos/recent_motion_02.mp4" },
  { title: "MOTION SHOWCASE #03", tag: "Creative Reel", video: "/videos/recent_motion_03.mp4" },
  { title: "MOTION SHOWCASE #04", tag: "Brand Motion", video: "/videos/recent_motion_04.mp4" },
  { title: "CYBERMETRICS 3D WEB", tag: "3D Motion Web", image: "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif" },
  { title: "NEBULA 3D EXPERIENCE", tag: "WebGL 3D Site", image: "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif" },
  { title: "UGC VIRAL BRAND REEL", tag: "UGC Reel", video: "/videos/ugc_video_01.mp4" },
  { title: "KINETIC 3D PORTFOLIO", tag: "3D Interactive", image: "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif" },
  { title: "UGC PRODUCT PERFORMANCE AD", tag: "UGC Video", video: "/videos/ugc_video_02.mp4" },
  { title: "QUANTUM 3D STUDIO", tag: "3D Motion Web", image: "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif" },
];

const row1Items = [...marqueeProjects, ...marqueeProjects];
const row2Items = [...marqueeProjects.slice().reverse(), ...marqueeProjects.slice().reverse()];

export const MarqueeSection: React.FC = () => {
  const isMobile = useMobile();
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const [scrollOffset, setScrollOffset] = useState(0);
  const cubicEase = [0.22, 1, 0.36, 1] as const;

  useEffect(() => {
    if (!isInView) return;

    let ticking = false;
    let animId: number | null = null;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      animId = requestAnimationFrame(() => {
        if (sectionRef.current) {
          const sectionTop = sectionRef.current.offsetTop;
          const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.25;
          setScrollOffset(offset);
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isInView, sectionRef]);

  const row1Transform = `translateX(${scrollOffset - 250}px)`;
  const row2Transform = `translateX(${-(scrollOffset - 250)}px)`;

  return (
    <section
      ref={sectionRef}
      className="relative bg-transparent pt-24 sm:pt-32 pb-16 overflow-hidden w-full border-t border-white/10 select-none"
    >
      {/* Background Subtle Ambient Light Shift */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#C84B31]/15 to-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <div className="px-6 md:px-12 mb-12 text-center max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: isMobile ? undefined : 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: cubicEase }}
          className="flex items-center justify-center gap-3 mb-3"
        >
          <span className="w-8 h-[2px] bg-[#C84B31]" />
          <span className="font-syne text-xs uppercase tracking-[0.3em] text-[#C84B31] font-bold">
            🚀 3D MOTION WEBSITES & RECENT SHOWCASES
          </span>
          <span className="w-8 h-[2px] bg-[#C84B31]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30, filter: isMobile ? undefined : 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: cubicEase }}
          className="font-bebas text-5xl sm:text-6xl md:text-7xl uppercase tracking-wider text-[#F0E6D2] leading-none"
        >
          EXPLORE RECENT SHOWCASES
        </motion.h2>
      </div>

      {/* Row 1: Moves RIGHT on scroll */}
      <div className="overflow-hidden w-full mb-6 md:perspective-[1000px]">
        <div
          className="flex gap-5 w-max"
          style={{
            transform: row1Transform,
            willChange: 'transform',
          }}
        >
          {row1Items.map((item, index) => (
            <motion.div
              key={`row1-${index}`}
              initial={{ opacity: 0, scale: 0.9, filter: isMobile ? undefined : 'blur(10px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: Math.min((index % 10) * 0.05, 0.3), ease: cubicEase }}
              whileHover={{
                scale: isMobile ? 1 : 1.06,
                rotateY: isMobile ? 0 : 5,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              className="group relative w-[320px] h-[200px] sm:w-[400px] sm:h-[250px] md:w-[450px] md:h-[280px] shrink-0 rounded-2xl overflow-hidden bg-black/50 border border-white/15 hover:border-[#C84B31] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(200,75,49,0.7)] transition-all duration-300 cursor-pointer"
            >
              {item.video ? (
                <LazyVideo
                  src={item.video}
                  isMobile={isMobile}
                  className="w-full h-full"
                  videoClassName="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-90 contrast-105"
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-90 contrast-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between z-10">
                <span className="font-bebas text-xl sm:text-2xl text-[#F0E6D2] group-hover:text-white transition-colors">
                  {item.title}
                </span>
                <span className="font-syne text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#C84B31] text-white font-bold shadow-md">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Row 2: Moves LEFT on scroll */}
      <div className="overflow-hidden w-full md:perspective-[1000px]">
        <div
          className="flex gap-5 w-max"
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
        >
          {row2Items.map((item, index) => (
            <motion.div
              key={`row2-${index}`}
              initial={{ opacity: 0, scale: 0.9, filter: isMobile ? undefined : 'blur(10px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: Math.min((index % 10) * 0.05, 0.3), ease: cubicEase }}
              whileHover={{
                scale: isMobile ? 1 : 1.06,
                rotateY: isMobile ? 0 : -5,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              className="group relative w-[320px] h-[200px] sm:w-[400px] sm:h-[250px] md:w-[450px] md:h-[280px] shrink-0 rounded-2xl overflow-hidden bg-black/50 border border-white/15 hover:border-[#C84B31] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(200,75,49,0.7)] transition-all duration-300 cursor-pointer"
            >
              {item.video ? (
                <LazyVideo
                  src={item.video}
                  isMobile={isMobile}
                  className="w-full h-full"
                  videoClassName="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-90 contrast-105"
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-90 contrast-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between z-10">
                <span className="font-bebas text-xl sm:text-2xl text-[#F0E6D2] group-hover:text-white transition-colors">
                  {item.title}
                </span>
                <span className="font-syne text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#C84B31] text-white font-bold shadow-md">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;


