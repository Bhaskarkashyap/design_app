'use client';

import React from 'react';

interface MobileContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function MobileContainer({ children, className = '' }: MobileContainerProps) {
  return (
    <div className="h-screen bg-black flex justify-center items-center overflow-hidden">
      <div
        className={`
          w-full h-full
          md:w-[390px] md:h-[90vh] md:my-[4vh]
          md:rounded-[2rem]
          md:border md:border-brand-border
          md:shadow-2xl md:shadow-brand-purple/10
          bg-brand-dark relative overflow-hidden
          flex flex-col
          ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
}
