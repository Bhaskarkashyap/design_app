import React from 'react';

interface StepBadgeProps {
  current: number;
  total: number;
}

export default function StepBadge({ current, total }: StepBadgeProps) {
  return (
    <div className="px-3 py-1 rounded-full border border-brand-border bg-brand-card text-xs text-brand-muted font-medium">
      Step {current} of {total}
    </div>
  );
}
