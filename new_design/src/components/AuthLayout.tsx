'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import MobileContainer from './MobileContainer';
import BackButton from './BackButton';
import Logo from './Logo';
import StepBadge from './StepBadge';

const stepRoutes: Record<string, number> = {
  '/terms': 1,
  '/auth/email': 1,
  '/auth/otp': 2,
  '/auth/personal-info': 3,
  '/auth/location': 4,
};

interface AuthLayoutProps {
  children: React.ReactNode;
  showBack?: boolean;
  showStep?: boolean;
}

export default function AuthLayout({
  children,
  showBack = true,
  showStep = true,
}: AuthLayoutProps) {
  const pathname = usePathname();
  const currentStep = stepRoutes[pathname] || 1;

  return (
    <MobileContainer>
      <div className="h-full flex flex-col safe-area-top safe-area-bottom">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          {showBack ? <BackButton /> : <div className="w-10" />}
          <Logo />
          {showStep ? (
            <StepBadge current={currentStep} total={4} />
          ) : (
            <div className="w-10" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col px-6 pb-6 min-h-0">
          {children}
        </div>
      </div>
    </MobileContainer>
  );
}
