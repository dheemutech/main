import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const AnimatedNumber = ({ value, duration }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      });

      let start = 0;
      const end = parseInt(value);
      const incrementTime = (duration / end) * 1000;

      const timer = setInterval(() => {
        start += 1;
        setCurrentValue(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [controls, inView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      {currentValue}
      {value === 1000 ? '+' : '%'}
    </motion.span>
  );
};

export const AnimatedStats = () => {
  return (
    <section className="py-16 bg-white rounded-lg shadow-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Impact on BTech Careers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="text-center p-6 bg-blue-50 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-4xl font-bold text-blue-600 mb-2">
              <AnimatedNumber value={90} duration={2} />
            </p>
            <p className="text-xl text-gray-700">Placement Rate for BTech Graduates</p>
            <p className="text-sm text-gray-500 mt-2">Percentage of our graduates successfully placed within 3 months</p>
          </motion.div>
          <motion.div 
            className="text-center p-6 bg-green-50 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-4xl font-bold text-green-600 mb-2">
              <AnimatedNumber value={1000} duration={2} />
            </p>
            <p className="text-xl text-gray-700">BTech Students Trained</p>
            <p className="text-sm text-gray-500 mt-2">Number of students who have completed our intensive 3-months program</p>
          </motion.div>
          <motion.div 
            className="text-center p-6 bg-purple-50 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-4xl font-bold text-purple-600 mb-2">
              <AnimatedNumber value={50} duration={2} />
            </p>
            <p className="text-xl text-gray-700">Partner Companies</p>
            <p className="text-sm text-gray-500 mt-2">Top tech companies collaborating with us for placements</p>
          </motion.div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-2xl font-bold mb-4 text-gray-800">Our Top Recruiting Partners for BTech Graduates</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {['TCS', 'Cognizant', 'Mindtree'].map((company) => (
              <motion.div 
                key={company} 
                className="bg-gray-100 px-6 py-3 rounded-lg shadow-md"
                whileHover={{ scale: 1.1, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
              >
                <p className="text-lg font-semibold text-gray-800">{company}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl text-gray-700">
            Our BTech graduates have been successfully placed in top companies after just 3 months of intensive training.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;