'use client';

import React, { useRef, KeyboardEvent, ClipboardEvent } from 'react';

interface OtpInputProps {
  value: string;
  onChange: (value: string) => void;
  length?: number;
  error?: string;
}

export default function OtpInput({ value, onChange, length = 6, error }: OtpInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, digit: string) => {
    if (!/^\d*$/.test(digit)) return;

    const newValue = value.split('');
    newValue[index] = digit;
    const joined = newValue.join('').slice(0, length);
    onChange(joined);

    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
    onChange(pasted);
    if (pasted.length > 0) {
      inputRefs.current[Math.min(pasted.length, length - 1)]?.focus();
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-3 justify-center">
        {Array.from({ length }, (_, i) => (
          <div
            key={i}
            className={`
              w-12 h-14 rounded-xl bg-brand-input border flex items-center justify-center
              transition-all text-xl font-semibold
              ${value[i] ? 'border-brand-magenta' : 'border-brand-border'}
              ${error ? 'border-red-500' : ''}
            `}
          >
            <input
              ref={(el) => { inputRefs.current[i] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={value[i] || ''}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              onPaste={handlePaste}
              className="w-full h-full bg-transparent text-center text-white text-xl font-semibold outline-none caret-white"
            />
          </div>
        ))}
      </div>
      {error && <p className="text-red-400 text-xs text-center mt-1">{error}</p>}
    </div>
  );
}
