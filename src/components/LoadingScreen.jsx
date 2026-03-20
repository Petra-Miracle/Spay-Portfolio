import React from "react";

export default function LoadingScreen({ fadeOut }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617] ${fadeOut ? "loader-fade" : ""}`}
    >
      {/* Outer ring */}
      <div className="relative flex items-center justify-center w-28 h-28">
        <svg
          className="loader-ring absolute inset-0 w-full h-full"
          viewBox="0 0 112 112"
          fill="none"
        >
          <circle cx="56" cy="56" r="50" stroke="rgba(6,182,212,0.15)" strokeWidth="4" />
          <circle
            cx="56" cy="56" r="50"
            stroke="url(#grad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="314"
            strokeDashoffset="220"
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="112" y2="112" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Scissors icon in center */}
        <div className="loader-scissors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#scissorsGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <linearGradient id="scissorsGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <line x1="20" y1="4" x2="8.12" y2="15.88" />
            <line x1="14.47" y1="14.48" x2="20" y2="20" />
            <line x1="8.12" y1="8.12" x2="12" y2="12" />
          </svg>
        </div>
      </div>

      {/* Brand name */}
      <div className="mt-8 flex flex-col items-center gap-1">
        <span className="font-black text-3xl tracking-tighter text-white">
          SPAY<span className="text-cyan-400">TEAM</span>
        </span>
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/30">
          Loading
        </span>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-cyan-500"
            style={{ animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite` }}
          />
        ))}
      </div>
    </div>
  );
}
