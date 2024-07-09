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
      question: "Who is eligible for the NexGen Internship Program?",
      answer: "The program is designed for college undergraduates in India who are looking to enhance their skills and prepare for internships in the tech industry."
    },
    {
      question: "How long does the program last?",
      answer: "The core program, including the final project, lasts for approximately 2 months. However, you'll have continued access to our resources and community even after completion."
    },
    {
      question: "What technologies will I learn during the program?",
      answer: "You'll gain hands-on experience with full-stack development, Python, cloud computing, AI, and machine learning. We also focus on using AI tools for coding to keep you at the cutting edge."
    },
    {
      question: "How does the AI interviewer work?",
      answer: "Our AI interviewer uses advanced natural language processing to simulate real interview scenarios. It adapts to your responses, providing a realistic practice experience and feedback."
    },
    {
      question: "Is there a job guarantee after completing the program?",
      answer: "While we can't guarantee job placement, our program significantly enhances your chances. Many of our graduates have successfully secured internships and jobs at top tech companies."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};