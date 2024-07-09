import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Submitting email:', email);
    setMessage('Thank you for subscribing!');
    setEmail('');
    // Track the event
    window.gtag('event', 'newsletter_signup', {
      'event_category': 'Engagement',
      'event_label': 'Newsletter Signup',
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow"
          aria-label="Email for newsletter"
        />
        <Button type="submit">Subscribe</Button>
      </form>
      {message && <p className="mt-4 text-center text-green-600 dark:text-green-400">{message}</p>}
    </div>
  );
};

export default NewsletterSignup;