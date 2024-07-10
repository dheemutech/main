import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import ErrorBoundary from "@/components/ErrorBoundary";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
      <Toaster />
    </ErrorBoundary>
  );
}