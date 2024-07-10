import React from 'react';
import Head from 'next/head';
import { Layout } from '@/components/Layout';
import AnimatedStats from '@/components/AnimatedStats';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>NexGen Internship Program - BTech Career Statistics</title>
        <meta name="description" content="Discover the impact of NexGen Internship Program on BTech careers. View our placement rates, number of students trained, and top recruiting partners." />
        <meta name="keywords" content="BTech internship, career statistics, placement rates, tech companies, NexGen program" />
      </Head>

      <main className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-10 text-white text-center">NexGen Internship Program Impact</h1>
          <p className="text-xl text-white text-center mb-12">
            Transforming BTech Careers with Industry-Leading Training and Placements
          </p>
          <AnimatedStats />
        </div>
      </main>
    </Layout>
  );
}