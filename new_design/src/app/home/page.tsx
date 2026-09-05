'use client';

import React, { useState } from 'react';
import MobileContainer from '@/components/MobileContainer';
import HomeHeader from '@/components/HomeHeader';
import EventCard from '@/components/EventCard';
import BottomNav from '@/components/BottomNav';

const categories = ['All', 'Parties', 'Hangouts', 'Events', 'Concerts', 'Sports'];

const featuredEvent = {
  title: 'Neon Nights Rooftop Party',
  location: 'Skyline Lounge, Downtown LA',
  date: 'Sat, Aug 23',
  time: '9 PM',
  attendees: 234,
  image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
  gradient: true,
};

const upcomingEvents = [
  {
    title: 'Beach Bonfire & Music Night',
    location: 'Santa Monica Beach',
    date: 'Sun, Aug 24',
    time: '7 PM',
    attendees: 128,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
  },
  {
    title: 'Vintage Market & Brunch',
    location: 'The Grove, LA',
    date: 'Sat, Aug 30',
    time: '10 AM',
    attendees: 89,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
  },
  {
    title: 'Indie Rock Live Session',
    location: 'The Echo, Echo Park',
    date: 'Fri, Sep 5',
    time: '8 PM',
    attendees: 156,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
  },
  {
    title: 'Sunset Yoga in the Park',
    location: 'Griffith Observatory Lawn',
    date: 'Sun, Sep 7',
    time: '6 PM',
    attendees: 67,
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80',
  },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <MobileContainer>
      <div className="h-full bg-brand-dark overflow-y-auto no-scrollbar pb-24">
        <HomeHeader />

        <div className="px-5 mt-4 space-y-6">
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-5 px-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'gradient-btn text-white'
                    : 'bg-brand-card border border-brand-border text-brand-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Featured</h2>
              <button className="text-brand-magenta text-sm font-medium">See all</button>
            </div>
            <EventCard {...featuredEvent} />
          </div>

          {/* Upcoming */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Upcoming Events</h2>
              <button className="text-brand-magenta text-sm font-medium">See all</button>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event, i) => (
                <EventCard key={i} {...event} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </MobileContainer>
  );
}
