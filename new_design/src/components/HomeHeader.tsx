'use client';

import React from 'react';
import { Search, Bell } from 'lucide-react';
import Logo from './Logo';

export default function HomeHeader() {
  return (
    <div className="space-y-4 pt-4 pb-2 px-5">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <Logo size="md" />
        <div className="flex items-center gap-3">
          <button className="relative w-10 h-10 flex items-center justify-center rounded-full bg-brand-card border border-brand-border">
            <Bell className="w-5 h-5 text-brand-muted" />
            <div className="absolute top-2 right-2.5 w-2 h-2 bg-brand-magenta rounded-full" />
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-brand-purple flex items-center justify-center text-white text-sm font-bold">
            JD
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-brand-muted text-xs">
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        <span>Los Angeles, California</span>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-brand-input border border-brand-border">
        <Search className="w-5 h-5 text-brand-muted flex-shrink-0" />
        <input
          type="text"
          placeholder="Search events, people, places..."
          className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-brand-muted"
        />
      </div>
    </div>
  );
}
