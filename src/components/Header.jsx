import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-white shadow-md dark:bg-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">NexGen</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/#program-structure" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Program</Link></li>
            <li><Link href="/#features" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Features</Link></li>
            <li><Link href="/#testimonials" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Testimonials</Link></li>
            <li><Link href="/#faq" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">FAQ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};