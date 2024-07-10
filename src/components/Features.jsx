import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Edit, Code, Brain, Users, Rocket, MessageCircle, UserPlus } from 'lucide-react';

const Features = () => {
  const features = [
    { title: "Intensive 3-Months Internship", icon: <Award className="w-12 h-12 mb-4 text-yellow-500" />, description: "Accelerated program designed to rapidly prepare BTech students for top internships at leading companies like TCS, Cognizant, and Mindtree in just 3 months." },
    { title: "Certified Internship Certificate", icon: <BookOpen className="w-12 h-12 mb-4 text-green-500" />, description: "Earn a valuable 3-months internship credential recognized by leading tech companies across India, instantly boosting your resume and career prospects." },
    { title: "Fast-Track Hands-on Training", icon: <Code className="w-12 h-12 mb-4 text-purple-500" />, description: "Receive intensive, industry-relevant training in full-stack development, Python, and cloud computing with rapid hands-on projects completed within the 3-months timeframe." },
    { title: "AI-Powered Interview Preparation", icon: <Brain className="w-12 h-12 mb-4 text-red-500" />, description: "Quickly master interview skills with our advanced AI interviewer, covering both technical and behavioral aspects specific to top Indian tech companies in record time." },
    { title: "Accelerated Industry Expert Access", icon: <Users className="w-12 h-12 mb-4 text-indigo-500" />, description: "Gain rapid insights from software developers working in top companies like TCS, Cognizant, and Mindtree through our condensed expert session format." },
    { title: "High-Impact Capstone Project", icon: <Rocket className="w-12 h-12 mb-4 text-orange-500" />, description: "Complete a standout portfolio piece in just 3 months, applying your skills in AI, ML, and full-stack development to solve real-world problems aligned with industry needs." },
    { title: "Exclusive Fast-Track Networking", icon: <MessageCircle className="w-12 h-12 mb-4 text-green-600" />, description: "Join our exclusive WhatsApp group for immediate updates on job and internship opportunities at top Indian tech companies, connecting with peers and mentors in a high-energy community." },
    { title: "Rapid Personalized Mentorship", icon: <UserPlus className="w-12 h-12 mb-4 text-blue-600" />, description: "Receive intensive one-on-one guidance for your projects, career decisions, and technical challenges from experienced professionals in the Indian tech industry, compressed into our 3-months timeline." },
    { title: "Expedited Resume Enhancement", icon: <Edit className="w-12 h-12 mb-4 text-blue-500" />, description: "Get fast-tracked professional assistance to make your resume stand out in just 3 months, tailored to catch the eye of top tech recruiters from TCS, Cognizant, and Mindtree." },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Accelerated 3-Months Program Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-4 text-center">{feature.title}</h3>
              </div>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;