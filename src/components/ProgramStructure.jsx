import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Users, Award } from 'lucide-react';

const ProgramStructure = () => {
  const phases = [
    { title: "Phase 1: Rapid Skill Development", icon: <Code className="w-12 h-12 mb-4 text-blue-600" />, duration: "4 weeks", items: [
      "Accelerated full-stack development bootcamp with industry-standard practices",
      "Intensive Python programming and cloud computing crash course",
      "Fast-track introduction to AI and machine learning fundamentals"
    ]},
    { title: "Phase 2: Career Preparation Sprint", icon: <Brain className="w-12 h-12 mb-4 text-green-600" />, duration: "4 weeks", items: [
      "High-intensity resume building workshop tailored for top tech companies",
      "Rapid-fire AI-powered interview practice sessions",
      "Condensed soft skills and Indian corporate culture training",
      "Fast-track mentorship sessions with industry experts"
    ]},
    { title: "Phase 3: Project Application Blitz", icon: <Rocket className="w-12 h-12 mb-4 text-purple-600" />, duration: "4 weeks", items: [
      "Agile capstone project development addressing real industry challenges",
      "Daily mentor check-ins and rapid iteration cycles",
      "Intensive project presentations and feedback sessions"
    ]},
    { title: "Certification & Immediate Support", icon: <Award className="w-12 h-12 mb-4 text-yellow-600" />, duration: "Upon Completion", items: [
      "Receive a certified 3-month internship certificate recognized by top tech companies",
      "Rapid performance evaluation and personalized recommendation letter",
      "Immediate access to job placement support and industry connections"
    ]}
  ];

  return (
    <section id="program-structure" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Intensive 3-Month Program Structure</h2>
        <p className="text-center text-xl mb-12">Our accelerated 3-month program is meticulously designed to rapidly prepare BTech students for immediate success in leading Indian tech companies like TCS, Cognizant, and Mindtree.</p>
        
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