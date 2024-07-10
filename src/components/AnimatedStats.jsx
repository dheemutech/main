import React from 'react';

export const AnimatedStats = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Impact on BTech Careers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">85%</p>
            <p className="text-xl text-gray-600 dark:text-gray-300">Placement Rate for BTech Graduates</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">1000+</p>
            <p className="text-xl text-gray-600 dark:text-gray-300">BTech Students Trained</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">50+</p>
            <p className="text-xl text-gray-600 dark:text-gray-300">Partner Companies</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-2xl font-bold mb-4 dark:text-white">Our Top Recruiting Partners for BTech Graduates</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {['TCS', 'Cognizant', 'Mindtree'].map((company) => (
              <div key={company} className="bg-white dark:bg-gray-700 px-6 py-3 rounded-lg shadow-md">
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">{company}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Our BTech graduates have been successfully placed in top companies like TCS, Cognizant, and Mindtree.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;