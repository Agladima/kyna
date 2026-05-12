import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0c101a 0%, #212842 100%)' }}
    >
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5"
             style={{ background: 'radial-gradient(circle, #c9a96e, transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-5"
             style={{ background: 'radial-gradient(circle, #c9a96e, transparent)' }} />
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="font-serif text-[10rem] font-light leading-none text-gold/10 select-none">
          404
        </div>
        <h1 className="font-serif text-4xl font-light text-cream mb-4 -mt-8">
          Page Not Found
        </h1>
        <div className="section-divider w-24 mx-auto mb-6" />
        <p className="font-sans text-cream/50 mb-10 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
}
