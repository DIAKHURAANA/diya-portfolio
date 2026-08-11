import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Copy, Check, Send, Sparkles } from 'lucide-react';
import { Magnet } from './Magnet';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: 'UI/UX Design', message: '' });

  const email = 'motionmuse.design@gmail.com';
  const cubicEase = [0.22, 1, 0.36, 1] as const;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
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
    <footer id="contact" className="relative min-h-screen w-full pt-28 pb-6 px-6 sm:px-10 md:px-16 bg-transparent overflow-hidden border-t border-white/10 select-none">
      {/* Slow Moving Ambient Background & Floating Particles */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#C84B31]/25 via-purple-900/15 to-transparent blur-[160px] pointer-events-none"
      />

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
            initial={{ opacity: 0, scale: 0.85, filter: 'blur(12px)' }}
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
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: cubicEase }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/15 shadow-2xl space-y-6">
              <span className="font-syne text-xs uppercase tracking-widest text-[#C84B31] font-bold block">
                DIRECT EMAIL & CALL
              </span>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/20 bg-white/5 text-[#F0E6D2] font-mono text-sm hover:border-[#C84B31] transition-all cursor-pointer group"
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
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: cubicEase }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/15 shadow-2xl space-y-6">
              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-syne text-sm text-center">
                  Thank you! Your message has been sent successfully. I will get back to you shortly.
                </div>
              ) : (
                <>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/15 text-white font-syne text-sm placeholder-[#EAE0D5]/40 focus:outline-none focus:border-[#C84B31] focus:shadow-[0_0_20px_rgba(200,75,49,0.4)] transition-all"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your Email Address"
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/15 text-white font-syne text-sm placeholder-[#EAE0D5]/40 focus:outline-none focus:border-[#C84B31] focus:shadow-[0_0_20px_rgba(200,75,49,0.4)] transition-all"
                    />
                  </div>

                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-black border border-white/15 text-white font-syne text-sm focus:outline-none focus:border-[#C84B31] focus:shadow-[0_0_20px_rgba(200,75,49,0.4)] transition-all"
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
                      className="relative group overflow-hidden w-full py-4 rounded-xl bg-gradient-to-r from-[#C84B31] via-[#d8482b] to-[#b03d27] text-[#F0E6D2] font-syne text-xs uppercase tracking-widest font-bold transition-all shadow-[0_4px_25px_rgba(200,75,49,0.5)] hover:shadow-[0_0_45px_rgba(200,75,49,0.95)] cursor-pointer border border-white/20"
                    >
                      <span className="absolute inset-0 w-full h-full bg-white/25 rounded-xl scale-0 group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none opacity-0 group-hover:opacity-100" />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>SEND MESSAGE</span>
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

        {/* Horizontal Infinite Marquee Text */}
        <div className="overflow-hidden w-full mb-10 py-2 border-y border-white/10">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex whitespace-nowrap w-max"
          >
            <span className="font-bebas text-2xl tracking-[0.2em] text-[#EAE0D5]/50 font-bold uppercase">
              {marqueeRepeat}
            </span>
          </motion.div>
        </div>

        {/* Footer Navigation & Social Icons with Sequential Fade-In & Red Hover Shift */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-cinzel font-bold text-2xl tracking-widest uppercase text-[#F0E6D2]">
              DIA KHURANA
            </span>
            <span className="font-syne text-xs text-[#EAE0D5]/50 uppercase tracking-wider font-light mt-1">
              UI/UX & Web Designer
            </span>
          </div>

          {/* Sequential Social Icons (Instagram, LinkedIn, Dribbble, Email) */}
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
                transition={{ duration: 0.5, delay: i * 0.1, ease: cubicEase }}
                whileHover={{ scale: 1.15, rotate: 4 }}
                className="group flex items-center gap-1.5 font-syne text-xs uppercase tracking-widest text-[#EAE0D5]/70 hover:text-[#C84B31] transition-all"
              >
                <span>{social.name}</span>
                <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:text-[#C84B31] transition-opacity" />
              </motion.a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="font-syne text-xs uppercase tracking-widest text-[#EAE0D5]/60 hover:text-[#C84B31] hover:border-[#C84B31] border border-white/20 px-4 py-2 rounded-full transition-all cursor-pointer"
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
