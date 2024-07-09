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
      question: "What is the NexGen Internship Program?",
      answer: "The NexGen Internship Program is a comprehensive training program designed for college undergraduates in India to enhance their skills and prepare for internships in top tech companies like TCS, Cognizant, Tech Mahindra, and Mindtree."
    },
    {
      question: "How long does the program last?",
      answer: "The core program, including the final project, lasts for approximately 2 months. However, you'll have continued access to our resources and community even after completion."
    },
    {
      question: "What technologies will I learn during the program?",
      answer: "You'll gain hands-on experience with full-stack development, Python, cloud computing, AI, and machine learning. We focus on technologies commonly used by leading Indian tech companies to keep you at the cutting edge."
    },
    {
      question: "How does the AI interviewer work?",
      answer: "Our AI interviewer uses advanced natural language processing to simulate real interview scenarios from top Indian tech companies. It adapts to your responses, providing a realistic practice experience and feedback."
    },
    {
      question: "Is there a job guarantee after completing the program?",
      answer: "While we can't guarantee job placement, our program significantly enhances your chances. Many of our graduates have successfully secured internships and jobs at top tech companies like TCS, Cognizant, Tech Mahindra, and Mindtree."
    },
    {
      question: "What kind of projects will I work on?",
      answer: "You'll work on a variety of projects, including a 2-month capstone project where you'll apply your skills in AI, ML, and full-stack development to solve real-world problems relevant to the Indian tech industry."
    },
    {
      question: "How much does the program cost?",
      answer: "Program costs vary depending on the specific track and duration. Please contact our admissions team for the most up-to-date pricing information and available scholarships."
    },
    {
      question: "Can I participate in the program while studying full-time?",
      answer: "Yes, the program is designed to be flexible and can be completed alongside your full-time studies. However, you should be prepared to dedicate significant time and effort to get the most out of the program and prepare for opportunities at top Indian tech companies."
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