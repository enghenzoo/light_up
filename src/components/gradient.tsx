import React from "react";

const GRADIENTS = {
  sunrise: "bg-gradient-to-tr from-[#ff9a9e] via-[#fad0c4] to-[#fad0c4]",
  ocean: "bg-gradient-to-r from-[#2b5876] via-[#4e4376] to-[#2b5876]",
  aurora: "bg-gradient-to-br from-[#00c6ff] via-[#0072ff] to-[#00c6a7]",
  violet: "bg-gradient-to-tr from-violet-500 via-pink-500 to-indigo-500",
  gold: "bg-gradient-to-br from-yellow-300 via-orange-400 to-rose-400",
};

const INTENSITY = {
  sm: "opacity-60 blur-sm",
  md: "opacity-80 blur",
  lg: "opacity-100 blur-md",
};

export default function GradientPage({
  children,
  variant = "violet", // one of keys in GRADIENTS
  intensity = "md", // sm | md | lg
  fixed = false, // if true the gradient stays fixed while scrolling
  animated = false, // if true adds animated background (requires small global CSS)
  className = "",
}) {
  const gradientClass = GRADIENTS[variant] || GRADIENTS.violet;
  const intensityClass = INTENSITY[intensity] || INTENSITY.md;
  const fixedClass = fixed ? "fixed" : "absolute";
  const animateClass = animated ? "bg-animated" : "";

  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* Background layer */}
      <div
        aria-hidden
        className={`${fixedClass} inset-0 ${gradientClass} ${intensityClass} ${animateClass} -z-10`}
        style={{
          // mild blend to make text readable; remove if you prefer full color
          mixBlendMode: "multiply",
        }}
      />

      {/* Optional subtle vignette using Tailwind arbitrary styles */}
      <div
        aria-hidden
        className={`${fixedClass} inset-0 pointer-events-none -z-20`}
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.03), rgba(0,0,0,0.2))",
        }}
      />

      {/* Page content above the gradient */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
