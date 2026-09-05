'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail } from 'lucide-react';
import AuthLayout from '@/components/AuthLayout';
import TextInput from '@/components/TextInput';
import PrimaryButton from '@/components/PrimaryButton';
import { useAuthStore } from '@/store/authStore';
import { useToast } from '@/components/ToastProvider';

export default function EmailPage() {
  const router = useRouter();
  const { addToast } = useToast();
  const { email, setEmail } = useAuthStore();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleContinue = () => {
    if (!email) {
      setError('Email is required');
      addToast('Email is required', 'error');
      return;
    }
    if (!isValidEmail) {
      setError('Please enter a valid email');
      addToast('Please enter a valid email address', 'error');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      addToast('OTP sent to your email', 'success');
      router.push('/auth/otp');
    }, 800);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col flex-1 min-h-0 justify-center">
        <div className="w-14 h-14 rounded-2xl bg-brand-purple/20 flex items-center justify-center mx-auto mb-6">
          <Mail className="w-7 h-7 text-brand-purple" />
        </div>

        <div className="text-center space-y-2 mb-8">
          <h1 className="text-2xl font-bold">Let&apos;s get started</h1>
          <p className="text-brand-muted text-sm">
            Enter your email address to continue
          </p>
        </div>

        <div className="space-y-6">
          <TextInput
            label="Email address"
            value={email}
            onChange={(val) => {
              setEmail(val);
              if (error) setError('');
            }}
            icon={<Mail className="w-5 h-5" />}
            placeholder="john.doe@example.com"
            type="email"
            error={error}
            validated={email.length > 0 && isValidEmail}
          />

          <div className="space-y-4">
            <PrimaryButton
              onClick={handleContinue}
              disabled={!isValidEmail}
              loading={loading}
            >
              Continue
            </PrimaryButton>

            <div className="flex items-center justify-center gap-2 text-xs text-brand-muted">
              <svg className="w-4 h-4 text-brand-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              We&apos;ll never share your email with anyone.
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
