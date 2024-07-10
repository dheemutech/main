import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedStats from '@/components/AnimatedStats';

const HeroSection = () => {
  const handleApplyNow = () => {
    window.open('https://forms.gle/T3mDS3MGaqFu84jz5', '_blank');
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center leading-tight">
          3-Month Internship with nexgen
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 transition-colors"
            onClick={handleApplyNow}
          >
            Apply Now
          </Button>
        </div>
        <AnimatedStats />
      </div>
    </section>
  );
};

export default HeroSection;