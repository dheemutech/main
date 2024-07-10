import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000; // 7 days from now

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-8">
      <p className="text-lg mb-2">Limited spots available! Apply before:</p>
      <div className="flex justify-center space-x-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div
            key={unit}
            className="bg-white text-blue-600 rounded-lg p-2 shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold">{value}</span>
            <span className="text-sm block">{unit}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;