'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  placeholder?: string;
  type?: string;
  error?: string;
  validated?: boolean;
  disabled?: boolean;
}

export default function TextInput({
  label,
  value,
  onChange,
  icon,
  placeholder,
  type = 'text',
  error,
  validated = false,
  disabled = false,
}: TextInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-brand-muted font-medium">{label}</label>
      <div
        className={`
          flex items-center gap-3 px-4 py-3.5 rounded-xl
          bg-brand-input border transition-all
          ${error ? 'border-red-500' : validated ? 'border-brand-success' : 'border-brand-border'}
          input-glow
        `}
      >
        {icon && <span className="text-brand-muted">{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className="flex-1 bg-transparent text-white text-base outline-none placeholder:text-brand-muted disabled:opacity-50"
        />
        {validated && (
          <Check className="w-5 h-5 text-brand-success flex-shrink-0" />
        )}
      </div>
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
