import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Users } from 'lucide-react';

const ProgramStructure = () => {
  const phases = [
    { title: "Phase 1: Skill Development", icon: <Code className="w-12 h-12 mb-4 text-blue-600" />, duration: "4 weeks", items: [
      "Full-stack development fundamentals",
      "Python programming and cloud computing",
      "Introduction to AI and machine learning"
    ]},
    { title: "Phase 2: Career Preparation", icon: <Brain className="w-12 h-12 mb-4 text-green-600" />, duration: "2 weeks", items: [
      "Resume building workshop",
      "AI-powered interview practice",
      "Soft skills training",
      "Industry expert mentorship"
    ]},
    { title: "Phase 3: Project Application", icon: <Rocket className="w-12 h-12 mb-4 text-purple-600" />, duration: "2 months", items: [
      "Capstone project ideation and planning",
      "Project development with mentor check-ins",
      "Final project presentations"
    ]},
    { title: "Ongoing Support", icon: <Users className="w-12 h-12 mb-4 text-orange-600" />, duration: "Lifetime", items: [
      "Access to learning resources",
      "Bi-weekly webinars",
      "Alumni networking events",
      "Exclusive job board access"
    ]}
  ];

  return (
    <section id="program-structure" className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 dark:text-white">Program Structure</h2>
        <p className="text-center text-xl mb-12 dark:text-gray-300">Our comprehensive program is designed to take you from learning to earning in four key phases.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {phases.map((phase, index) => (
            <motion.div 
              key={index}
              className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center mb-4">
                {phase.icon}
                <h3 className="text-2xl font-semibold mb-2 dark:text-white text-center">{phase.title}</h3>
                <span className="text-lg font-medium text-gray-600 dark:text-gray-300">{phase.duration}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 dark:text-gray-200">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-lg">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramStructure;