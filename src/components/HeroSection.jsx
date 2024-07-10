import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedStats from '@/components/AnimatedStats';
import Link from 'next/link';

const HeroSection = () => {
  const handleApplyNow = () => {
    window.open('https://forms.gle/T3mDS3MGaqFu84jz5', '_blank');
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center leading-tight">
          3-Month Internship with nexgen
        </h1>
        <p className="text-xl text-white text-center mb-8">
          Accelerate your career with our intensive program for BTech students
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 transition-colors"
            onClick={handleApplyNow}
          >
            Apply Now
          </Button>
        </div>
        <div className="text-center">
          <Link href="#program-structure" className="text-white hover:text-blue-200 underline">
            View Program Structure
          </Link>
        </div>
        <AnimatedStats />
      </div>
    </section>
  );
};

export default HeroSection;