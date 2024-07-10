import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-white shadow-md dark:bg-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">NexGen</Link>
        <nav>
          <Link href="/#program-structure" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Program</Link>
        </nav>
      </div>
    </header>
  );
};