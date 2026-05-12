"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeIn, viewportConfig } from "@/lib/animations";

const TRUST_POINTS = [
  { label: "Executive-Grade Thinking", desc: "Boardroom-level strategy delivered remotely" },
  { label: "Flexible Partnership", desc: "Monthly retainers built around your stage" },
  { label: "Nigerian Expertise", desc: "Navigating local regulatory landscapes with precision" },
  { label: "Integrated Approach", desc: "Strategy, operations, and compliance — under one roof" },
];

export default function TrustedSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1a2035 0%, #212842 100%)" }}
    >
      {/* Top divider */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-6 py-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={fadeIn} className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Trusted Growth Partner
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-light text-cream">
            Where Vision Meets{" "}
            <em className="not-italic text-gradient-gold">Structure</em>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_POINTS.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group text-center p-8"
              style={{
                background: "rgba(240,231,213,0.02)",
                border: "1px solid rgba(240,231,213,0.05)",
              }}
            >
              {/* Number accent */}
              <div className="font-serif text-5xl font-light text-gold/8 group-hover:text-gold/15 transition-colors duration-500 mb-4 leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-serif text-lg font-light text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                {point.label}
              </h3>
              <p className="font-sans text-xs text-cream/40 leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-4" />
    </section>
  );
}
