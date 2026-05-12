"use client";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  badge?: string;
  index: number;
}

export default function ServiceCard({
  name,
  price,
  period,
  description,
  features,
  highlighted,
  cta,
  badge,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className={`relative overflow-hidden transition-all duration-500 ${
        highlighted
          ? "ring-1 ring-gold/50"
          : "border border-cream/5 hover:border-gold/20"
      }`}
      style={{
        background: highlighted
          ? "linear-gradient(135deg, #2a3255 0%, #212842 50%, #1e2a4a 100%)"
          : "linear-gradient(135deg, rgba(33,40,66,0.6) 0%, rgba(26,32,53,0.8) 100%)",
        clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
      }}
    >
      {/* Highlighted glow */}
      {highlighted && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top center, rgba(201,169,110,0.08) 0%, transparent 60%)",
          }}
        />
      )}

      {/* Badge */}
      {badge && (
        <div
          className="absolute top-5 right-5 font-sans text-[10px] tracking-[0.2em] uppercase px-3 py-1"
          style={{
            background: "linear-gradient(135deg, #c9a96e, #a07840)",
            color: "#212842",
            clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
          }}
        >
          {badge}
        </div>
      )}

      <div className="p-8">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold/70 mb-2">{name}</p>
        <div className="flex items-baseline gap-1 mb-3">
          <span className="font-serif text-4xl font-light text-cream">{price}</span>
          <span className="font-sans text-sm text-cream/40">{period}</span>
        </div>
        <p className="font-sans text-sm text-cream/50 mb-8 leading-relaxed">{description}</p>

        <div className="section-divider mb-8" />

        <ul className="space-y-3 mb-10">
          {features.map((feat) => (
            <li key={feat} className="flex items-start gap-3">
              <div
                className="w-4 h-4 flex items-center justify-center shrink-0 mt-0.5"
                style={{ color: highlighted ? "#c9a96e" : "#c9a96e99" }}
              >
                <Check size={13} />
              </div>
              <span className="font-sans text-sm text-cream/60 leading-relaxed">{feat}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className={`flex items-center justify-center gap-2 w-full py-4 font-sans text-xs font-medium tracking-widest uppercase transition-all duration-300 group ${
            highlighted
              ? "btn-primary w-full justify-center"
              : "btn-outline w-full justify-center"
          }`}
        >
          {cta}
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
