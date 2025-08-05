"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Users, 
  Palette,
  TrendingUp,
  Shield
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description: "Generate compelling marketing copy, social media posts, and email campaigns in seconds with our advanced AI.",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: Target,
    title: "Smart Audience Targeting",
    description: "Identify and reach your ideal customers with AI-powered audience segmentation and targeting.",
    color: "from-green-500 to-blue-500"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your campaign performance with real-time analytics and predictive modeling.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Automated Optimization",
    description: "Let AI automatically optimize your campaigns for maximum ROI and engagement rates.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Multi-Channel Management",
    description: "Manage all your marketing channels from one unified dashboard with seamless integration.",
    color: "from-pink-500 to-red-500"
  },
  {
    icon: Palette,
    title: "Brand Consistency",
    description: "Maintain consistent brand voice and visual identity across all your marketing materials.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: TrendingUp,
    title: "Growth Predictions",
    description: "Forecast your marketing performance and identify growth opportunities with AI predictions.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance and end-to-end encryption for your data.",
    color: "from-gray-500 to-slate-500"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Powerful Features for
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Modern Marketing
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize your marketing campaigns with the power of AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200/50 dark:border-blue-700/50">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3">50+</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Integrations</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200/50 dark:border-purple-700/50">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-3">24/7</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">AI Support</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200/50 dark:border-green-700/50">
            <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-3">99.9%</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Uptime</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 border border-pink-200/50 dark:border-pink-700/50">
            <div className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent mb-3">5x</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Faster Results</div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export { Features }; 