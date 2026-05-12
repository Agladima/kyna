"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import DecorativeBg from "@/components/ui/DecorativeBg";
import { staggerContainer, fadeUp, fadeIn } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0c101a 0%, #1a2035 40%, #212842 70%, #1a2035 100%)",
      }}
    >
      <DecorativeBg variant="hero" />

      {/* Central content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-gold" />
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-gold/80">
              Premium Virtual Consulting
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-cream mb-8"
          >
            Strategic Growth.{" "}
            <br className="hidden md:block" />
            <em className="not-italic text-gradient-gold">Operational Clarity.</em>
            <br className="hidden md:block" />
            Regulatory Integrity.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="font-sans text-base md:text-lg text-cream/55 leading-relaxed max-w-2xl mb-12"
          >
            Premium Virtual Management Consulting for high-growth SMEs and NGOs. We merge
            market research, project management, and compliance into one seamless partnership.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">
              Book a Discovery Call
              <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-outline">
              View Service Packages
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12"
          style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}
        >
          {[
            { value: "3", label: "Core Service Pillars" },
            { value: "100%", label: "Remote Delivery" },
            { value: "SME", label: "& NGO Focused" },
            { value: "NG", label: "Nigeria-Based Expertise" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-3xl font-light text-gold mb-1">{stat.value}</div>
              <div className="font-sans text-xs text-cream/40 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-cream/25">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={14} className="text-cream/25" />
        </motion.div>
      </motion.div>
    </section>
  );
}
