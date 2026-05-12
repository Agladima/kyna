"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeIn, viewportConfig } from "@/lib/animations";
import PillarCard from "@/components/ui/PillarCard";
import { PILLARS } from "@/data/constants";
import DecorativeBg from "@/components/ui/DecorativeBg";

export default function PillarsSection() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #212842 0%, #0c101a 100%)" }}
    >
      <DecorativeBg variant="section" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-20"
        >
          <motion.p variants={fadeIn} className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Our Framework
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-6 leading-tight"
          >
            Three Pillars of{" "}
            <em className="not-italic text-gradient-gold">Growth</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-cream/50 max-w-xl mx-auto leading-relaxed">
            Every engagement is built on a triad of interlocking disciplines that move together
            to drive sustainable, defensible growth.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.id} {...pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
