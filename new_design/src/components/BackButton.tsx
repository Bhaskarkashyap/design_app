'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClick?: () => void;
}

export default function BackButton({ onClick }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={onClick || (() => router.back())}
      className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
      aria-label="Go back"
    >
      <ArrowLeft className="w-5 h-5 text-white" />
    </button>
  );
}
