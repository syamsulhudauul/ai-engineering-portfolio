"use client";

import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Pokeball-inspired monogram logo.
 * - Outer ring split horizontally (top: violet, bottom: near-black)
 * - Center "button" circle with "SH" initials
 * - ⚡ lightning bolt badge at top-right (Pikachu nod)
 * - Subtle glow ring
 */
export default function Logo({ size = 80, className = "" }: LogoProps) {
  const cx = 40, cy = 40, r = 36;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Syamsul Huda Logo"
    >
      <defs>
        <radialGradient id="glow-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#7c3aed" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0"   />
        </radialGradient>

        <radialGradient id="btn-grad" cx="40%" cy="35%" r="60%">
          <stop offset="0%"   stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#5b21b6" />
        </radialGradient>

        {/* Clip to circle so hemisphere fills stay inside */}
        <clipPath id="ball-clip">
          <circle cx={cx} cy={cy} r={r} />
        </clipPath>
      </defs>

      {/* ── Outer ambient glow ── */}
      <circle cx={cx} cy={cy} r={r + 8} fill="url(#glow-grad)" />

      {/* ── Bottom hemisphere — dark ── */}
      <rect
        x={cx - r} y={cy}
        width={r * 2} height={r}
        fill="#0a0a0f"
        clipPath="url(#ball-clip)"
      />

      {/* ── Top hemisphere — violet tint ── */}
      <rect
        x={cx - r} y={cy - r}
        width={r * 2} height={r}
        fill="#2e1065"
        clipPath="url(#ball-clip)"
      />

      {/* Subtle grid lines on top half (references the hero grid) */}
      <g clipPath="url(#ball-clip)" opacity="0.15">
        {[0, 10, 20].map((offset) => (
          <line
            key={`h${offset}`}
            x1={cx - r} y1={cy - offset}
            x2={cx + r} y2={cy - offset}
            stroke="#a78bfa" strokeWidth="0.5"
          />
        ))}
        {[-20, -10, 0, 10, 20].map((offset) => (
          <line
            key={`v${offset}`}
            x1={cx + offset} y1={cy - r}
            x2={cx + offset} y2={cy}
            stroke="#a78bfa" strokeWidth="0.5"
          />
        ))}
      </g>

      {/* ── Outer border ring ── */}
      <circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke="#7c3aed"
        strokeWidth="1.5"
        strokeOpacity="0.8"
      />

      {/* ── Horizontal dividing band ── */}
      <line
        x1={cx - r} y1={cy}
        x2={cx + r} y2={cy}
        stroke="#a78bfa"
        strokeWidth="1.5"
        strokeOpacity="0.9"
      />

      {/* ── Center button shadow ring ── */}
      <circle cx={cx} cy={cy} r={14} fill="#0a0a0f" />
      <circle
        cx={cx} cy={cy} r={14}
        fill="none"
        stroke="#7c3aed"
        strokeWidth="1.5"
      />

      {/* ── Center button fill ── */}
      <circle cx={cx} cy={cy} r={11} fill="url(#btn-grad)" />

      {/* ── "SH" monogram ── */}
      <text
        x={cx} y={cy + 4}
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
        fontWeight="700"
        fontSize="10"
        fill="#ffffff"
        letterSpacing="0.5"
      >
        SH
      </text>

      {/* ── Lightning bolt badge — top right ── */}
      {/* A minimal Pikachu-style bolt, ~9×14px, placed at (55, 8) */}
      <g transform="translate(54, 7)">
        {/* Badge backing circle */}
        <circle cx="5" cy="7" r="7" fill="#0a0a0f" />
        <circle cx="5" cy="7" r="7" fill="none" stroke="#facc15" strokeWidth="1" strokeOpacity="0.8" />
        {/* Bolt path */}
        <path
          d="M6.5,1.5 L3,7 L5.5,7 L3.5,12.5 L9,6 L6,6 Z"
          fill="#facc15"
          opacity="0.95"
        />
      </g>
    </svg>
  );
}
