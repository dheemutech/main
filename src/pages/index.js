import React from 'react';
import Head from 'next/head';
import { Layout } from '@/components/Layout';
import AnimatedStats from '@/components/AnimatedStats';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>NexGen Internship Program Statistics</title>
        <meta name="description" content="Key statistics for the NexGen Internship Program for BTech students." />
      </Head>

      <main className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-10 text-white">NexGen Internship Program Statistics</h1>
          <AnimatedStats />
        </div>
      </main>
    </Layout>
  );
}