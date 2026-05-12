"use client";
import { motion } from "framer-motion";
import { BarChart3, Settings2, Shield } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 size={24} />,
  Settings2: <Settings2 size={24} />,
  Shield: <Shield size={24} />,
};

interface PillarCardProps {
  number: string;
  title: string;
  description: string;
  icon: string;
  index: number;
}

export default function PillarCard({ number, title, description, icon, index }: PillarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="card-luxury group p-8 relative"
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-0 h-0 border-l-[48px] border-b-[48px] border-l-transparent transition-all duration-500"
          style={{ borderBottomColor: 'rgba(201, 169, 110, 0.15)' }}
        />
        <div
          className="absolute top-0 right-0 w-0 h-0 border-l-[48px] border-b-[48px] border-l-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ borderBottomColor: 'rgba(201, 169, 110, 0.3)' }}
        />
      </div>

      {/* Number */}
      <div className="font-serif text-5xl font-light text-gold/10 group-hover:text-gold/20 transition-colors duration-500 mb-6 leading-none">
        {number}
      </div>

      {/* Icon */}
      <div
        className="w-12 h-12 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, rgba(201, 169, 110, 0.15), rgba(201, 169, 110, 0.05))',
          border: '1px solid rgba(201, 169, 110, 0.2)',
          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
        }}
      >
        <span className="text-gold">{ICON_MAP[icon]}</span>
      </div>

      <h3 className="font-serif text-2xl font-light text-cream mb-4 leading-tight group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="font-sans text-sm text-cream/50 leading-relaxed">{description}</p>

      {/* Bottom line */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
        style={{ background: 'linear-gradient(90deg, #c9a96e, transparent)' }}
      />
    </motion.div>
  );
}
