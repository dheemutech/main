import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 z-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
            onClick={() => {
              window.gtag('event', 'click', {
                'event_category': 'CTA',
                'event_label': 'Apply Now - Floating',
              });
              window.open('https://forms.gle/T3mDS3MGaqFu84jz5', '_blank');
            }}
          >
            Apply Now
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;