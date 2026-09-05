'use client';

import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ size = 'md' }: LogoProps) {
  const sizes = {
    sm: { w: 32, h: 32, strokeWidth: 2 },
    md: { w: 40, h: 40, strokeWidth: 2.5 },
    lg: { w: 48, h: 48, strokeWidth: 3 },
  };

  const s = sizes[size];

  return (
    <div className="relative flex items-center justify-center" style={{ width: s.w, height: s.h }}>
      <svg
        width={s.w}
        height={s.h}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="50%" stopColor="#C026D3" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>
        </defs>
        {/* Rounded square background */}
        <rect width="40" height="40" rx="10" fill="url(#logoGrad)" />
        {/* E + V combined mark */}
        <path
          d="M11 12h12c1.5 0 2.5 1 2.5 2.5S24.5 17 23 17H13m0 3h9c1.5 0 2.5 1 2.5 2.5S23.5 25 22 25H11"
          stroke="white"
          strokeWidth={s.strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* V accent */}
        <path
          d="M26 17l3 10"
          stroke="white"
          strokeWidth={s.strokeWidth}
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
