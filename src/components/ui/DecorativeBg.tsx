"use client";

interface DecorativeBgProps {
  variant?: "hero" | "section" | "light";
}

export default function DecorativeBg({ variant = "section" }: DecorativeBgProps) {
  if (variant === "hero") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large radial glow — top right */}
        <div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #c9a96e, transparent 70%)" }}
        />
        {/* Smaller glow — bottom left */}
        <div
          className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #c9a96e, transparent 70%)" }}
        />
        {/* Floating geometric shapes */}
        <div
          className="absolute top-1/4 right-[15%] w-48 h-48 border border-gold/10 rotate-45 animate-float"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute top-1/3 right-[20%] w-24 h-24 border border-gold/5 rotate-45 animate-float"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-[10%] w-32 h-32 border border-cream/5 rotate-12 animate-float"
          style={{ animationDuration: "12s", animationDelay: "1s" }}
        />
        {/* Diagonal lines */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-[0.015]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #c9a96e 0px, #c9a96e 1px, transparent 1px, transparent 60px)",
          }}
        />
        {/* Horizontal rule lines */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
      </div>
    );
  }

  if (variant === "light") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #e4d0b3, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #d4b48a, transparent 70%)" }}
        />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #212842 0px, #212842 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-16 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #c9a96e, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #c9a96e, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 right-[5%] w-32 h-32 border border-gold/5 rotate-45 animate-float"
        style={{ animationDuration: "9s" }}
      />
    </div>
  );
}
