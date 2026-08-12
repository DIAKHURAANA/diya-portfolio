import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Copy, Check, Send, Sparkles } from 'lucide-react';
import { Magnet } from './Magnet';
import { useMobile } from '../hooks/useMobile';
import { useInView } from '../hooks/useInView';

export const ContactSection: React.FC = () => {
  const isMobile = useMobile();
  const { ref: footerRef, isInView } = useInView<HTMLElement>({ threshold: 0.05 });
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', projectType: 'UI/UX Design', message: '' });

  const email = 'motionmuse.design@gmail.com';
  const cubicEase = [0.22, 1, 0.36, 1] as const;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mbgroyvy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', projectType: 'UI/UX Design', message: '' });
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setErrorMessage('Unable to submit your message right now. Please try again.');
        }
        setFormStatus('error');
      }
    } catch {
      setErrorMessage('Network connection error. Please check your connection and try again.');
      setFormStatus('error');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Infinite Footer Marquee Identity Text
  const marqueeText = "DIA KHURANA • UI/UX DESIGNER • 3D CREATOR • BRAND STRATEGIST • ";
  const marqueeRepeat = Array(6).fill(marqueeText).join('');

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Dribbble', url: 'https://dribbble.com' },
    { name: 'Email', url: `mailto:${email}` },
  ];

  return (
    <footer id="contact" ref={footerRef} className="relative min-h-screen w-full pt-28 pb-6 px-6 sm:px-10 md:px-16 bg-transparent overflow-hidden border-t border-white/10 select-none">
      {/* Slow Moving Ambient Background - Paused when out of view or on mobile */}
      {!isMobile && isInView && (
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#C84B31]/25 via-purple-900/15 to-transparent blur-[160px] pointer-events-none"
        />
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 🤝 CTA SECTION: Dramatic Scale-In Heading with Red Color Sweep */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: cubicEase }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#C84B31] animate-spin-slow" />
            <span className="font-syne text-xs uppercase tracking-[0.3em] text-[#C84B31] font-bold">
              🤝 LET&apos;S BUILD SOMETHING MEMORABLE
            </span>
          </motion.div>

          {/* Dramatic Scale-In Heading */}
          <motion.h2
            initial={{ opacity: 0, scale: isMobile ? 1 : 0.85, filter: isMobile ? undefined : 'blur(12px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: cubicEase }}
            className="font-bebas text-5xl sm:text-7xl md:text-8xl uppercase tracking-wider text-[#F0E6D2] leading-none mb-6"
          >
            READY TO ELEVATE YOUR <span className="text-[#C84B31] drop-shadow-[0_0_25px_rgba(200,75,49,0.8)]">BRAND TO THE NEXT LEVEL?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: cubicEase }}
            className="font-syne text-xs sm:text-sm font-light text-[#EAE0D5]/70 max-w-xl mx-auto"
          >
            Have a project in mind, a rebranding inquiry, or a WebGL design challenge? Fill out the form below or copy my email directly.
          </motion.p>
        </div>

        {/* Contact Form & Direct Email Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Direct Email Card */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: cubicEase }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-black/40 md:backdrop-blur-xl border border-white/15 shadow-2xl space-y-6">
              <span className="font-syne text-xs uppercase tracking-widest text-[#C84B31] font-bold block">
                DIRECT EMAIL & CALL
              </span>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/20 bg-white/5 text-[#F0E6D2] font-mono text-sm hover:border-[#C84B31] transition-all cursor-pointer group min-h-[44px]"
                >
                  <Mail size={16} className="text-[#C84B31]" />
                  <span>{email}</span>
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} className="text-[#EAE0D5]/60 group-hover:text-white" />}
                </button>
              </div>

              <p className="font-syne text-xs font-light text-[#EAE0D5]/70 leading-relaxed">
                I typically respond within 24 hours to review project briefs and schedule introductory strategy calls.
              </p>
            </div>
          </motion.div>

          {/* Minimal Form with Glow Pulse Button */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: cubicEase }}
            className="lg:col-span-7"
          >
            <form
              action="https://formspree.io/f/mbgroyvy"
              method="POST"
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-black/40 md:backdrop-blur-xl border border-white/15 shadow-2xl space-y-6"
            >
              {formStatus === 'success' ? (
                <div className="p-8 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center font-bold text-xl">
                    ✓
                  </div>
                  <h3 className="font-bebas text-2xl tracking-wider text-emerald-200">
                    MESSAGE SENT SUCCESSFULLY!
                  </h3>
                  <p className="font-syne text-xs text-emerald-300/80 leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out. Your message has been sent to Dia Khurana. I will review your project details and get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormStatus('idle')}
                    className="mt-2 inline-block px-5 py-2.5 rounded-xl bg-emerald-900/60 border border-emerald-500/30 text-emerald-200 font-syne text-xs uppercase tracking-wider hover:bg-emerald-800/80 transition-all cursor-pointer min-h-[44px]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  {formStatus === 'error' && (
                    <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 font-syne text-xs text-center space-y-1">
                      <p className="font-bold">Submission Failed</p>
                      <p className="text-rose-200/80">{errorMessage}</p>
                    </div>
                  )}

                  <div className="relative">
                    <input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/15 text-white font-syne text-sm placeholder-[#EAE0D5]/40 focus:outline-none focus:border-[#C84B31] focus:shadow-[0_0_20px_rgba(200,75,49,0.4)] transition-all min-h-[44px]"
                    />
                  </div>

                  <div className="relative">
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your Email Address"
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/15 text-white font-syne text-sm placeholder-[#EAE0D5]/40 focus:outline-none focus:border-[#C84B31] focus:shadow-[0_0_20px_rgba(200,75,49,0.4)] transition-all min-h-[44px]"
                    />
                  </div>

                  <div className="relative">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-black border border-white/15 text-white font-syne text-sm focus:outline-none focus:border-[#C84B31] focus:shadow-[0_0_20px_rgba(200,75,49,0.4)] transition-all min-h-[44px]"
                    >
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Web Design & Dev">Web Design & Dev</option>
                      <option value="Video Editing">Video Editing</option>
                      <option value="Brand Identity">Brand Identity</option>
                      <option value="Ads & Marketing">Ads & Marketing</option>
                      <option value="UGC Videos">UGC Videos</option>
                      <option value="Social Media Management">Social Media Management</option>
                    </select>
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/15 text-white font-syne text-sm placeholder-[#EAE0D5]/40 focus:outline-none focus:border-[#C84B31] focus:shadow-[0_0_20px_rgba(200,75,49,0.4)] transition-all resize-none"
                    />
                  </div>

                  {/* Glow Pulse Loop + Hover Expand Button */}
                  <Magnet padding={80} strength={2.5} className="w-full">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="relative group overflow-hidden w-full py-4 rounded-xl bg-gradient-to-r from-[#C84B31] via-[#d8482b] to-[#b03d27] text-[#F0E6D2] font-syne text-xs uppercase tracking-widest font-bold transition-all shadow-[0_4px_25px_rgba(200,75,49,0.5)] hover:shadow-[0_0_45px_rgba(200,75,49,0.95)] cursor-pointer border border-white/20 disabled:opacity-50 min-h-[44px]"
                    >
                      <span className="absolute inset-0 w-full h-full bg-white/25 rounded-xl scale-0 group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none opacity-0 group-hover:opacity-100" />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>{formStatus === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </Magnet>
                </>
              )}
            </form>
          </motion.div>
        </div>

        {/* 🔻 FOOTER & INFINITE MARQUEE IDENTITY TEXT */}
        {/* Animated Left-to-Right Draw Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: cubicEase }}
          className="h-[1px] w-full bg-gradient-to-r from-[#C84B31] via-white/30 to-[#C84B31] origin-left mb-8"
        />

        {/* Horizontal Infinite Marquee Text - Only animate when in view */}
        <div className="overflow-hidden w-full mb-10 py-2 border-y border-white/10">
          <motion.div
            animate={isInView ? { x: [0, -1000] } : { x: 0 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex whitespace-nowrap w-max"
          >
            <span className="font-bebas text-2xl tracking-[0.2em] text-[#EAE0D5]/50 font-bold uppercase">
              {marqueeRepeat}
            </span>
          </motion.div>
        </div>

        {/* Footer Navigation & Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-cinzel font-bold text-2xl tracking-widest uppercase text-[#F0E6D2]">
              DIA KHURANA
            </span>
            <span className="font-syne text-xs text-[#EAE0D5]/50 uppercase tracking-wider font-light mt-1">
              UI/UX & Web Designer
            </span>
          </div>

          {/* Sequential Social Icons */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.1, 0.3), ease: cubicEase }}
                whileHover={{ scale: isMobile ? 1 : 1.15, rotate: isMobile ? 0 : 4 }}
                className="group flex items-center gap-1.5 font-syne text-xs uppercase tracking-widest text-[#EAE0D5]/70 hover:text-[#C84B31] transition-all py-1 min-h-[44px]"
              >
                <span>{social.name}</span>
                <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:text-[#C84B31] transition-opacity" />
              </motion.a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="font-syne text-xs uppercase tracking-widest text-[#EAE0D5]/60 hover:text-[#C84B31] hover:border-[#C84B31] border border-white/20 px-4 py-2 rounded-full transition-all cursor-pointer min-h-[44px]"
          >
            Back To Top &uarr;
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 text-center font-syne text-xs text-[#EAE0D5]/40 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} DIA KHURANA &bull; ALL RIGHTS RESERVED.
        </div>

        {/* 🔻 NAME AT THE BOTTOM OF THE SITE */}
        <div className="w-full pt-16 pb-4 text-center overflow-hidden border-t border-white/10 mt-10 pointer-events-none">
          <h1 className="font-bebas uppercase tracking-wider text-[15vw] sm:text-[17vw] md:text-[18vw] leading-none text-[#F0E6D2]/90 select-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            DIA KHURANA
          </h1>
        </div>
      </div>
    </footer>
  );
};

