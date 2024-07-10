import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Users, Award } from 'lucide-react';

const ProgramStructure = () => {
  const phases = [
    { title: "Phase 1: Intensive Skill Development", icon: <Code className="w-12 h-12 mb-4 text-blue-600" />, duration: "4 weeks", items: [
      "Accelerated full-stack development bootcamp aligned with industry standards",
      "Intensive Python programming and cloud computing practices used by top Indian tech companies",
      "Rapid introduction to AI and machine learning with real-world applications"
    ]},
    { title: "Phase 2: Career Preparation Sprint", icon: <Brain className="w-12 h-12 mb-4 text-green-600" />, duration: "4 weeks", items: [
      "Fast-track resume building workshop tailored for TCS, Cognizant, and Mindtree",
      "High-intensity AI-powered interview practice simulating actual company interviews",
      "Condensed soft skills training focused on Indian corporate culture",
      "Accelerated industry expert mentorship from professionals at leading tech companies"
    ]},
    { title: "Phase 3: Rapid Project Application", icon: <Rocket className="w-12 h-12 mb-4 text-purple-600" />, duration: "4 weeks", items: [
      "Quick-fire capstone project ideation and planning based on real industry challenges",
      "Agile project development with frequent mentor check-ins from experienced professionals",
      "Rapid-fire project presentations to simulate high-pressure client or stakeholder meetings"
    ]},
    { title: "Certification & Ongoing Support", icon: <Award className="w-12 h-12 mb-4 text-yellow-600" />, duration: "Upon Completion", items: [
      "Receive a certified 3-month internship certificate recognized by top tech companies",
      "Comprehensive performance evaluation and personalized recommendation letter",
      "Portfolio of projects and skills tailored for BTech students' rapid career launch"
    ]}
  ];

  return (
    <section id="program-structure" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Program Structure</h2>
        <p className="text-center text-xl mb-12">Our intensive 3-month program is designed specifically for BTech students, rapidly preparing you for success at leading Indian tech companies like TCS, Cognizant, and Mindtree.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {phases.map((phase, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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