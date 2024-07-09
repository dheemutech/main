import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import Head from 'next/head';

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>NexGen Internship Program</title>
        <meta name="description" content="Comprehensive internship training for Indian undergrads. Launch your tech career with NexGen." />
        <meta name="keywords" content="internship, training, tech, India, undergraduates, career" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};