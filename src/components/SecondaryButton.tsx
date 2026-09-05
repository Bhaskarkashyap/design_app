'use client';

import React from 'react';

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function SecondaryButton({ children, onClick, className = '' }: SecondaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2 rounded-full border border-brand-border
        text-white text-sm font-medium
        hover:bg-white/5 transition-colors
        ${className}
      `}
    >
      {children}
    </button>
  );
}
