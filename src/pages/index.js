import React from 'react';
import Head from 'next/head';
import { Layout } from '@/components/Layout';
import AnimatedStats from '@/components/AnimatedStats';
import ProgramStructure from '@/components/ProgramStructure';
import Features from '@/components/Features';
import { FAQ } from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import { ContactForm } from '@/components/ContactForm';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>NexGen Internship Program for BTech Students</title>
        <meta name="description" content="Comprehensive 3-month internship program for BTech students, offering hands-on experience, mentorship, and career preparation for top tech companies." />
        <meta name="keywords" content="BTech internship, career development, tech internship, NexGen program, software engineering" />
      </Head>

      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-10 text-white text-center">NexGen Internship Program for BTech Students</h1>
            <p className="text-xl text-white text-center mb-12">
              Transforming BTech Careers with Industry-Leading Training and Placements
            </p>
            <AnimatedStats />
          </div>
        </section>

        <ProgramStructure />
        <Features />
        <Testimonials />
        <FAQ />
        
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
            <ContactForm />
          </div>
        </section>
      </main>
    </Layout>
  );
}