'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin } from 'lucide-react';
import AuthLayout from '@/components/AuthLayout';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectInput';
import PrimaryButton from '@/components/PrimaryButton';
import { useAuthStore } from '@/store/authStore';

const states = [
  'California', 'New York', 'Texas', 'Florida', 'Illinois',
  'Pennsylvania', 'Ohio', 'Georgia', 'North Carolina', 'Michigan',
];

const citiesByState: Record<string, string[]> = {
  California: ['Los Angeles', 'San Francisco', 'San Diego', 'San Jose', 'Sacramento'],
  'New York': ['New York City', 'Buffalo', 'Rochester', 'Syracuse', 'Albany'],
  Texas: ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth'],
  Florida: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale'],
  Illinois: ['Chicago', 'Springfield', 'Naperville', 'Aurora', 'Peoria'],
  Pennsylvania: ['Philadelphia', 'Pittsburgh', 'Harrisburg', 'Allentown', 'Erie'],
  Ohio: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron'],
  Georgia: ['Atlanta', 'Augusta', 'Savannah', 'Athens', 'Macon'],
  'North Carolina': ['Charlotte', 'Raleigh', 'Durham', 'Greensboro', 'Asheville'],
  Michigan: ['Detroit', 'Grand Rapids', 'Ann Arbor', 'Lansing', 'Flint'],
};

export default function LocationPage() {
  const router = useRouter();
  const { locationInfo, setLocationInfo } = useAuthStore();
  const [state, setState] = useState(locationInfo.state);
  const [city, setCity] = useState(locationInfo.city);
  const [college, setCollege] = useState(locationInfo.college);
  const [errors, setErrors] = useState<{ state?: string; city?: string; college?: string }>({});
  const [loading, setLoading] = useState(false);

  const cities = state && citiesByState[state] ? citiesByState[state] : [];
  const isValid = state !== '' && city !== '' && college.trim().length >= 2;

  const handleComplete = () => {
    const newErrors: typeof errors = {};
    if (!state) newErrors.state = 'Please select a state';
    if (!city) newErrors.city = 'Please select a city';
    if (college.trim().length < 2) newErrors.college = 'Please enter your college name';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLocationInfo({ state, city, college });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col flex-1 min-h-0 justify-center">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-brand-purple/20 flex items-center justify-center mx-auto mb-6">
          <MapPin className="w-7 h-7 text-brand-purple" />
        </div>

        {/* Heading */}
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-2xl font-bold">Almost there!</h1>
          <p className="text-brand-muted text-sm">
            Add a few details to complete your profile
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <SelectInput
            label="State"
            value={state}
            onChange={(val) => {
              setState(val);
              setCity('');
              if (errors.state) setErrors({ ...errors, state: undefined });
            }}
            options={states}
            placeholder="Select state"
            error={errors.state}
            validated={state !== ''}
          />

          <SelectInput
            label="City"
            value={city}
            onChange={(val) => {
              setCity(val);
              if (errors.city) setErrors({ ...errors, city: undefined });
            }}
            options={cities}
            placeholder={state ? 'Select city' : 'Select state first'}
            error={errors.city}
            validated={city !== ''}
          />

          <TextInput
            label="College / Institution"
            value={college}
            onChange={(val) => {
              setCollege(val);
              if (errors.college) setErrors({ ...errors, college: undefined });
            }}
            placeholder="UCLA"
            error={errors.college}
            validated={college.trim().length >= 2}
          />

          <div className="pt-4">
            <PrimaryButton
              onClick={handleComplete}
              disabled={!isValid}
              loading={loading}
            >
              Complete Profile
            </PrimaryButton>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
