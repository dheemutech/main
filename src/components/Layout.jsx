import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import Head from 'next/head';
import Script from 'next/script';

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>NexGen Internship Program</title>
        <meta name="description" content="Comprehensive internship training for Indian undergrads. Launch your tech career with NexGen." />
        <meta name="keywords" content="internship, training, tech, India, undergraduates, career" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "NexGen Internship Program",
              "description": "Comprehensive internship training for Indian undergrads",
              "url": "https://www.nexgeninternship.com",
              "logo": "https://www.nexgeninternship.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/nexgeninternship",
                "https://www.linkedin.com/company/nexgeninternship",
                "https://twitter.com/nexgeninternship"
              ]
            }
          `}
        </script>
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};