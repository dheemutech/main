import React from 'react';
import Head from 'next/head';
import { Layout } from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ProgramStructure from '@/components/ProgramStructure';
import Features from '@/components/Features';
import { FAQ } from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import { ContactForm } from '@/components/ContactForm';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>NexGen 3-Months Intensive Internship Program for BTech Students</title>
        <meta name="description" content="Transform your BTech career with our intensive 3-months internship program. Gain hands-on experience, mentorship, and rapid career preparation for top tech companies." />
        <meta name="keywords" content="BTech internship, 3-months program, career development, tech internship, NexGen program, software engineering, intensive training" />
      </Head>

      <main className="min-h-screen">
        <HeroSection />
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

        <FloatingCTA />
      </main>
    </Layout>
  );
}