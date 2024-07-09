import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mahesh Reddy",
      role: "Software Engineer at TCS",
      content: "NexGen's 3-month internship program was a game-changer for my career. The hands-on experience and mentorship I received as a BTech student were invaluable in securing my position at TCS.",
    },
    {
      name: "Aakash Chowary",
      role: "Data Scientist at Cognizant",
      content: "The AI and ML training I got during NexGen's comprehensive internship prepared me perfectly for my role at Cognizant. It's an excellent program for aspiring BTech graduates in tech.",
    },
    {
      name: "Priya Sharma",
      role: "Frontend Developer at Mindtree",
      content: "NexGen's focus on real-world projects and cutting-edge technologies gave me a significant advantage in my job search. The certified internship certificate was a great addition to my resume!",
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">What Our BTech Graduates Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;