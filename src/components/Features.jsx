import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Edit, Code, Brain, Users, Rocket, MessageCircle, UserPlus } from 'lucide-react';

const Features = () => {
  const features = [
    { title: "Internship Training", icon: <Award className="w-12 h-12 mb-4 text-yellow-500" />, description: "Comprehensive program to prepare you for top internships at leading companies like TCS, Cognizant, Tech Mahindra, and Mindtree." },
    { title: "Certified Internship Certificate", icon: <BookOpen className="w-12 h-12 mb-4 text-green-500" />, description: "Gain a valuable credential to boost your resume, recognized by leading tech companies across India." },
    { title: "Resume Editing", icon: <Edit className="w-12 h-12 mb-4 text-blue-500" />, description: "Professional assistance to make your resume stand out, tailored to catch the eye of top tech recruiters from TCS, Cognizant, and more." },
    { title: "Cutting-Edge Tech Training", icon: <Code className="w-12 h-12 mb-4 text-purple-500" />, description: "Learn full-stack development, Python, and cloud computing with hands-on projects using the latest technologies used by industry leaders." },
    { title: "AI-Powered Interview Practice", icon: <Brain className="w-12 h-12 mb-4 text-red-500" />, description: "Prepare for interviews with our advanced AI interviewer, covering both technical and behavioral aspects specific to top Indian tech companies." },
    { title: "Access to Industry Experts", icon: <Users className="w-12 h-12 mb-4 text-indigo-500" />, description: "Learn from and network with software developers working in top companies like TCS, Cognizant, Tech Mahindra, and Mindtree." },
    { title: "2-Month Final Project", icon: <Rocket className="w-12 h-12 mb-4 text-orange-500" />, description: "Apply your skills in AI, ML, and full-stack development to solve real-world problems, building a standout portfolio piece aligned with industry needs." },
    { title: "Exclusive WhatsApp Group", icon: <MessageCircle className="w-12 h-12 mb-4 text-green-600" />, description: "Stay updated on job and internship opportunities at top Indian tech companies, and connect with peers and mentors in a supportive community." },
    { title: "Personalized Mentorship", icon: <UserPlus className="w-12 h-12 mb-4 text-blue-600" />, description: "Get one-on-one guidance for your side projects, career decisions, and technical challenges from experienced professionals in the Indian tech industry." },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Program Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-4 dark:text-white text-center">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;