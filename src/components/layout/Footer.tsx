import Link from "next/link";
import { NAV_LINKS, BRAND } from "@/data/constants";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #1a2035 0%, #0c101a 100%)' }}>
      {/* Top CTA Banner */}
      <div
        className="relative overflow-hidden py-20 px-6"
        style={{ background: 'linear-gradient(135deg, #212842 0%, #2e3a6e 50%, #212842 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <div className="absolute bottom-0 right-1/4 w-96 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-5"
               style={{ background: 'radial-gradient(circle, #c9a96e, transparent)' }} />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Ready to Elevate?
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-cream mb-6 leading-tight">
            Your Growth Partner<br />
            <em className="text-gradient-gold not-italic">Awaits</em>
          </h2>
          <p className="font-sans text-cream/50 mb-10 max-w-lg mx-auto leading-relaxed">
            Stop navigating complexity alone. Let&apos;s build the structures
            that carry your vision forward.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a Discovery Call
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 border border-gold/60 rotate-45" />
                <div className="absolute inset-2 bg-gold/10 rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-gold text-sm font-light">VK</span>
                </div>
              </div>
              <div>
                <div className="font-serif text-cream text-xl font-light">Virtually Kyna</div>
                <div className="font-sans text-gold/60 text-[9px] tracking-[0.25em] uppercase">
                  Management Consulting
                </div>
              </div>
            </div>
            <p className="font-sans text-cream/40 text-sm leading-relaxed max-w-xs mb-8">
              Premium virtual management consulting for high-growth SMEs and NGOs.
              Strategy, operations, and compliance — delivered with executive precision.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100086274926071", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/virtually.kyna", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-cream/10 hover:border-gold/40 flex items-center justify-center text-cream/40 hover:text-gold transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-cream/40 hover:text-cream transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold/0 group-hover:bg-gold/60 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-gold/60 mt-0.5 shrink-0" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="font-sans text-sm text-cream/40 hover:text-cream transition-colors"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-gold/60 mt-0.5 shrink-0" />
                <a
                  href={`tel:${BRAND.phone}`}
                  className="font-sans text-sm text-cream/40 hover:text-cream transition-colors"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold/60 mt-0.5 shrink-0" />
                <span className="font-sans text-sm text-cream/40">{BRAND.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-sans text-xs text-cream/25">
            © {new Date().getFullYear()} Virtually Kyna. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="font-sans text-xs text-cream/25 hover:text-cream/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="font-sans text-xs text-cream/25 hover:text-cream/50 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Legal small print */}
        <div className="mt-8 pt-8 border-t border-cream/5">
          <p className="font-sans text-[10px] text-cream/20 leading-relaxed max-w-4xl">
            <strong className="text-cream/30">Note on Professional Status:</strong> Virtually Kyna is a
            professional consultancy brand. Management and HR services are provided as a business advisory.
            Legal compliance and advisory components are performed personally by our Principal Consultant,
            a qualified Legal Practitioner in Nigeria, ensuring adherence to the highest professional and
            ethical standards.
          </p>
        </div>
      </div>
    </footer>
  );
}
