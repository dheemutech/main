import React from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FAQ } from '@/components/FAQ';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <Layout>
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Launch Your Career with NexGen
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive internship training for Indian undergrads
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" asChild>
              <a href="https://forms.gle/T3mDS3MGaqFu84jz5" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Program Structure Section */}
      <section id="program-structure" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Program Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Phase 1: Skill Development</h3>
              <ul className="list-disc list-inside space-y-2 dark:text-gray-200">
                <li>Intensive coding bootcamp</li>
                <li>Full-stack development fundamentals</li>
                <li>Python and cloud computing essentials</li>
                <li>AI and machine learning introduction</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Phase 2: Career Preparation</h3>
              <ul className="list-disc list-inside space-y-2 dark:text-gray-200">
                <li>Resume building and optimization</li>
                <li>AI-powered interview practice</li>
                <li>Soft skills and communication training</li>
                <li>Industry expert mentorship sessions</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Phase 3: Project Application</h3>
              <ul className="list-disc list-inside space-y-2 dark:text-gray-200">
                <li>2-month capstone project</li>
                <li>Real-world problem-solving</li>
                <li>Collaboration with peers</li>
                <li>Guidance from industry mentors</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Ongoing Support</h3>
              <ul className="list-disc list-inside space-y-2 dark:text-gray-200">
                <li>Access to exclusive WhatsApp group</li>
                <li>Job and internship opportunity updates</li>
                <li>Continuous learning resources</li>
                <li>Alumni network and events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Program Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Internship Training", description: "Comprehensive program to prepare you for top internships" },
              { title: "Certified Internship Certificate", description: "Gain a valuable credential to boost your resume" },
              { title: "Resume Editing", description: "Professional assistance to make your resume stand out" },
              { title: "Cutting-Edge Tech Training", description: "Learn full-stack development, Python, and cloud computing" },
              { title: "AI-Powered Interview Practice", description: "Prepare for interviews with our AI interviewer" },
              { title: "Access to Industry Experts", description: "Learn from software developers working in top companies" },
              { title: "2-Month Final Project", description: "Apply your skills in AI, ML, and full-stack development" },
              { title: "Exclusive WhatsApp Group", description: "Stay updated on job and internship opportunities" },
              { title: "Personalized Mentorship", description: "Get guidance for your side projects and career" },
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Priya Sharma", text: "NexGen's program was a game-changer for my career. I landed an internship at a top tech company!", image: "/api/placeholder/100/100" },
              { name: "Rahul Patel", text: "The mentorship and AI interview practice gave me the confidence to ace my interviews.", image: "/api/placeholder/100/100" },
              { name: "Ananya Gupta", text: "Learning cutting-edge technologies and working on real projects set me apart from other candidates.", image: "/api/placeholder/100/100" },
              { name: "Vikram Singh", text: "The resume editing service helped me showcase my skills effectively. Highly recommended!", image: "/api/placeholder/100/100" },
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md flex items-start"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold dark:text-white">{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join NexGen's Internship Program and transform your career prospects.</p>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://forms.gle/T3mDS3MGaqFu84jz5" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}