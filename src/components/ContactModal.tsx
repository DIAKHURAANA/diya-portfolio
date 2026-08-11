import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '3D Modeling',
    budget: '$3k - $5k',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-xl bg-[#121214] border border-[#D7E2EA]/20 rounded-[32px] p-6 sm:p-8 z-10 shadow-2xl overflow-hidden my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-[#D7E2EA]/60 hover:text-white bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-full p-2 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <CheckCircle2 size={64} className="text-emerald-400 mb-4 animate-bounce" />
                <h3 className="hero-heading font-black text-3xl uppercase tracking-tight mb-2">
                  MESSAGE RECEIVED!
                </h3>
                <p className="text-[#D7E2EA]/70 font-light text-base max-w-sm">
                  Thanks for reaching out! Jack will review your project brief and reply within 24 hours.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="hero-heading font-black text-3xl sm:text-4xl uppercase tracking-tight mb-2">
                  START A PROJECT
                </h3>
                <p className="text-[#D7E2EA]/60 font-light text-sm mb-6">
                  Fill out the details below to kick off your custom 3D collaboration.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#D7E2EA]/70 mb-1.5 font-mono">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#D7E2EA]/70 mb-1.5 font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D7E2EA]/70 mb-1.5 font-mono">
                        Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-xl px-3 py-3 text-[#D7E2EA] focus:outline-none focus:border-[#B600A8] transition-colors text-sm"
                      >
                        <option value="3D Modeling">01 - 3D Modeling</option>
                        <option value="Rendering">02 - Rendering</option>
                        <option value="Motion Design">03 - Motion Design</option>
                        <option value="Branding">04 - Branding</option>
                        <option value="Web Design">05 - Web Design</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#D7E2EA]/70 mb-1.5 font-mono">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-xl px-3 py-3 text-[#D7E2EA] focus:outline-none focus:border-[#B600A8] transition-colors text-sm"
                      >
                        <option value="<$3k">&lt; $3,000</option>
                        <option value="$3k - $5k">$3,000 - $5,000</option>
                        <option value="$5k - $10k">$5,000 - $10,000</option>
                        <option value="$10k+">$10,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#D7E2EA]/70 mb-1.5 font-mono">
                      Project Details
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell me about your vision, key deliverables, and target timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <ContactButton label="Send Brief" />
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
