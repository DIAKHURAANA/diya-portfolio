import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Globe, Video, Palette, Megaphone, Film, Share2, ArrowUpRight } from 'lucide-react';
import { useMobile } from '../hooks/useMobile';
import { useInView } from '../hooks/useInView';

interface SkillService {
  id: string;
  icon: React.ElementType;
  title: string;
  category: string;
  description: string;
  tag: string;
}

const servicesList: SkillService[] = [
  {
    id: '01',
    icon: Layout,
    title: 'UI/UX Design',
    category: 'PRODUCT & INTERFACE',
    description: 'User-centered web and mobile application interfaces, interactive prototypes, design systems, and wireframing.',
    tag: 'Figma • User Flow • Prototyping',
  },
  {
    id: '02',
    icon: Globe,
    title: 'Web Design & Dev',
    category: 'DIGITAL EXPERIENCES',
    description: 'High-conversion, responsive websites built with Framer, Webflow, React, 3D WebGL, and custom micro-interactions.',
    tag: 'Responsive • Framer • 3D Web',
  },
  {
    id: '03',
    icon: Video,
    title: 'Video Editing & Motion',
    category: 'CINEMATIC CONTENT',
    description: 'High-impact promotional video editing, motion graphics, 3D product visualizers, and sound design for brands.',
    tag: 'After Effects • Premiere • 3D',
  },
  {
    id: '04',
    icon: Palette,
    title: 'Brand Identity',
    category: 'VISUAL STRATEGY',
    description: 'Comprehensive brand systems, typography, color palettes, logo design, and strategic visual guidelines.',
    tag: 'Logos • Brand Guidelines • Assets',
  },
  {
    id: '05',
    icon: Megaphone,
    title: 'Ads & Marketing',
    category: 'PERFORMANCE CREATIVES',
    description: 'High-performing social media ad campaigns, creative direction, landing page optimization, and conversion assets.',
    tag: 'Meta Ads • TikTok • Conversion',
  },
  {
    id: '06',
    icon: Film,
    title: 'UGC Videos',
    category: 'CREATOR CONTENT',
    description: 'Authentic user-generated video content, product demonstrations, and relatable short-form video campaigns.',
    tag: 'Reels • TikTok • Short Form',
  },
  {
    id: '07',
    icon: Share2,
    title: 'Social Media Management',
    category: 'COMMUNITY & GROWTH',
    description: 'End-to-end social channel management, content calendar creation, visual grid curation, and engagement strategy.',
    tag: 'Instagram • Content Strategy • Growth',
  },
];

// Custom High-Res Vector Logos for the 5 Tools
const ToolLogos: Record<string, React.FC> = {
  'Framer Motion': () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#0055FF] group-hover:scale-110 transition-transform">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
  ),
  'Adobe Photoshop': () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 group-hover:scale-110 transition-transform">
      <rect width="24" height="24" rx="5" fill="#001E36" stroke="#31A8FF" strokeWidth="1.5" />
      <text x="4" y="16" fill="#31A8FF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Ps</text>
    </svg>
  ),
  'Adobe XD': () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 group-hover:scale-110 transition-transform">
      <rect width="24" height="24" rx="5" fill="#2E001F" stroke="#FF61F6" strokeWidth="1.5" />
      <text x="4" y="16" fill="#FF61F6" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Xd</text>
    </svg>
  ),
  'Adobe Illustrator': () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 group-hover:scale-110 transition-transform">
      <rect width="24" height="24" rx="5" fill="#330000" stroke="#FF9A00" strokeWidth="1.5" />
      <text x="5" y="16" fill="#FF9A00" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Ai</text>
    </svg>
  ),
  'Webflow': () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#146EF5] group-hover:scale-110 transition-transform">
      <path d="M16.7 4.2L12.3 15.6L8 4.2H3.5L9.9 20H14.7L21.1 4.2H16.7Z" />
    </svg>
  ),
};

const toolsList = [
  {
    name: 'Framer Motion',
    category: 'Animation & Physics Engine',
    badge: '3D / React',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg',
  },
  {
    name: 'Adobe Photoshop',
    category: 'Raster Visuals & Editing',
    badge: 'Design & Retouch',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
  },
  {
    name: 'Adobe XD',
    category: 'UI/UX Prototyping & Layout',
    badge: 'UX / UI Suite',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg',
  },
  {
    name: 'Adobe Illustrator',
    category: 'Vector Graphics & Logos',
    badge: 'Branding Suite',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg',
  },
  {
    name: 'Webflow',
    category: 'Visual Web Development',
    badge: 'Web Builder',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/webflow-1.svg',
  },
];

