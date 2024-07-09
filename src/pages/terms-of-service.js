import React from 'react';
import { Layout } from '@/components/Layout';

export default function TermsOfService() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-4">
          Please read these Terms of Service carefully before using the NexGen Internship Program website and services.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">2. Use of Services</h2>
        <p className="mb-4">
          You agree to use our services only for lawful purposes and in accordance with these Terms of Service.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Intellectual Property</h2>
        <p className="mb-4">
          The content, features, and functionality of our website and services are owned by NexGen Internship Program and are protected by copyright, trademark, and other intellectual property laws.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Limitation of Liability</h2>
        <p className="mb-4">
          NexGen Internship Program shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify or replace these Terms of Service at any time. Your continued use of our services after any changes constitute acceptance of those changes.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">6. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms of Service, please contact us at terms@nexgeninternship.com.
        </p>
      </div>
    </Layout>
  );
}