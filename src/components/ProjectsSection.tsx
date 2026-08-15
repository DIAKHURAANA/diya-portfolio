import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, Volume2, VolumeX, X, Sparkles } from 'lucide-react';
import { useMobile } from '../hooks/useMobile';
import { LazyVideo } from './LazyVideo';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image?: string;
  video?: string;
  year: string;
  tag: string;
  description?: string;
}

const projectsList: ProjectItem[] = [
  {
    id: '01',
    title: 'FEATURED MOTION SHOWCASE #01',
    category: 'Creative Motion & Brand Video Production',
    video: '/videos/featured_clip_01.mp4',
    year: '2026',
    tag: 'Featured Motion • Commercial Reel',
    description: 'High-impact creative motion and commercial video campaign highlighting strategic visual editing and motion storytelling.',
  },
  {
    id: '02',
    title: 'FEATURED MOTION SHOWCASE #02',
    category: 'Visual Brand Strategy & Commercial Editing',
    video: '/videos/featured_clip_02.mp4',
    year: '2026',
    tag: 'Featured Motion • Brand Showcase',
    description: 'Dynamic video commercial showcasing visual brand identity, dynamic scene transitions, and creative content production.',
  },
  {
    id: '03',
    title: 'UGC VIRAL BRAND REEL #1',
    category: 'UGC Video Creation & Brand Commercial',
    video: '/videos/ugc_video_01.mp4',
    year: '2026',
    tag: 'UGC Video • TikTok & Reels',
    description: 'High-converting user generated video content designed for viral social reach and brand engagement across Instagram and TikTok.',
  },
  {
    id: '04',
    title: 'UGC PRODUCT PERFORMANCE AD #2',
    category: 'Product Showcase & Social Growth',
    video: '/videos/ugc_video_02.mp4',
    year: '2026',
    tag: 'UGC Commercial • Ad Creative',
    description: 'Dynamic product-focused UGC commercial showcasing authentic unboxing, performance testing, and direct consumer conversion storytelling.',
  },
  {
    id: '05',
    title: '3D MOTION WEBSITE #01',
    category: '3D WebGL & Interactive Motion',
    video: '/videos/featured_project_01.mp4',
    year: '2026',
    tag: '3D Motion Website',
    description: 'Immersive 3D motion website showcasing real-time WebGL physics, particle dynamics, and interactive visual storytelling.',
  },
  {
    id: '06',
    title: '3D MOTION WEBSITE #02',
    category: '3D Motion Graphics & Web Canvas',
    video: '/videos/featured_project_04.mp4',
    year: '2026',
    tag: '3D Motion Website',
    description: 'High-performance 3D interactive web showcase featuring fluid canvas animations, Three.js shaders, and modern brand aesthetics.',
  },
];

export const ProjectsSection: React.FC = () => {
  const isMobile = useMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<ProjectItem | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const cubicEase = [0.4, 0, 0.2, 1] as const;

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative min-h-screen w-full py-28 px-6 sm:px-10 md:px-16 bg-transparent overflow-hidden border-t border-white/10"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C84B31]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: cubicEase }}
              className="flex items-center gap-3 mb-3"
            >
              <span className="w-8 h-[2px] bg-[#C84B31]" />
              <span className="font-syne text-xs uppercase tracking-[0.3em] text-[#C84B31] font-bold">
                SELECTED PORTFOLIO WORK
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: cubicEase }}
              className="font-bebas text-5xl sm:text-6xl md:text-7xl uppercase tracking-wider text-[#F0E6D2] leading-none"
            >
              FEATURED PROJECTS
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: cubicEase }}
            className="font-syne text-xs sm:text-sm font-light text-[#EAE0D5]/70 max-w-md"
          >
            A curated showcase of recent digital projects spanning UGC video commercials, social ad strategy, UI/UX design, and 3D WebGL interfaces.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, filter: isMobile ? undefined : 'blur(12px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.9,
                delay: Math.min(index * 0.1, 0.3),
                ease: cubicEase,
              }}
              onClick={() => {
                if (project.video) {
                  setSelectedVideo(project);
                  setIsMuted(false);
                }
              }}
              className="group relative rounded-3xl overflow-hidden border border-white/15 bg-black/40 md:backdrop-blur-xl shadow-2xl cursor-pointer"
            >
              {/* Media Preview: Video or Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                {project.video ? (
                  <LazyVideo
                    src={project.video}
                    isMobile={isMobile}
                    className="w-full h-full"
                    videoClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-95 contrast-105"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-90 contrast-105"
                  />
                )}

                {/* Video Indicator Badge */}
                {project.video && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 border border-[#C84B31]/60 md:backdrop-blur-md text-[#F0E6D2] text-[10px] font-syne uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-[#C84B31] animate-pulse" />
                    <span>UGC REEL</span>
                    <Play className="w-3 h-3 text-[#C84B31] fill-current ml-0.5" />
                  </div>
                )}

                {/* Dark Overlay Fade in on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Card Content & Hover Reveals */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none z-10">
                {/* Top Badge */}
                <div className="flex justify-between items-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/50 border border-white/20 md:backdrop-blur-md text-[10px] font-syne uppercase tracking-widest text-[#EAE0D5]">
                    {project.tag}
                  </span>
                  <span className="font-cinzel text-sm font-bold text-[#C84B31]">
                    {project.year}
                  </span>
                </div>

                {/* Bottom Content */}
                <div>
                  <span className="font-syne text-[10px] uppercase tracking-[0.25em] text-[#C84B31] font-bold block mb-1">
                    {project.category}
                  </span>
                  
                  {/* Title Slide Up */}
                  <h3 className="font-bebas text-3xl sm:text-4xl uppercase tracking-wide text-[#F0E6D2] group-hover:text-white group-hover:translate-y-[-4px] transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* CTA with Underline Animation */}
                  <div className="pt-4 flex items-center gap-2 text-xs font-syne uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">
                    <span className="relative">
                      {project.video ? 'WATCH FULL VIDEO' : 'VIEW PROJECT'}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C84B31] group-hover:w-full transition-all duration-500 ease-out" />
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#C84B31] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {selectedVideo && selectedVideo.video && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 md:backdrop-blur-2xl select-none"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#0F0F12] rounded-3xl border border-white/20 shadow-[0_0_60px_rgba(200,75,49,0.3)] overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-[#C84B31]" />
                  <span className="font-syne text-xs uppercase tracking-widest text-[#EAE0D5]">
                    {selectedVideo.category}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-white/10 hover:bg-[#C84B31] text-white transition-colors cursor-pointer"
                    title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="p-2 rounded-full bg-white/10 hover:bg-[#C84B31] text-white transition-colors cursor-pointer"
                    title="Close Video"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Video Player Container */}
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px]">
                <video
                  src={selectedVideo.video}
                  autoPlay
                  controls
                  loop
                  muted={isMuted}
                  playsInline
                  className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
                />
              </div>

              {/* Modal Footer Info */}
              <div className="p-6 bg-black/60 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bebas text-3xl uppercase tracking-wider text-[#F0E6D2]">
                    {selectedVideo.title}
                  </h3>
                  {selectedVideo.description && (
                    <p className="font-syne text-xs text-[#EAE0D5]/70 max-w-xl mt-1">
                      {selectedVideo.description}
                    </p>
                  )}
                </div>

                <span className="px-4 py-2 rounded-full bg-[#C84B31]/20 border border-[#C84B31]/50 text-[#F0E6D2] font-syne text-xs font-bold tracking-widest uppercase self-start sm:self-auto shrink-0">
                  {selectedVideo.tag}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;


