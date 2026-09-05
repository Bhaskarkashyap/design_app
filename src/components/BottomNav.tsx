'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Home, Compass, PlusCircle, Bell, User } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { icon: Home, label: 'Home', href: '/home' },
  { icon: Compass, label: 'Explore', href: '/home/explore' },
  { icon: PlusCircle, label: 'Create', href: '/home/create' },
  { icon: Bell, label: 'Alerts', href: '/home/alerts' },
  { icon: User, label: 'Profile', href: '/home/profile' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-brand-card/95 backdrop-blur-lg border-t border-brand-border z-50">
      <div className="flex items-center justify-around py-2 px-2 safe-area-bottom">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-colors ${
                isActive ? 'text-white' : 'text-brand-muted'
              }`}
            >
              <Icon
                className={`w-6 h-6 ${isActive ? 'text-white' : 'text-brand-muted'}`}
                strokeWidth={isActive ? 2.5 : 1.5}
              />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
