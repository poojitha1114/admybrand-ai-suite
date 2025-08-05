"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const faqs = [
  {
    question: "How does the AI content generation work?",
    answer: "Our AI uses advanced natural language processing to understand your brand voice, target audience, and campaign goals. It then generates high-quality, engaging content that's tailored to your specific needs. You can provide prompts, keywords, and style guidelines to ensure the content matches your brand perfectly."
  },
  {
    question: "What marketing channels does ADmyBRAND support?",
    answer: "We support all major marketing channels including social media (Facebook, Instagram, Twitter, LinkedIn, TikTok), email marketing, Google Ads, content marketing, SEO, and more. Our platform provides unified management across all channels with consistent branding and messaging."
  },
  {
    question: "Is there a learning curve to use the platform?",
    answer: "Not at all! Our platform is designed to be intuitive and user-friendly. We provide comprehensive onboarding, video tutorials, and 24/7 support to help you get started quickly. Most users are creating campaigns within their first hour of use."
  },
  {
    question: "How secure is my data?",
    answer: "Security is our top priority. We use bank-level encryption, SOC 2 compliance, and follow industry best practices for data protection. Your data is stored securely and we never share your information with third parties without your explicit consent."
  },
  {
    question: "Can I integrate with my existing tools?",
    answer: "Yes! We offer 50+ integrations with popular marketing tools, CRMs, analytics platforms, and social media management tools. This includes Zapier, HubSpot, Salesforce, Google Analytics, and many more. Our API also allows for custom integrations."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive support including 24/7 live chat, email support, video tutorials, knowledge base, and dedicated account managers for enterprise customers. Our support team consists of marketing experts who can help with both technical and strategic questions."
  },
  {
    question: "Do you offer custom AI model training?",
    answer: "Yes, for Enterprise customers we offer custom AI model training using your brand's specific data, voice, and style guidelines. This ensures the AI generates content that perfectly matches your unique brand identity and requirements."
  },
  {
    question: "What's included in the free trial?",
    answer: "The 14-day free trial includes access to all features of the Professional plan, including AI content generation (100 pieces), advanced analytics, multi-channel management, and full customer support. No credit card required to start your trial."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Frequently Asked
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite. Can&apos;t find the answer you&apos;re looking for? Contact our support team.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <CardContent className="pt-0 pb-6">
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-blue-100 mb-6">
                Our support team is here to help you get the most out of ADmyBRAND AI Suite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  Contact Support
                </button>
                <button className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};

export { FAQ }; 