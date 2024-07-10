import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedStats from '@/components/AnimatedStats';
import CountdownTimer from '@/components/CountdownTimer';

const HeroSection = () => {
  const handleApplyNow = () => {
    window.gtag('event', 'apply_now_click', {
      'event_category': 'Engagement',
      'event_label': 'Hero Section Apply Now',
    });
    window.open('https://forms.gle/T3mDS3MGaqFu84jz5', '_blank');
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-white text-center">
          NexGen 3-Month Internship Program for BTech Students
        </h1>
        <p className="text-xl text-white text-center mb-8">
          Transforming BTech Careers with Intensive Industry-Leading Training and Placements
        </p>
        <div className="flex justify-center mb-8">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 transition-colors"
            onClick={handleApplyNow}
          >
            Apply Now
          </Button>
        </div>
        <CountdownTimer />
        <AnimatedStats />
      </div>
    </section>
  );
};

export default HeroSection;