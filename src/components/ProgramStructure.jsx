import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Users, Award } from 'lucide-react';

const ProgramStructure = () => {
  const phases = [
    { title: "Phase 1: Skill Development", icon: <Code className="w-12 h-12 mb-4 text-blue-600" />, duration: "4 weeks", items: [
      "Full-stack development fundamentals aligned with industry standards",
      "Python programming and cloud computing practices used by top Indian tech companies",
      "Introduction to AI and machine learning with real-world applications"
    ]},
    { title: "Phase 2: Career Preparation", icon: <Brain className="w-12 h-12 mb-4 text-green-600" />, duration: "4 weeks", items: [
      "Resume building workshop tailored for TCS, Cognizant, and Mindtree",
      "AI-powered interview practice simulating actual company interviews",
      "Soft skills training focused on Indian corporate culture",
      "Industry expert mentorship from professionals at leading tech companies"
    ]},
    { title: "Phase 3: Project Application", icon: <Rocket className="w-12 h-12 mb-4 text-purple-600" />, duration: "4 weeks", items: [
      "Capstone project ideation and planning based on real industry challenges",
      "Project development with mentor check-ins from experienced professionals",
      "Final project presentations to simulate client or stakeholder meetings"
    ]},
    { title: "Certification", icon: <Award className="w-12 h-12 mb-4 text-yellow-600" />, duration: "Upon Completion", items: [
      "Receive a certified internship certificate recognized by top tech companies",
      "Detailed performance evaluation and personalized recommendation letter",
      "Portfolio of projects and skills tailored for BTech students"
    ]},
    { title: "Ongoing Support", icon: <Users className="w-12 h-12 mb-4 text-orange-600" />, duration: "Lifetime", items: [
      "Access to learning resources and industry updates",
      "Bi-weekly webinars featuring speakers from TCS, Cognizant, and Mindtree",
      "Alumni networking events with successful placements in top Indian tech companies",
      "Exclusive job board access for opportunities at partner companies"
    ]}
  ];

  return (
    <section id="program-structure" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Program Structure</h2>
        <p className="text-center text-xl mb-12">Our comprehensive 3-month program is designed specifically for BTech students, preparing you for success at leading Indian tech companies like TCS, Cognizant, and Mindtree.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {phases.map((phase, index) => (
            <motion.div 
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center mb-4">
                {phase.icon}
                <h3 className="text-2xl font-semibold mb-2 text-center">{phase.title}</h3>
                <span className="text-lg font-medium text-gray-600">{phase.duration}</span>
              </div>
              <ul className="list-disc list-inside space-y-2">
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