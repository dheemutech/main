import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const FAQ = () => {
  const faqItems = [
    {
      question: "What is the NexGen 3-Month Comprehensive Internship Program?",
      answer: "The NexGen 3-Month Comprehensive Internship Program is an intensive training program designed specifically for BTech students in India. It enhances your skills, provides hands-on training, and prepares you for internships and job opportunities in top tech companies like TCS, Cognizant, and Mindtree."
    },
    {
      question: "Who is eligible for this program?",
      answer: "This program is tailored for BTech students pursuing technology-related degrees in India. It's ideal for those looking to kickstart their careers in leading tech companies."
    },
    {
      question: "What technologies will I learn during the 3-month program?",
      answer: "You'll gain hands-on experience with full-stack development, Python, cloud computing, AI, and machine learning. We focus on technologies commonly used by leading Indian tech companies to keep you at the cutting edge."
    },
    {
      question: "How does the AI interviewer work?",
      answer: "Our AI interviewer uses advanced natural language processing to simulate real interview scenarios from top Indian tech companies like TCS, Cognizant, and Mindtree. It adapts to your responses, providing a realistic practice experience and feedback."
    },
    {
      question: "Is there a job guarantee after completing the program?",
      answer: "While we can't guarantee job placement, our program significantly enhances your chances. Many of our BTech graduates have successfully secured positions at top tech companies like TCS, Cognizant, and Mindtree."
    },
    {
      question: "What kind of projects will I work on?",
      answer: "You'll work on a variety of projects, including a capstone project where you'll apply your skills in AI, ML, and full-stack development to solve real-world problems relevant to the Indian tech industry, particularly focusing on challenges faced by companies like TCS, Cognizant, and Mindtree."
    },
    {
      question: "Tell me more about the certified internship certificate.",
      answer: "Upon successful completion of the 3-month program, you'll receive a certified internship certificate. This certificate is recognized by leading tech companies and serves as a valuable credential on your resume, significantly boosting your job prospects in companies like TCS, Cognizant, and Mindtree."
    },
    {
      question: "How much does the program cost?",
      answer: "Program costs vary depending on the specific track and any ongoing promotions. Please contact our admissions team for the most up-to-date pricing information and available scholarships for BTech students."
    },
    {
      question: "Can I participate in the program while studying full-time?",
      answer: "Yes, the 3-month program is designed to be intensive but flexible, allowing BTech students to complete it alongside their full-time studies. However, you should be prepared to dedicate significant time and effort to get the most out of the program and prepare for opportunities at top Indian tech companies."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};