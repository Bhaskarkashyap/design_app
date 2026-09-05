'use client';

import React from 'react';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  label: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function RadioGroup({ label, options, value, onChange }: RadioGroupProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm text-brand-muted font-medium">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const isSelected = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-medium
                border transition-all
                ${
                  isSelected
                    ? 'bg-brand-magenta border-brand-magenta text-white'
                    : 'bg-transparent border-brand-border text-brand-muted hover:border-brand-magenta/50'
                }
              `}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
