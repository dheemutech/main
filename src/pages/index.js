import React from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { useTheme } from 'next-themes';
import { Sun, Moon, Code, Brain, Rocket, Users, Award, BookOpen } from 'lucide-react';

export default function Home() {
  const { theme, setTheme } = useTheme();

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Launch Your Tech Career with NexGen
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-10"
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
            <Button size="lg" asChild className="mr-4 hover:scale-105 transition-transform text-lg">
              <a href="https://forms.gle/T3mDS3MGaqFu84jz5" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo('contact')} className="hover:scale-105 transition-transform text-lg">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Program Structure Section */}
      <section id="program-structure" className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Program Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
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
            ].map((phase, index) => (
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

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Program Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Internship Training", icon: <Award className="w-12 h-12 mb-4 text-yellow-500" />, description: "Comprehensive program to prepare you for top internships, including real-world projects and industry-standard practices." },
              { title: "Certified Internship Certificate", icon: <BookOpen className="w-12 h-12 mb-4 text-green-500" />, description: "Gain a valuable credential to boost your resume, recognized by leading tech companies across India." },
              { title: "Resume Editing", description: "Professional assistance to make your resume stand out, tailored to catch the eye of top tech recruiters." },
              { title: "Cutting-Edge Tech Training", description: "Learn full-stack development, Python, and cloud computing with hands-on projects using the latest technologies." },
              { title: "AI-Powered Interview Practice", description: "Prepare for interviews with our advanced AI interviewer, covering both technical and behavioral aspects." },
              { title: "Access to Industry Experts", description: "Learn from and network with software developers working in top companies like Google, Amazon, and Microsoft." },
              { title: "2-Month Final Project", description: "Apply your skills in AI, ML, and full-stack development to solve real-world problems, building a standout portfolio piece." },
              { title: "Exclusive WhatsApp Group", description: "Stay updated on job and internship opportunities, and connect with peers and mentors in a supportive community." },
              { title: "Personalized Mentorship", description: "Get one-on-one guidance for your side projects, career decisions, and technical challenges from experienced professionals." },
            ].map((feature, index) => (
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

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white dark:bg-gray-800 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { name: "Priya Sharma", text: "NexGen's program was a game-changer for my career. I landed an internship at a top tech company!" },
              { name: "Rahul Patel", text: "The mentorship and AI interview practice gave me the confidence to ace my interviews." },
              { name: "Ananya Gupta", text: "Learning cutting-edge technologies and working on real projects set me apart from other candidates." },
              { name: "Vikram Singh", text: "The resume editing service helped me showcase my skills effectively. Highly recommended!" },
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg italic">"{testimonial.text}"</p>
                <p className="font-semibold dark:text-white text-right">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Contact Us</h2>
          <div className="max-w-md mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-10">Join NexGen's Internship Program and transform your career prospects.</p>
          <Button size="lg" variant="secondary" asChild className="hover:bg-white hover:text-blue-600 transition-colors text-lg">
            <a href="https://forms.gle/T3mDS3MGaqFu84jz5" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}