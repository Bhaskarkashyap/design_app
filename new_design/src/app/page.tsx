'use client';

import { useRouter } from 'next/navigation';
import MobileContainer from '@/components/MobileContainer';
import Logo from '@/components/Logo';
import SecondaryButton from '@/components/SecondaryButton';
import PrimaryButton from '@/components/PrimaryButton';

export default function LandingPage() {
  const router = useRouter();

  return (
    <MobileContainer>
      <div className="flex flex-col h-full relative">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark" />
        </div>

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-6 pb-4">
          <Logo size="lg" />
          <SecondaryButton onClick={() => router.push('/auth/email')}>
            Log in
          </SecondaryButton>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Content */}
        <div className="relative z-10 px-6 pb-10 space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold leading-tight">
              Find your people.{' '}
              <br />
              Discover real world{' '}
              <span className="gradient-text">vibes.</span>
            </h1>
            <p className="text-brand-muted text-base">
              Parties • Hangouts • Events
              <br />
              Meet people. Make memories.
            </p>
          </div>

          <div className="space-y-4">
            <PrimaryButton onClick={() => router.push('/terms')}>
              Get Started
            </PrimaryButton>

            <p className="text-center text-xs text-brand-muted leading-relaxed">
              By continuing, you agree to our{' '}
              <span className="text-white underline">Terms & Conditions</span>
              {' '}and{' '}
              <span className="text-white underline">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
