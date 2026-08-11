import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Sparkles, Play, Volume2, VolumeX, X } from 'lucide-react';
import { Magnet } from './Magnet';

interface FeaturedProjectProps {
  onOpenModal?: () => void;
}

export const FeaturedProjectSection: React.FC<FeaturedProjectProps> = () => {
  const cubicEase = [0.4, 0, 0.2, 1] as const;
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleZoom = useTransform(scrollYProgress, [0.4, 0.8], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0.4, 0.8], [0, -40]);

  const videoPath = '/videos/ads_branding.mp4';

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden border-t border-white/10 select-none">
      {/* Background Visual Container with Video & Slow Zoom-In */}
      <motion.div
        style={{ scale: scaleZoom }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <video
          src={videoPath}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-75 contrast-110"
        />
        {/* Dark Cinematic Vignette & Color Grading Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(10,10,12,0.95)_90%)]" />
      </motion.div>

      {/* Floating Particles / Light Leaks */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C84B31]/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-10" />

      {/* Content Container */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-24 text-center flex flex-col items-center justify-center space-y-8"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: cubicEase }}
          className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#C84B31]/40 bg-[#C84B31]/10 backdrop-blur-md text-[#EAE0D5] text-xs font-syne uppercase tracking-widest"
        >
          <Sparkles className="w-4 h-4 text-[#C84B31] animate-spin-slow" />
          <span>FLAGSHIP ADS & BRANDING SHOWCASE</span>
        </motion.div>

        {/* Large Typography with Mask Wipe Animation */}
        <div className="overflow-hidden">
          <motion.h2
            initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', y: 40 }}
            whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: cubicEase }}
            className="font-bebas text-6xl sm:text-8xl md:text-9xl uppercase tracking-tighter text-[#F0E6D2] leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
          >
            COMMERCIAL ADS & BRANDING
          </motion.h2>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: cubicEase }}
          className="font-syne text-sm sm:text-base font-light text-[#EAE0D5]/80 leading-relaxed max-w-2xl"
        >
          A flagship commercial ads campaign showcasing high-impact brand strategy, motion typography, product commercial editing, and social conversion creative.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: cubicEase }}
          className="flex flex-wrap items-center justify-center gap-5 pt-4"
        >
          <Magnet padding={80} strength={2.5}>
            <button
              onClick={() => {
                setIsVideoModalOpen(true);
                setIsMuted(false);
              }}
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-[#C84B31] hover:bg-[#b03d27] text-[#F0E6D2] font-syne text-xs uppercase tracking-widest font-bold transition-all shadow-[0_0_30px_rgba(200,75,49,0.6)] cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>WATCH BRANDING REEL (WITH AUDIO)</span>
            </button>
          </Magnet>
        </motion.div>
      </motion.div>

      {/* Full Video Lightbox Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-2xl select-none"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#0F0F12] rounded-3xl border border-white/20 shadow-[0_0_60px_rgba(200,75,49,0.4)] overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-[#C84B31]" />
                  <span className="font-syne text-xs uppercase tracking-widest text-[#EAE0D5]">
                    FLAGSHIP COMMERCIAL AD SHOWCASE
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
                    onClick={() => setIsVideoModalOpen(false)}
                    className="p-2 rounded-full bg-white/10 hover:bg-[#C84B31] text-white transition-colors cursor-pointer"
                    title="Close Video"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Video Player */}
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[320px]">
                <video
                  src={videoPath}
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
                    COMMERCIAL ADS & BRANDING REEL
                  </h3>
                  <p className="font-syne text-xs text-[#EAE0D5]/70 max-w-xl mt-1">
                    Premium ad video commercial demonstrating strategic storytelling, brand aesthetic framing, and dynamic motion graphics.
                  </p>
                </div>

                <span className="px-4 py-2 rounded-full bg-[#C84B31]/20 border border-[#C84B31]/50 text-[#F0E6D2] font-syne text-xs font-bold tracking-widest uppercase self-start sm:self-auto shrink-0">
                  COMMERCIAL ADS • BRANDING
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

