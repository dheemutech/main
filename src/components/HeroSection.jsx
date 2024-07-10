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
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center leading-tight">
          3-Months Internship with NexGen
        </h1>
        <p className="text-xl text-white text-center mb-10">
          Accelerate your career with our intensive program for BTech students
        </p>
        <div className="flex justify-center mb-12">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 transition-colors px-8 py-3 text-lg font-semibold"
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