'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex items-start gap-3 text-left"
    >
      <div
        className={`
          w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5
          border transition-all
          ${checked
            ? 'bg-brand-magenta border-brand-magenta'
            : 'border-brand-border bg-brand-input'
          }
        `}
      >
        {checked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </div>
      <span className="text-sm text-brand-muted leading-relaxed">{label}</span>
    </button>
  );
}
