"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, CheckCircle, ArrowRight, Shield, Target, Award, Zap } from "lucide-react";
import { staggerContainer, fadeUp, fadeIn, fadeLeft, fadeRight, viewportConfig } from "@/lib/animations";
import { BRAND, COMPANY_VALUES } from "@/data/constants";
import DecorativeBg from "@/components/ui/DecorativeBg";

const STAGE_OPTIONS = ["Idea", "Launch", "Scaling", "NGO"];
const BOTTLENECK_OPTIONS = ["Research", "Compliance", "Project Management", "HR"];
const ENGAGEMENT_OPTIONS = ["Monthly Retainer", "One-off Project"];

const VALUE_ICONS: Record<string, React.ReactNode> = {
  Excellence: <Award size={16} />,
  Integrity: <Shield size={16} />,
  Precision: <Target size={16} />,
  Agility: <Zap size={16} />,
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    stage: "",
    bottleneck: "",
    engagement: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error || "Unable to submit form right now.");
      }

      setSubmitted(true);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Page Hero */}
      <section
        className="relative pt-40 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0c101a 0%, #1a2035 50%, #212842 100%)" }}
      >
        <DecorativeBg variant="hero" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p variants={fadeIn} className="font-sans text-xs tracking-[0.35em] uppercase text-gold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-gold" /> Get In Touch
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-[1.05] max-w-3xl mb-6"
            >
              Start Your{" "}
              <em className="not-italic text-gradient-gold">Discovery</em>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-cream/50 max-w-xl leading-relaxed">
              Every great partnership begins with a conversation. Tell us about your organisation and
              we&rsquo;ll map the most strategic path forward.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #212842 0%, #1a2035 100%)" }}
      >
        <DecorativeBg />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Form */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20"
                  style={{
                    background: "rgba(201,169,110,0.04)",
                    border: "1px solid rgba(201,169,110,0.15)",
                    clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                  }}
                >
                  <CheckCircle size={48} className="text-gold mb-6" />
                  <h2 className="font-serif text-3xl font-light text-cream mb-4">
                    Submission Received
                  </h2>
                  <p className="font-sans text-cream/50 leading-relaxed max-w-sm">
                    Thank you for reaching out. Shekinah will review your enquiry and respond
                    within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div
                    className="p-1 mb-2"
                    style={{ borderBottom: "1px solid rgba(201,169,110,0.1)" }}
                  >
                    <h2 className="font-serif text-2xl font-light text-cream pb-4">
                      Discovery Form
                    </h2>
                  </div>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField
                      label="Full Name"
                      value={formData.name}
                      onChange={(v) => setFormData((p) => ({ ...p, name: v }))}
                      placeholder="Your name"
                      required
                    />
                    <InputField
                      label="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={(v) => setFormData((p) => ({ ...p, email: v }))}
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  {/* Company */}
                  <InputField
                    label="Company / Organisation Name"
                    value={formData.company}
                    onChange={(v) => setFormData((p) => ({ ...p, company: v }))}
                    placeholder="Your organisation"
                    required
                  />

                  {/* Stage */}
                  <SelectGroup
                    label="Current Business Stage"
                    options={STAGE_OPTIONS}
                    selected={formData.stage}
                    onSelect={(v) => handleSelect("stage", v)}
                  />

                  {/* Bottleneck */}
                  <SelectGroup
                    label="Biggest Operational Bottleneck"
                    options={BOTTLENECK_OPTIONS}
                    selected={formData.bottleneck}
                    onSelect={(v) => handleSelect("bottleneck", v)}
                  />

                  {/* Engagement */}
                  <SelectGroup
                    label="Preferred Engagement Type"
                    options={ENGAGEMENT_OPTIONS}
                    selected={formData.engagement}
                    onSelect={(v) => handleSelect("engagement", v)}
                  />

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="font-sans text-xs tracking-[0.2em] uppercase text-gold/70 block">
                      Tell Us More
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                      rows={5}
                      placeholder="Describe your current situation, goals, or specific challenges..."
                      className="w-full bg-transparent text-cream placeholder-cream/20 font-sans text-sm leading-relaxed resize-none focus:outline-none transition-colors duration-300 py-3 px-4"
                      style={{
                        border: "1px solid rgba(240,231,213,0.1)",
                        background: "rgba(240,231,213,0.02)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(201,169,110,0.4)";
                        e.target.style.background = "rgba(201,169,110,0.02)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(240,231,213,0.1)";
                        e.target.style.background = "rgba(240,231,213,0.02)";
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border border-navy/40 border-t-navy rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Discovery Form <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                  {errorMessage && (
                    <p className="font-sans text-sm text-red-300/90">{errorMessage}</p>
                  )}
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-2 space-y-6"
            >
              {/* Response info */}
              <div
                className="p-8"
                style={{
                  background: "rgba(201,169,110,0.04)",
                  border: "1px solid rgba(201,169,110,0.12)",
                  clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Clock size={16} className="text-gold" />
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-gold">Response Time</span>
                </div>
                <p className="font-serif text-2xl font-light text-cream mb-2">Within 24 Hours</p>
                <p className="font-sans text-sm text-cream/45 leading-relaxed">
                  Every enquiry is personally reviewed by Shekinah. You will receive a considered,
                  thoughtful response — not a template.
                </p>
              </div>

              {/* Email */}
              <div
                className="p-8"
                style={{
                  background: "rgba(240,231,213,0.02)",
                  border: "1px solid rgba(240,231,213,0.06)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Mail size={16} className="text-gold/70" />
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-gold/70">
                    Direct Contact
                  </span>
                </div>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="font-sans text-sm text-cream/60 hover:text-gold transition-colors duration-300 break-all"
                >
                  {BRAND.email}
                </a>
              </div>

              {/* Values */}
              <div
                className="p-8"
                style={{
                  background: "rgba(240,231,213,0.02)",
                  border: "1px solid rgba(240,231,213,0.06)",
                }}
              >
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold/70 mb-6">
                  Our Commitments
                </p>
                <div className="space-y-5">
                  {COMPANY_VALUES.map((val) => (
                    <div key={val.title} className="flex items-start gap-4">
                      <div className="text-gold/50 mt-0.5">{VALUE_ICONS[val.title]}</div>
                      <div>
                        <h4 className="font-serif text-base font-light text-cream mb-1">
                          {val.title}
                        </h4>
                        <p className="font-sans text-xs text-cream/40 leading-relaxed">
                          {val.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Internal sub-components ── */

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="font-sans text-xs tracking-[0.2em] uppercase text-gold/70 block">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent text-cream placeholder-cream/20 font-sans text-sm focus:outline-none transition-colors duration-300 py-3 px-4"
        style={{
          border: "1px solid rgba(240,231,213,0.1)",
          background: "rgba(240,231,213,0.02)",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "rgba(201,169,110,0.4)";
          e.target.style.background = "rgba(201,169,110,0.02)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "rgba(240,231,213,0.1)";
          e.target.style.background = "rgba(240,231,213,0.02)";
        }}
      />
    </div>
  );
}

function SelectGroup({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string;
  options: string[];
  selected: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div className="space-y-3">
      <label className="font-sans text-xs tracking-[0.2em] uppercase text-gold/70 block">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onSelect(opt)}
            className={`px-5 py-2.5 font-sans text-xs tracking-wider uppercase transition-all duration-200 ${
              selected === opt
                ? "text-navy"
                : "text-cream/50 hover:text-cream hover:border-cream/20"
            }`}
            style={{
              background: selected === opt
                ? "linear-gradient(135deg, #c9a96e, #a07840)"
                : "rgba(240,231,213,0.03)",
              border: selected === opt
                ? "1px solid transparent"
                : "1px solid rgba(240,231,213,0.08)",
              clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
