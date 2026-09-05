'use client';

import React from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface SelectInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  error?: string;
  validated?: boolean;
}

export default function SelectInput({
  label,
  value,
  onChange,
  options,
  placeholder = 'Select',
  error,
  validated = false,
}: SelectInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-brand-muted font-medium">{label}</label>
      <div
        className={`
          relative flex items-center px-4 py-3.5 rounded-xl
          bg-brand-input border transition-all
          ${error ? 'border-red-500' : validated ? 'border-brand-success' : 'border-brand-border'}
          input-glow
        `}
      >
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-transparent text-white text-base outline-none appearance-none cursor-pointer"
        >
          <option value="" className="bg-brand-input text-brand-muted">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-brand-input text-white">{opt}</option>
          ))}
        </select>
        <ChevronDown className="w-5 h-5 text-brand-muted flex-shrink-0 pointer-events-none" />
        {validated && (
          <Check className="w-5 h-5 text-brand-success flex-shrink-0 ml-2" />
        )}
      </div>
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
