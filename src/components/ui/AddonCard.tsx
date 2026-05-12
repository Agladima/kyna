"use client";
import { motion } from "framer-motion";
import { Users, Scale, Search } from "lucide-react";
import Link from "next/link";

const ICON_MAP: Record<string, React.ReactNode> = {
  Users: <Users size={22} />,
  Scale: <Scale size={22} />,
  Search: <Search size={22} />,
};

interface AddonCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export default function AddonCard({ title, description, icon, index }: AddonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden p-8 transition-all duration-500"
      style={{
        background: "linear-gradient(135deg, rgba(240,231,213,0.04) 0%, rgba(240,231,213,0.02) 100%)",
        border: "1px solid rgba(240,231,213,0.08)",
        clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(201,169,110,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 flex items-center justify-center mb-6 text-gold transition-transform duration-300 group-hover:scale-110"
        style={{
          background: "rgba(201,169,110,0.08)",
          border: "1px solid rgba(201,169,110,0.15)",
          clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
        }}
      >
        {ICON_MAP[icon]}
      </div>

      <h3 className="font-serif text-xl font-light text-cream mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="font-sans text-sm text-cream/50 leading-relaxed mb-6">{description}</p>

      <Link
        href="/contact"
        className="font-sans text-xs tracking-[0.2em] uppercase text-gold/60 hover:text-gold transition-colors duration-300 flex items-center gap-2 group/link"
      >
        Enquire
        <span className="w-6 h-px bg-gold/40 group-hover/link:w-10 transition-all duration-300" />
      </Link>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
        style={{ background: "linear-gradient(90deg, #c9a96e, transparent)" }}
      />
    </motion.div>
  );
}
