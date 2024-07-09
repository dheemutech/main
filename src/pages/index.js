import React from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FAQ } from '@/components/FAQ';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import Image from 'next/image';

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
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Launch Your Tech Career with NexGen
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8"
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
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Phase 1: Skill Development (4 weeks)</h3>
              <ul className="list-disc list-inside space-y-2 dark:text-gray-200">
                <li>Week 1-2: Full-stack development fundamentals (HTML, CSS, JavaScript, React)</li>
                <li>Week 3: Python programming and cloud computing essentials (AWS basics)</li>
                <li>Week 4: Introduction to AI and machine learning with practical exercises</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Phase 2: Career Preparation (2 weeks)</h3>
              <ul className="list-disc list-inside space-y-2 dark:text-gray-200">
                <li>Day 1-3: Resume building workshop and ATS optimization techniques</li>
                <li>Day 4-7: AI-powered interview practice sessions (technical and behavioral)</li>
                <li>Day 8-10: Soft skills training (communication, teamwork, problem-solving)</li>
                <li>Day 11-14: Industry expert mentorship sessions and networking events</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Phase 3: Project Application (2 months)</h3>
              <ul className="list-disc list-inside space-y-2 dark:text-gray-200">
                <li>Week 1-4: Capstone project ideation and planning</li>
                <li>Week 5-7: Project development with weekly mentor check-ins</li>
                <li>Week 8: Final project presentations and peer reviews</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Ongoing Support</h3>
              <ul className="list-disc list-inside space-y-2 dark:text-gray-200">
                <li>24/7 access to learning resources and coding challenges</li>
                <li>Bi-weekly webinars on emerging technologies and industry trends</li>
                <li>Monthly alumni networking events and job fairs</li>
                <li>Lifetime access to NexGen's exclusive job board and internship postings</li>
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
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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

      {/* Success Stories Section */}
      <section id="success-stories" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Aarav Patel",
                role: "Software Engineer at Google",
                story: "NexGen's program was the turning point in my career. The hands-on projects and mentorship gave me the confidence to apply to top tech companies. I'm now living my dream as a Software Engineer at Google!",
                image: "/images/aarav.jpg"
              },
              {
                name: "Zara Khan",
                role: "Data Scientist at Amazon",
                story: "The AI and ML modules at NexGen opened up a whole new world for me. The practical experience I gained through the program's projects was instrumental in landing my role as a Data Scientist at Amazon.",
                image: "/images/zara.jpg"
              },
            ].map((story, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image src={story.image} alt={story.name} width={100} height={100} className="rounded-full mb-4 md:mb-0 md:mr-6" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{story.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">{story.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{story.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Priya Sharma", text: "NexGen's program was a game-changer for my career. I landed an internship at a top tech company!", image: "/images/priya.jpg" },
              { name: "Rahul Patel", text: "The mentorship and AI interview practice gave me the confidence to ace my interviews.", image: "/images/rahul.jpg" },
              { name: "Ananya Gupta", text: "Learning cutting-edge technologies and working on real projects set me apart from other candidates.", image: "/images/ananya.jpg" },
              { name: "Vikram Singh", text: "The resume editing service helped me showcase my skills effectively. Highly recommended!", image: "/images/vikram.jpg" },
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-start hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image src={testimonial.image} alt={testimonial.name} width={64} height={64} className="rounded-full mr-4" />
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