"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    image: "/api/placeholder/60/60",
    content: "ADmyBRAND AI Suite has completely transformed our marketing strategy. The AI content generation saves us hours every week, and the results speak for themselves - we've seen a 300% increase in engagement.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    image: "/api/placeholder/60/60",
    content: "As a startup, we needed to maximize our marketing ROI with limited resources. This platform has been a game-changer. The automated optimization features are incredible.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Marketing Manager",
    company: "Global Retail Co.",
    image: "/api/placeholder/60/60",
    content: "The multi-channel management capabilities are outstanding. We can now manage all our campaigns from one dashboard, and the AI insights help us make data-driven decisions.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Founder",
    company: "EcoSolutions",
    image: "/api/placeholder/60/60",
    content: "The brand consistency features are exactly what we needed. Our messaging is now perfectly aligned across all channels, and our brand recognition has improved significantly.",
    rating: 5
  },
  {
    name: "Lisa Wang",
    role: "VP of Marketing",
    company: "InnovateCorp",
    image: "/api/placeholder/60/60",
    content: "The advanced analytics and growth predictions have given us insights we never had before. We can now forecast trends and adjust our strategy proactively.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Loved by
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See what our customers are saying about their experience with ADmyBRAND AI Suite.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Card className="h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                  <CardContent className="p-8 h-full flex flex-col justify-center">
                    <div className="flex items-center justify-center mb-6">
                      <Quote className="w-8 h-8 text-blue-500" />
                    </div>
                    
                    <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed">
                      &ldquo;{testimonials[currentIndex].content}&rdquo;
                    </p>

                    <div className="flex items-center justify-center gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
            <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600 dark:text-gray-400">Would Recommend</div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export { Testimonials }; 