import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">NexGen</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/#features" className="text-gray-600 hover:text-blue-600">Features</Link></li>
            <li><Link href="/#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</Link></li>
            <li><Link href="/#faq" className="text-gray-600 hover:text-blue-600">FAQ</Link></li>
          </ul>
        </nav>
        <Button asChild>
          <a href="https://forms.gle/T3mDS3MGaqFu84jz5" target="_blank" rel="noopener noreferrer">Apply Now</a>
        </Button>
      </div>
    </header>
  );
};