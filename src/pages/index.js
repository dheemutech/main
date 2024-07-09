import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { motion, useAnimation } from 'framer-motion';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import dynamic from 'next/dynamic';
import NewsletterSignup from '@/components/NewsletterSignup';
import AnimatedStats from '@/components/AnimatedStats';

// Lazy load components
const LazyProgramStructure = dynamic(() => import('@/components/ProgramStructure'), { 
  ssr: false,
  loading: () => <p>Loading Program Structure...</p>
});
const LazyFeatures = dynamic(() => import('@/components/Features'), { 
  ssr: false,
  loading: () => <p>Loading Features...</p>
});
const LazyTestimonials = dynamic(() => import('@/components/Testimonials'), { 
  ssr: false,
  loading: () => <p>Loading Testimonials...</p>
});

// Lazy load chat widget
const ChatWidget = dynamic(() => import('@/components/ChatWidget'), { ssr: false });

export default function Home() {
  const { theme, setTheme } = useTheme();
  const controls = useAnimation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // JSON-LD script content
  const jsonLdScript = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "NexGen Internship Program",
    "description": "3 months internship program with NexGen for Indian undergraduates in technology",
    "url": "https://www.nexgeninternship.com",
    "logo": "https://www.nexgeninternship.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/nexgeninternship",
      "https://www.linkedin.com/company/nexgeninternship",
      "https://twitter.com/nexgeninternship"
    ],
    "offers": {
      "@type": "EducationalOccupationalProgram",
      "name": "NexGen Internship Program",
      "description": "A 3-month internship program covering full-stack development, AI, ML, and cloud computing",
      "timeToComplete": "P3M",
      "occupationalCategory": "15-1252 Software Developers",
      "programPrerequisites": "College students pursuing technology-related degrees",
      "educationalProgramMode": "Online",
      "financialAidEligible": "https://schema.org/FinancialAidEligible"
    }
  };

  return (
    <Layout>
      <Head>
        <title>3 Months Internship with NexGen | Launch Your Tech Career</title>
        <meta name="description" content="Join NexGen's 3-month comprehensive internship program for Indian undergraduates in technology. Boost your career with hands-on experience in full-stack development, AI, ML, and cloud computing." />
        <meta name="keywords" content="internship, technology, full-stack development, AI, ML, cloud computing, Indian undergraduates, TCS, Cognizant, Mindtree" />
        <meta property="og:title" content="3 Months Internship with NexGen | Launch Your Tech Career" />
        <meta property="og:description" content="Join NexGen's 3-month comprehensive internship program for Indian undergraduates in technology. Boost your career with hands-on experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nexgeninternship.com" />
        <meta property="og:image" content="https://www.nexgeninternship.com/og-image.jpg" />
        <link rel="canonical" href="https://www.nexgeninternship.com" />
      </Head>

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {mounted && (theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />)}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            3 Months Internship with NexGen
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive internship training for Indian undergrads
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              asChild 
              className="mr-4 hover:scale-105 transition-transform text-lg"
              onClick={() => {
                window.gtag('event', 'click', {
                  'event_category': 'CTA',
                  'event_label': 'Apply Now - Hero',
                });
              }}
            >
              <a href="https://forms.gle/T3mDS3MGaqFu84jz5" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => {
                scrollTo('contact');
                window.gtag('event', 'click', {
                  'event_category': 'Navigation',
                  'event_label': 'Contact Us - Hero',
                });
              }} 
              className="hover:scale-105 transition-transform text-lg"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <AnimatedStats />

      {/* Program Structure Section */}
      <LazyProgramStructure />

      {/* Features Section */}
      <LazyFeatures />

      {/* Testimonials Section */}
      <LazyTestimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-blue-100 dark:bg-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Stay Updated</h2>
          <NewsletterSignup />
        </div>
      </section>

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
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your 3-Month Journey?</h2>
          <p className="text-xl mb-10">Join NexGen's Internship Program and transform your career prospects.</p>
          <Button 
            size="lg" 
            variant="secondary" 
            asChild 
            className="hover:bg-white hover:text-blue-600 transition-colors text-lg"
            onClick={() => {
              window.gtag('event', 'click', {
                'event_category': 'CTA',
                'event_label': 'Apply Now - Footer',
              });
            }}
          >
            <a href="https://forms.gle/T3mDS3MGaqFu84jz5" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </div>
      </section>

      {/* Chat Widget */}
      <ChatWidget />

      {/* JSON-LD Schema Markup */}
      {mounted && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdScript) }} />
      )}
    </Layout>
  );
}