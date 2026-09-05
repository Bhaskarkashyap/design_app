'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';
import AuthLayout from '@/components/AuthLayout';
import OtpInput from '@/components/OtpInput';
import PrimaryButton from '@/components/PrimaryButton';
import TimerText from '@/components/TimerText';
import { useAuthStore } from '@/store/authStore';

export default function OtpPage() {
  const router = useRouter();
  const { otp, setOtp, email } = useAuthStore();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = () => {
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit code');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/auth/personal-info');
    }, 500);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col flex-1 min-h-0 justify-center">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-brand-purple/20 flex items-center justify-center mx-auto mb-6">
          <Lock className="w-7 h-7 text-brand-purple" />
        </div>

        {/* Heading */}
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-2xl font-bold">Verify your email</h1>
          <p className="text-brand-muted text-sm">
            We&apos;ve sent a 6-digit code to{' '}
            <span className="text-white font-medium">{email || 'john.doe@example.com'}</span>
          </p>
        </div>

        {/* OTP Input */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm text-brand-muted font-medium text-center block">
              Enter 6-digit code
            </label>
            <OtpInput
              value={otp}
              onChange={(val) => {
                setOtp(val);
                if (error) setError('');
              }}
              error={error}
            />
          </div>

          <div className="text-center">
            <TimerText initialSeconds={28} />
          </div>

          <div className="space-y-4">
            <PrimaryButton
              onClick={handleVerify}
              disabled={otp.length !== 6}
              loading={loading}
            >
              Verify Code
            </PrimaryButton>

            <p className="text-center text-sm text-brand-muted">
              Didn&apos;t receive code?{' '}
              <button className="text-brand-magenta font-medium hover:underline">
                Resend
              </button>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
