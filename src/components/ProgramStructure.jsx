import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Users } from 'lucide-react';

const ProgramStructure = () => {
  const phases = [
    { title: "Phase 1: Skill Development", icon: <Code className="w-12 h-12 mb-4 text-blue-600" />, duration: "4 weeks", items: [
      "Full-stack development fundamentals (HTML, CSS, JavaScript, React)",
      "Python programming and cloud computing essentials (AWS basics)",
      "Introduction to AI and machine learning with practical exercises"
    ]},
    { title: "Phase 2: Career Preparation", icon: <Brain className="w-12 h-12 mb-4 text-green-600" />, duration: "2 weeks", items: [
      "Resume building workshop and ATS optimization techniques",
      "AI-powered interview practice sessions (technical and behavioral)",
      "Soft skills training (communication, teamwork, problem-solving)",
      "Industry expert mentorship sessions and networking events"
    ]},
    { title: "Phase 3: Project Application", icon: <Rocket className="w-12 h-12 mb-4 text-purple-600" />, duration: "2 months", items: [
      "Capstone project ideation and planning",
      "Project development with weekly mentor check-ins",
      "Final project presentations and peer reviews"
    ]},
    { title: "Ongoing Support", icon: <Users className="w-12 h-12 mb-4 text-orange-600" />, duration: "Lifetime", items: [
      "24/7 access to learning resources and coding challenges",
      "Bi-weekly webinars on emerging technologies and industry trends",
      "Monthly alumni networking events and job fairs",
      "Lifetime access to NexGen's exclusive job board and internship postings"
    ]}
  ];

  return (
    <section id="program-structure" className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Program Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {phases.map((phase, index) => (
            <motion.div 
              key={index}
              className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center mb-6">
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