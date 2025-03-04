"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "When and where is SOD 2025 taking place?",
      answer: "SOD 2025 is scheduled for March 6, 2025. The exact location will be a private residence in Accra, Ghana. The specific venue details will be shared with confirmed attendees closer to the event date."
    },
    {
      question: "How can I register for the event?",
      answer: "Registration is available through our website. Simply navigate to the Registration page, fill out the required information, and upload your proof of payment. Once your payment is verified, you'll receive a confirmation email with your event pass."
    },
    {
      question: "What is the cost to attend SOD 2025?",
      answer: "The event cost is yet to be confirmed. Please check back later for pricing information or contact us directly for updates."
    },
    {
      question: "Is SOD 2025 open to everyone?",
      answer: "SOD 2025 is exclusively for MSc Business Analytics students at the University of Ghana Business School. All attendees must pay to participate."
    },
    {
      question: "What should I wear to the event?",
      answer: "The dress code is casual and comfortable. Since there will be swimming activities, you may want to bring appropriate swimwear."
    },
    {
      question: "What's included in my ticket?",
      answer: "Your ticket includes entry to the event, access to all activities (swimming, talks, karaoke, games, movie session, and video games), and more. Each ticket admits only one person."
    },
    {
      question: "Will food and drinks be provided?",
      answer: "Absolutely! More details about food and drinks will be communicated closer to the event date."
    },
    {
      question: "Can I get a refund if I can't attend?",
      answer: "Tickets are non-refundable but are transferable up to 2 days before the event. Please contact our team at info@sod2025.com to arrange a ticket transfer."
    },
    {
      question: "Will transportation be provided?",
      answer: "Transportation is not included. However, we will provide detailed directions and parking information to all confirmed attendees."
    },
    {
      question: "Who do I contact if I have more questions?",
      answer: "For any additional questions or concerns, please email us at info@sod2025.com, call +233 26 435 5165, or WhatsApp +233 55 348 0047. Our team is available to assist you Monday through Friday, 9 AM to 5 PM."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about SOD 2025. Can't find the answer you're looking for? Feel free to contact us.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border border-gray-800 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-900/50 transition-all text-white font-medium text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400">
            Still have questions? Contact us at{" "}
            <a href="mailto:info@sod2025.com" className="text-primary hover:underline">
              info@sod2025.com
            </a>
            {" "}or call/WhatsApp{" "}
            <span className="text-primary">+233 26 435 5165 / +233 55 348 0047</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
} 
