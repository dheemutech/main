import React from 'react';
import Head from 'next/head';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};