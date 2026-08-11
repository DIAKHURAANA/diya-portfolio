import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, Palette, Code2, Rocket, ArrowRight, Sparkles } from 'lucide-react';

interface ProcessStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
}

const processSteps: ProcessStep[] = [
  {
    id: '01',
    title: 'DISCOVER',
    subtitle: 'Goals & Audience Insights',
    description: 'Understanding goals, audience, and project requirements.',
    icon: Compass,
    deliverables: ['Goal Mapping', 'Audience Insights', 'Project Requirements'],
  },
  {
    id: '02',
    title: 'DEFINE',
    subtitle: 'Research & Strategy',
    description: 'Research, wireframing, and structuring the right solution.',
    icon: Target,
    deliverables: ['User Research', 'Wireframing', 'Solution Architecture'],
  },
  {
    id: '03',
    title: 'DESIGN',
    subtitle: 'Visuals & User Experience',
    description: 'Crafting clean, modern, and user-centric visuals.',
    icon: Palette,
    deliverables: ['UI/UX Design', 'Visual Systems', '3D & Motion Assets'],
  },
  {
    id: '04',
    title: 'DEVELOP',
    subtitle: 'Execution & Collaboration',
    description: 'Collaborating with developers to bring the design to life.',
    icon: Code2,
    deliverables: ['Frontend Integration', 'WebGL Interactions', 'Performance Tuning'],
  },
  {
    id: '05',
    title: 'DELIVER',
    subtitle: 'Testing & Final Launch',
    description: 'Testing, refining, and delivering pixel-perfect results.',
    icon: Rocket,
    deliverables: ['QA & Optimization', 'Pixel-Perfect Polish', 'Final Handover'],
  },
];

export const ProcessSection: React.FC = () => {
  const cubicEase = [0.4, 0, 0.2, 1] as const;

  return (
    <section id="process" className="relative w-full py-28 px-6 sm:px-10 md:px-16 bg-transparent overflow-hidden border-t border-white/10 select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#C84B31]/15 via-rose-950/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: cubicEase }}
            className="flex items-center justify-center gap-3 mb-3"
          >
            <span className="w-8 h-[2px] bg-[#C84B31]" />
            <span className="font-syne text-xs uppercase tracking-[0.3em] text-[#C84B31] font-bold">
              WORKFLOW & METHODOLOGY
            </span>
            <span className="w-8 h-[2px] bg-[#C84B31]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: cubicEase }}
            className="font-bebas text-5xl sm:text-6xl md:text-7xl uppercase tracking-wider text-[#F0E6D2] leading-none"
          >
            MY CREATIVE PROCESS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: cubicEase }}
            className="font-syne text-xs sm:text-sm font-light text-[#EAE0D5]/70 mt-4 max-w-xl mx-auto leading-relaxed"
          >
            A proven 5-step framework designed to transform ambitious ideas into high-converting, pixel-perfect digital solutions.
          </motion.p>
        </div>

        {/* 5-Step Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: cubicEase,
                }}
                className="group relative rounded-3xl p-7 bg-black/40 backdrop-blur-xl border border-white/10 hover:border-[#C84B31]/60 transition-all duration-500 shadow-xl hover:shadow-[0_15px_35px_rgba(200,75,49,0.25)] flex flex-col justify-between"
              >
                {/* Background Hover Accent Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#C84B31]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-bebas text-4xl sm:text-5xl text-[#C84B31] group-hover:scale-110 transition-transform duration-300">
                      {step.id}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-black/60 border border-white/15 group-hover:border-[#C84B31] group-hover:bg-[#C84B31] text-[#EAE0D5] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title & Subtitle */}
                  <h3 className="font-bebas text-2xl sm:text-3xl uppercase tracking-wider text-[#F0E6D2] group-hover:text-white transition-colors mb-1">
                    {step.title}
                  </h3>
                  <span className="font-syne text-[10px] uppercase tracking-widest text-[#C84B31] font-semibold block mb-3">
                    {step.subtitle}
                  </span>

                  {/* Step Description */}
                  <p className="font-syne text-xs text-[#EAE0D5]/75 font-light leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-syne text-[#EAE0D5]/60 group-hover:text-[#EAE0D5]/90 transition-colors">
                      <Sparkles className="w-2.5 h-2.5 text-[#C84B31] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Flow Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: cubicEase }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-black/60 border border-white/15 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-[#C84B31]/20 border border-[#C84B31]/50 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#C84B31]" />
            </div>
            <div>
              <h4 className="font-bebas text-2xl uppercase tracking-wider text-[#F0E6D2]">
                READY TO START YOUR NEXT PROJECT?
              </h4>
              <p className="font-syne text-xs text-[#EAE0D5]/70">
                Let's apply this structured methodology to achieve pixel-perfect results for your brand.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-3 px-7 py-3.5 rounded-xl bg-[#C84B31] hover:bg-[#b03d27] text-white font-syne text-xs uppercase tracking-widest font-bold transition-all shadow-[0_0_25px_rgba(200,75,49,0.5)] shrink-0 cursor-pointer"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
