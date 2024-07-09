import React from 'react';

export const AnimatedStats = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">500+</p>
            <p className="text-xl text-gray-600 dark:text-gray-300">Successful Placements</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">50+</p>
            <p className="text-xl text-gray-600 dark:text-gray-300">Partner Companies</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">95%</p>
            <p className="text-xl text-gray-600 dark:text-gray-300">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;