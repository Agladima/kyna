export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-navy-900"
         style={{ background: '#0c101a' }}>
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo Mark */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border border-gold/30 rotate-45 animate-ping" />
          <div className="absolute inset-2 border border-gold/60 rotate-45" />
          <div className="absolute inset-4 bg-gold/20 rotate-45" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-gold text-xl font-light">VK</span>
          </div>
        </div>
        {/* Loading bar */}
        <div className="w-48 h-px bg-navy-700 overflow-hidden relative">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold/0 via-gold to-gold/0 w-1/2 animate-shimmer"
            style={{
              animation: 'shimmerBar 1.5s ease-in-out infinite',
            }}
          />
        </div>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-cream/40">
          Loading
        </p>
      </div>
      <style>{`
        @keyframes shimmerBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
}
