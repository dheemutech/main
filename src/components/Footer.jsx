import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NexGen Internship Program</h3>
            <p className="text-gray-300">Empowering Indian undergrads with cutting-edge internship training.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/#features" className="hover:text-blue-400">Features</Link></li>
              <li><Link href="/#testimonials" className="hover:text-blue-400">Testimonials</Link></li>
              <li><Link href="/#faq" className="hover:text-blue-400">FAQ</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-blue-400">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook size={24} /></a>
              <a href="#" className="hover:text-blue-400"><Twitter size={24} /></a>
              <a href="#" className="hover:text-blue-400"><Instagram size={24} /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NexGen Internship Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};