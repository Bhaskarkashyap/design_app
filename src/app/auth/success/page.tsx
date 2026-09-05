'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import MobileContainer from '@/components/MobileContainer';
import Logo from '@/components/Logo';
import ConfettiCheckmark from '@/components/ConfettiCheckmark';
import PrimaryButton from '@/components/PrimaryButton';
import { useAuthStore } from '@/store/authStore';

export default function SuccessPage() {
  const router = useRouter();
  const { reset } = useAuthStore();

  const handleEnter = () => {
    reset();
    router.push('/home');
  };

  return (
    <MobileContainer>
      <div className="flex flex-col items-center justify-center h-full px-6 safe-area-top safe-area-bottom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Logo size="lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <ConfettiCheckmark />
        </motion.div>

        <motion.div
          className="text-center space-y-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h1 className="text-2xl font-bold">You&apos;re all set!</h1>
          <p className="text-brand-muted text-sm leading-relaxed">
            Welcome to Extroverts 🎉
            <br />
            Start exploring events and meet amazing people.
          </p>
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <PrimaryButton onClick={handleEnter}>
            Enter Extroverts
          </PrimaryButton>
        </motion.div>
      </div>
    </MobileContainer>
  );
}
