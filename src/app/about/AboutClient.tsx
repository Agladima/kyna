"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { staggerContainer, fadeUp, fadeIn, fadeLeft, fadeRight, viewportConfig } from "@/lib/animations";
import { PILLARS, COMPANY_VALUES } from "@/data/constants";
import PillarCard from "@/components/ui/PillarCard";
import DecorativeBg from "@/components/ui/DecorativeBg";
import aboutImage from "@/images/about.jpeg";

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Page Hero */}
      <section
        className="relative pt-40 pb-28 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0c101a 0%, #1a2035 60%, #212842 100%)" }}
      >
        <DecorativeBg variant="hero" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeIn} className="font-sans text-xs tracking-[0.35em] uppercase text-gold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-gold" /> About Virtually Kyna
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-[1.05] max-w-3xl mb-8"
            >
              Built for the{" "}
              <em className="not-italic text-gradient-gold">Visionary</em>
              <br /> Organisation
            </motion.h1>
            <motion.div variants={fadeUp} className="section-divider w-32" />
          </motion.div>
        </div>
      </section>

      {/* The Story */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #212842 0%, #1a2035 100%)" }}
      >
        <DecorativeBg />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.p variants={fadeIn} className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Our Origin
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-light text-cream mb-8 leading-tight">
                Bridging the Gap
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-5">
                <p className="font-sans text-cream/60 leading-relaxed text-base">
                  Virtually Kyna was founded on a simple realisation — that high-growth organisations
                  often reach a stage where they are too large for basic administrative support, but
                  not yet ready for a full-scale in-house legal or HR department.
                </p>
                <p className="font-sans text-cream/60 leading-relaxed text-base">
                  We bridge this gap. We are a premium virtual management consultancy designed for
                  the visionary founder, the scaling SME, and the impact-driven NGO. We provide
                  the high-level oversight, strategic research, and operational structure typically
                  found in corporate boardrooms, delivered through a flexible, remote partnership.
                </p>
              </motion.div>
            </motion.div>

            {/* Visual panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                className="relative p-10 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(201,169,110,0.08), rgba(201,169,110,0.02))",
                  border: "1px solid rgba(201,169,110,0.15)",
                  clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
                }}
              >
                <Quote size={40} className="text-gold/20 mb-6" />
                <p className="font-serif text-xl font-light text-cream/80 italic leading-relaxed mb-8">
                  &ldquo;The Virtual in our name represents more than just remote work — it represents
                  agility. In a rapidly changing economy, businesses need partners who can pivot
                  quickly, research deeply, and execute flawlessly.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-gold/50" />
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-gold/70">
                    Shekinah Michael
                  </span>
                </div>

                {/* Corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-24 h-24"
                  style={{
                    background: "radial-gradient(circle at bottom right, rgba(201,169,110,0.1), transparent 70%)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy / Pillars */}
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
            className="text-center mb-20"
          >
            <motion.p variants={fadeIn} className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Our Philosophy
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-light text-cream leading-tight">
              The Three Pillars of{" "}
              <em className="not-italic text-gradient-gold">Growth</em>
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((pillar, i) => (
              <PillarCard key={pillar.id} {...pillar} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
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
              Leadership
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-light text-cream">
              Meet the Founder
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Profile image placeholder */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-2"
            >
              <div
                className="relative aspect-[3/4] overflow-hidden"
                style={{
                  background: "linear-gradient(160deg, #2a3255, #1a2035)",
                  border: "1px solid rgba(201,169,110,0.15)",
                  clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
                }}
              >
                <Image
                  src={aboutImage}
                  alt="Shekinah Michael, founder of Virtually Kyna"
                  fill
                  priority
                  className="object-cover object-center"
                />
                {/* Bottom gradient */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{ background: "linear-gradient(to top, #1a2035, transparent)" }}
                />
              </div>

              {/* Name card */}
              <div
                className="mt-4 p-6"
                style={{
                  background: "rgba(201,169,110,0.05)",
                  border: "1px solid rgba(201,169,110,0.1)",
                }}
              >
                <h3 className="font-serif text-2xl font-light text-cream mb-1">Shekinah Michael</h3>
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold">
                  Principal Consultant
                </p>
              </div>
            </motion.div>

            {/* Founder bio */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-3 space-y-6"
            >
              <p className="font-sans text-cream/60 leading-relaxed text-base">
                I am a multidisciplinary strategist with a deep background in Corporate Strategy,
                Human Resources, and Legal Compliance. Having navigated the complexities of the
                Nigerian professional landscape, I recognised the need for a service that treats
                &ldquo;Virtual Assistance&rdquo; as a high-level strategic asset.
              </p>
              <p className="font-sans text-cream/60 leading-relaxed text-base">
                With a rigorous academic background in law and a passion for organisational
                development, I lead Virtually Kyna with a commitment to excellence. My goal is to
                ensure that while you focus on your &ldquo;Big Picture,&rdquo; the structures holding
                your vision together are unbreakable.
              </p>

              {/* Credentials */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
              >
                {[
                  { label: "Background", value: "Corporate Strategy & Law" },
                  { label: "Specialisation", value: "HR & Legal Compliance" },
                  { label: "Focus Market", value: "Nigeria & West Africa" },
                  // { label: "Qualification", value: "Legal Practitioner, Nigeria" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-5"
                    style={{
                      background: "rgba(240,231,213,0.02)",
                      border: "1px solid rgba(240,231,213,0.06)",
                    }}
                  >
                    <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-1">
                      {item.label}
                    </p>
                    <p className="font-serif text-lg font-light text-cream/80">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link href="/contact" className="btn-primary inline-flex">
                  Work With Shekinah <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Virtually Kyna */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #212842 0%, #1a2035 100%)" }}
      >
        <DecorativeBg variant="section" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.p variants={fadeIn} className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Why Us
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-light text-cream mb-8 leading-tight">
                Why Virtually Kyna?
              </motion.h2>
              <motion.p variants={fadeUp} className="font-sans text-cream/60 leading-relaxed mb-8">
                The &ldquo;Virtual&rdquo; in our name represents more than just remote work — it represents
                agility. In a rapidly changing economy, businesses need partners who can pivot quickly,
                research deeply, and execute flawlessly without the overhead of traditional firm models.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/services" className="btn-outline inline-flex">
                  Explore Our Services <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {COMPANY_VALUES.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportConfig}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-6 transition-all duration-300"
                  style={{
                    background: "rgba(240,231,213,0.02)",
                    border: "1px solid rgba(240,231,213,0.06)",
                  }}
                >
                  <div className="w-6 h-px bg-gold/50 mb-4 group-hover:w-12 transition-all duration-300" />
                  <h4 className="font-serif text-lg font-light text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                    {val.title}
                  </h4>
                  <p className="font-sans text-xs text-cream/45 leading-relaxed">{val.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
