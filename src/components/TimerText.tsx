'use client';

import React, { useState, useEffect } from 'react';

interface TimerTextProps {
  initialSeconds?: number;
  onResend?: () => void;
}

export default function TimerText({ initialSeconds = 28, onResend }: TimerTextProps) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    setSeconds(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const formatted = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;

  if (seconds > 0) {
    return (
      <p className="text-sm text-brand-muted text-center">
        Resend code in{' '}
        <span className="text-white font-medium">{formatted}</span>
      </p>
    );
  }

  return (
    <button
      onClick={() => {
        onResend?.();
      }}
      className="text-sm text-brand-magenta font-medium hover:underline"
    >
      Resend
    </button>
  );
}
