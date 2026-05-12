"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staggerContainer, fadeUp, fadeIn, viewportConfig } from "@/lib/animations";
import { SERVICE_TIERS, ADDONS } from "@/data/constants";
import ServiceCard from "@/components/ui/ServiceCard";
import AddonCard from "@/components/ui/AddonCard";
import DecorativeBg from "@/components/ui/DecorativeBg";

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* Page Hero */}
      <section
        className="relative pt-40 pb-28 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0c101a 0%, #1a2035 50%, #212842 100%)" }}
      >
        <DecorativeBg variant="hero" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeIn} className="font-sans text-xs tracking-[0.35em] uppercase text-gold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-gold" /> Services
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-[1.05] max-w-3xl mb-6"
            >
              The Hybrid{" "}
              <em className="not-italic text-gradient-gold">Framework</em>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-sans text-cream/50 max-w-2xl leading-relaxed text-base mb-4"
            >
              You&rsquo;re not buying services — you&rsquo;re investing in business growth. Our hybrid framework
              merges strategy, operations, and compliance into a single, seamless engagement.
            </motion.p>
            <motion.div variants={fadeUp} className="section-divider w-32 mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Monthly Retainers */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #212842 0%, #1a2035 100%)" }}
      >
        <DecorativeBg />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <motion.p variants={fadeIn} className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Core Strategy & Operations
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-light text-cream mb-4 leading-tight">
              Monthly Retainers
            </motion.h2>
            <motion.p variants={fadeUp} className="font-sans text-cream/45 max-w-lg mx-auto leading-relaxed">
              Consistent, high-level support structured around your growth stage.
              No lock-ins — just results.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_TIERS.map((tier, i) => (
              <ServiceCard key={tier.name} {...tier} index={i} />
            ))}
          </div>

          {/* Fine print */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
            className="text-center font-sans text-xs text-cream/25 mt-10"
          >
            All retainer packages are billed monthly. Custom scoping available for enterprise needs.
          </motion.p>
        </div>
      </section>

      {/* Specialised Add-ons */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #1a2035 0%, #0c101a 100%)" }}
      >
        <DecorativeBg />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <motion.p variants={fadeIn} className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Specialised Services
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-light text-cream mb-4 leading-tight">
              Professional Add-ons
            </motion.h2>
            <motion.p variants={fadeUp} className="font-sans text-cream/45 max-w-lg mx-auto leading-relaxed">
              Standalone engagements for organisations with specific, high-stakes needs.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADDONS.map((addon, i) => (
              <AddonCard key={addon.title} {...addon} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0c101a 0%, #212842 100%)" }}
      >
        <DecorativeBg />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <motion.p variants={fadeIn} className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">
              How It Works
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-light text-cream leading-tight">
              From Discovery to{" "}
              <em className="not-italic text-gradient-gold">Delivery</em>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery Call", desc: "A focused 45-minute session to diagnose your operational landscape." },
              { step: "02", title: "Proposal & Scope", desc: "A tailored proposal detailing deliverables, timelines, and investment." },
              { step: "03", title: "Onboarding", desc: "Seamless integration into your workflows and communication channels." },
              { step: "04", title: "Ongoing Excellence", desc: "Consistent, high-quality delivery with regular strategic reviews." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative text-center"
              >
                {/* Connector line */}
                {i < 3 && (
                  <div
                    className="hidden md:block absolute top-6 left-[60%] right-[-40%] h-px"
                    style={{ background: "linear-gradient(90deg, rgba(201,169,110,0.3), transparent)" }}
                  />
                )}
                <div className="font-serif text-5xl font-light text-gold/10 mb-4">{item.step}</div>
                <h3 className="font-serif text-xl font-light text-cream mb-3">{item.title}</h3>
                <p className="font-sans text-xs text-cream/45 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="text-center mt-16"
          >
            <Link href="/contact" className="btn-primary inline-flex">
              Begin with a Discovery Call <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
