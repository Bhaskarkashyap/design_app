import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`font-bold ${sizes[size]} flex items-start`}>
      <span className="text-white">E</span>
      <span className="text-brand-orange text-xs mt-1 ml-0.5">°</span>
    </div>
  );
}
