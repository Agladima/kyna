"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 glass-navy shadow-2xl shadow-black/30"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              <div
                className="absolute inset-0 border border-gold/60 rotate-45 transition-transform duration-300 group-hover:rotate-[55deg]"
              />
              <div className="absolute inset-1.5 bg-gold/10 rotate-45 transition-transform duration-300 group-hover:rotate-[55deg]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-gold text-sm font-light">VK</span>
              </div>
            </div>
            <div>
              <div className="font-serif text-cream text-lg font-light leading-none tracking-wide">
                Virtually Kyna
              </div>
              <div className="font-sans text-gold/60 text-[9px] tracking-[0.25em] uppercase leading-none mt-0.5">
                Management Consulting
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-5 py-2 font-sans text-sm font-medium tracking-wider uppercase group"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isActive ? "text-gold" : "text-cream/60 group-hover:text-cream"
                    }`}
                  >
                    {link.label}
                  </span>
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-5 right-5 h-px bg-gold transition-all duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary text-xs py-3 px-6">
              Book a Call
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-cream/70 hover:text-cream transition-colors p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: 'rgba(12, 16, 26, 0.97)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`font-serif text-4xl font-light tracking-wide ${
                      pathname === link.href ? "text-gold" : "text-cream/70 hover:text-cream"
                    } transition-colors duration-300`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <Link href="/contact" className="btn-primary">
                  Book a Discovery Call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
