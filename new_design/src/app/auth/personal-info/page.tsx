'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from 'lucide-react';
import AuthLayout from '@/components/AuthLayout';
import TextInput from '@/components/TextInput';
import RadioGroup from '@/components/RadioGroup';
import PrimaryButton from '@/components/PrimaryButton';
import { useAuthStore } from '@/store/authStore';

const pronounOptions = [
  { label: 'He/Him', value: 'he_him' },
  { label: 'She/Her', value: 'she_her' },
  { label: 'They/Them', value: 'they_them' },
  { label: 'Prefer not to say', value: 'prefer_not' },
];

export default function PersonalInfoPage() {
  const router = useRouter();
  const { personalInfo, setPersonalInfo } = useAuthStore();
  const [fullName, setFullName] = useState(personalInfo.fullName);
  const [age, setAge] = useState(personalInfo.age?.toString() || '');
  const [pronouns, setPronouns] = useState(personalInfo.pronouns);
  const [errors, setErrors] = useState<{ fullName?: string; age?: string }>({});

  const isValidName = fullName.trim().length >= 2;
  const parsedAge = parseInt(age);
  const isValidAge = !isNaN(parsedAge) && parsedAge >= 18 && parsedAge <= 120;
  const isValid = isValidName && isValidAge && pronouns !== '';

  const handleContinue = () => {
    const newErrors: typeof errors = {};
    if (!isValidName) newErrors.fullName = 'Name must be at least 2 characters';
    if (!isValidAge) newErrors.age = age ? 'You must be at least 18 years old' : 'Age is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setPersonalInfo({ fullName, age: parsedAge, pronouns });
    router.push('/auth/location');
  };

  return (
    <AuthLayout>
      <div className="flex flex-col flex-1 min-h-0 justify-center">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-brand-purple/20 flex items-center justify-center mx-auto mb-6">
          <User className="w-7 h-7 text-brand-purple" />
        </div>

        {/* Heading */}
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-2xl font-bold">Tell us about yourself</h1>
          <p className="text-brand-muted text-sm">
            This helps us personalize your experience
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <TextInput
            label="Full name"
            value={fullName}
            onChange={(val) => {
              setFullName(val);
              if (errors.fullName) setErrors({ ...errors, fullName: undefined });
            }}
            placeholder="John Doe"
            error={errors.fullName}
            validated={isValidName}
          />

          <TextInput
            label="Age"
            value={age}
            onChange={(val) => {
              setAge(val.replace(/\D/g, ''));
              if (errors.age) setErrors({ ...errors, age: undefined });
            }}
            type="number"
            placeholder="21"
            error={errors.age}
            validated={isValidAge}
          />

          {age && !isValidAge && !errors.age && (
            <p className="text-xs text-brand-muted -mt-3">You must be at least 18 years old</p>
          )}

          <RadioGroup
            label="Pronouns"
            options={pronounOptions}
            value={pronouns}
            onChange={setPronouns}
          />

          <div className="pt-4">
            <PrimaryButton
              onClick={handleContinue}
              disabled={!isValid}
            >
              Continue
            </PrimaryButton>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
