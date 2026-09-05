'use client';

import React from 'react';
import { MapPin, Calendar, Clock, Users } from 'lucide-react';

interface EventCardProps {
  title: string;
  location: string;
  date: string;
  time: string;
  attendees: number;
  image: string;
  gradient?: boolean;
}

export default function EventCard({ title, location, date, time, attendees, image, gradient }: EventCardProps) {
  return (
    <div className={`rounded-2xl overflow-hidden bg-brand-card border border-brand-border ${gradient ? 'ring-1 ring-brand-magenta/30' : ''}`}>
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
        {gradient && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-brand-magenta/80 text-[10px] font-semibold text-white">
            Featured
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        <h3 className="text-base font-semibold text-white leading-tight">{title}</h3>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-brand-muted text-xs">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-4 text-brand-muted text-xs">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{time}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5 text-brand-muted text-xs">
            <Users className="w-3.5 h-3.5" />
            <span>{attendees} going</span>
          </div>
          <button className="px-4 py-1.5 rounded-full gradient-btn text-white text-xs font-semibold">
            Join
          </button>
        </div>
      </div>
    </div>
  );
}