export const ServicesSection: React.FC = () => {
  const isMobile = useMobile();
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.05 });
  const cubicEase = [0.22, 1, 0.36, 1] as const;
  const headingWords = ["WHAT", "I", "HELP", "YOU", "SHAPE"];
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const handleImageError = (toolName: string) => {
    setImageErrorMap((prev) => ({ ...prev, [toolName]: true }));
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative min-h-screen w-full py-28 px-6 sm:px-10 md:px-16 bg-transparent overflow-hidden border-t border-white/10 select-none"
    >
      {/* Slow Gradient Light Sweep Background - Paused on mobile */}
      {!isMobile && isInView && (
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(200, 75, 49, 0.15) 0%, transparent 60%)',
              'radial-gradient(circle at 80% 70%, rgba(200, 75, 49, 0.18) 0%, transparent 60%)',
              'radial-gradient(circle at 20% 30%, rgba(200, 75, 49, 0.15) 0%, transparent 60%)',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 pointer-events-none"
        />
      )}

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        {/* Main Grid: Left Heading + Right Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: Heading & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: cubicEase }}
            className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#C84B31]" />
              <span className="font-syne text-xs uppercase tracking-[0.3em] text-[#C84B31] font-bold">
                CAPABILITIES & SERVICES
              </span>
            </div>

            {/* Word-by-Word Typewriter/Fade Hybrid Reveal Heading */}
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {headingWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 30, filter: isMobile ? undefined : 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: Math.min(index * 0.1, 0.3),
                    ease: cubicEase,
                  }}
                  className={`font-bebas text-5xl sm:text-6xl md:text-7xl uppercase tracking-wider leading-none ${
                    word === 'SHAPE' ? 'text-[#C84B31] drop-shadow-[0_0_20px_rgba(200,75,49,0.8)]' : 'text-[#F0E6D2]'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Thin Subtext with Red Highlights */}
            <p className="font-syne text-sm font-light text-[#EAE0D5]/80 leading-relaxed max-w-md">
              I partner with founders and brands to craft <span className="text-[#C84B31] font-semibold">high-converting digital experiences</span>, photorealistic 3D motion, and scalable brand identities that <span className="text-[#C84B31] font-semibold">drive measurable growth</span>.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 md:backdrop-blur-md max-w-sm">
              <span className="font-cinzel text-sm font-bold text-[#F0E6D2] block">END-TO-END CREATIVE EXCELLENCE</span>
              <span className="font-syne text-xs text-[#EAE0D5]/60 block mt-1">Strategy &bull; Design &bull; Motion &bull; Performance</span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Glass Cards */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            {servicesList.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: isMobile ? 0 : 60, y: isMobile ? 20 : 0, filter: isMobile ? undefined : 'blur(8px)' }}
                  whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.8,
                    delay: Math.min(index * 0.08, 0.3),
                    ease: cubicEase,
                  }}
                  whileHover={{
                    x: isMobile ? 0 : 8,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                  className="group relative rounded-2xl p-6 sm:p-7 bg-black/40 md:backdrop-blur-xl border border-white/15 hover:border-[#C84B31]/80 transition-all duration-300 shadow-xl overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C84B31]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="flex items-start justify-between gap-4 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-[#C84B31] group-hover:bg-[#C84B31] group-hover:text-white transition-all duration-300 shadow-md shrink-0">
                        <IconComponent className="w-6 h-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-transform" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-syne text-[10px] uppercase tracking-[0.25em] text-[#C84B31] font-bold">
                            {service.category}
                          </span>
                          <span className="text-[#EAE0D5]/30 text-xs">&bull;</span>
                          <span className="font-syne text-[10px] uppercase tracking-wider text-[#EAE0D5]/50">
                            {service.tag}
                          </span>
                        </div>
                        
                        <h3 className="font-bebas text-2xl uppercase tracking-wide text-[#F0E6D2] group-hover:text-white transition-colors mt-0.5">
                          {service.title}
                        </h3>

                        <p className="font-syne text-xs font-light text-[#EAE0D5]/70 leading-relaxed mt-1.5">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-[#C84B31] group-hover:bg-white/15 transition-all shrink-0">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 🛠️ TOOLS I USE SECTION */}
        <div className="pt-16 border-t border-white/15">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: cubicEase }}
                className="flex items-center gap-3 mb-2"
              >
                <span className="w-8 h-[2px] bg-[#C84B31]" />
                <span className="font-syne text-xs uppercase tracking-[0.3em] text-[#C84B31] font-bold">
                  SOFTWARE & AI STACK
                </span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: cubicEase }}
                className="font-bebas text-4xl sm:text-5xl uppercase tracking-wider text-[#F0E6D2] leading-none"
              >
                TOOLS I USE DAILY
              </motion.h3>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: cubicEase }}
              className="font-syne text-xs font-light text-[#EAE0D5]/70 max-w-md"
            >
              Leveraging state-of-the-art design engines, vector suites, 3D motion, and generative AI platforms.
            </motion.p>
          </div>

          {/* 5 Tools Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {toolsList.map((tool, i) => {
              const VectorLogo = ToolLogos[tool.name];
              const isFailed = imageErrorMap[tool.name];

              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: Math.min(i * 0.1, 0.3), ease: cubicEase }}
                  whileHover={{
                    y: isMobile ? 0 : -6,
                    scale: isMobile ? 1 : 1.04,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                  className="group relative rounded-2xl p-5 bg-black/50 md:backdrop-blur-xl border border-white/15 hover:border-[#C84B31] shadow-xl hover:shadow-[0_0_30px_rgba(200,75,49,0.6)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-5">
                    {/* Tool Picture Logo Frame with SVG Vector Fallback */}
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 p-2 flex items-center justify-center group-hover:bg-[#C84B31]/20 group-hover:border-[#C84B31] transition-all shadow-md shrink-0">
                      {!isFailed ? (
                        <img
                          src={tool.logoUrl}
                          alt={tool.name}
                          loading="lazy"
                          onError={() => handleImageError(tool.name)}
                          className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <VectorLogo />
                      )}
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-syne uppercase tracking-wider text-[#EAE0D5]/70 font-semibold group-hover:text-white transition-colors">
                      {tool.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-syne font-bold text-sm text-[#F0E6D2] group-hover:text-white transition-colors">
                      {tool.name}
                    </h4>
                    <p className="font-syne text-[10px] font-light text-[#EAE0D5]/60 mt-1 leading-snug">
                      {tool.category}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

