'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/AuthLayout';
import Checkbox from '@/components/Checkbox';
import PrimaryButton from '@/components/PrimaryButton';
import { useToast } from '@/components/ToastProvider';

const terms = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing or using Extroverts, you agree to be bound by these Terms & Conditions.',
  },
  {
    title: '2. Use of the App',
    content: 'Extroverts is a social platform for discovering events and meeting new people. You agree to use the app responsibly and respectfully.',
  },
  {
    title: '3. User Conduct',
    content: 'You agree not to misuse the app, harass other users, or post inappropriate content.',
  },
  {
    title: '4. Privacy',
    content: 'Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your data.',
  },
  {
    title: '5. Changes',
    content: 'We may update these terms from time to time. Continued use of the app means you accept the updated terms.',
  },
];

export default function TermsPage() {
  const router = useRouter();
  const { addToast } = useToast();
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleContinue = () => {
    if (!agreed) {
      addToast('Please agree to the Terms & Conditions', 'warning');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/auth/email');
    }, 500);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col flex-1 min-h-0">
        <h1 className="text-2xl font-bold text-center mb-4 flex-shrink-0">Terms & Conditions</h1>

        <div className="flex-1 overflow-y-auto no-scrollbar space-y-4 mb-4 pr-1 min-h-0 flex flex-col justify-center">
          {terms.map((term) => (
            <div key={term.title} className="space-y-1">
              <h3 className="text-sm font-semibold text-white">{term.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{term.content}</p>
            </div>
          ))}
        </div>

        <div className="mb-3 flex-shrink-0">
          <Checkbox
            label="I agree to the Terms & Conditions"
            checked={agreed}
            onChange={setAgreed}
          />
        </div>

        <div className="flex-shrink-0">
          <PrimaryButton
            disabled={!agreed}
            onClick={handleContinue}
            loading={loading}
          >
            Continue
          </PrimaryButton>
        </div>
      </div>
    </AuthLayout>
  );
}
