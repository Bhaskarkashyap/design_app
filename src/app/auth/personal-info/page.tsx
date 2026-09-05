'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from 'lucide-react';
import AuthLayout from '@/components/AuthLayout';
import TextInput from '@/components/TextInput';
import RadioGroup from '@/components/RadioGroup';
import PrimaryButton from '@/components/PrimaryButton';
import { useAuthStore } from '@/store/authStore';
import { useToast } from '@/components/ToastProvider';

const pronounOptions = [
  { label: 'He/Him', value: 'he_him' },
  { label: 'She/Her', value: 'she_her' },
  { label: 'They/Them', value: 'they_them' },
  { label: 'Prefer not to say', value: 'prefer_not' },
];

export default function PersonalInfoPage() {
  const router = useRouter();
  const { addToast } = useToast();
  const { personalInfo, setPersonalInfo } = useAuthStore();
  const [fullName, setFullName] = useState(personalInfo.fullName);
  const [age, setAge] = useState(personalInfo.age?.toString() || '');
  const [pronouns, setPronouns] = useState(personalInfo.pronouns);
  const [errors, setErrors] = useState<{ fullName?: string; age?: string }>({});
  const [loading, setLoading] = useState(false);

  const isValidName = fullName.trim().length >= 2;
  const parsedAge = parseInt(age);
  const isValidAge = !isNaN(parsedAge) && parsedAge >= 18 && parsedAge <= 120;
  const isUnderAge = age !== '' && !isNaN(parsedAge) && parsedAge < 18;
  const isValid = isValidName && isValidAge && pronouns !== '';

  const handleContinue = () => {
    const newErrors: typeof errors = {};
    if (!isValidName) {
      newErrors.fullName = fullName ? 'Name must be at least 2 characters' : 'Full name is required';
    }
    if (!age) {
      newErrors.age = 'Age is required';
    } else if (isUnderAge) {
      newErrors.age = 'You must be at least 18 years old to use this app';
    } else if (!isValidAge) {
      newErrors.age = 'Please enter a valid age';
    }
    if (!pronouns) {
      addToast('Please select your pronouns', 'warning');
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      if (newErrors.fullName) addToast(newErrors.fullName, 'error');
      if (newErrors.age) addToast(newErrors.age, 'error');
      return;
    }

    setErrors({});
    setPersonalInfo({ fullName, age: parsedAge, pronouns });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      addToast('Personal info saved', 'success');
      router.push('/auth/location');
    }, 600);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col flex-1 min-h-0 justify-center">
        <div className="w-14 h-14 rounded-2xl bg-brand-purple/20 flex items-center justify-center mx-auto mb-6">
          <User className="w-7 h-7 text-brand-purple" />
        </div>

        <div className="text-center space-y-2 mb-8">
          <h1 className="text-2xl font-bold">Tell us about yourself</h1>
          <p className="text-brand-muted text-sm">
            This helps us personalize your experience
          </p>
        </div>

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

          {isUnderAge && !errors.age && (
            <p className="text-xs text-yellow-400 -mt-3">You must be at least 18 years old to use this app</p>
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
              loading={loading}
            >
              Continue
            </PrimaryButton>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
