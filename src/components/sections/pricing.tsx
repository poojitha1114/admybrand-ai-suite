"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';

const plans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for small businesses and startups",
    icon: Zap,
    features: [
      "AI Content Generation (100/month)",
      "Basic Analytics Dashboard",
      "Email Support",
      "5 Campaign Templates",
      "Social Media Integration",
      "Basic SEO Tools"
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Professional",
    price: 99,
    description: "Ideal for growing businesses and marketing teams",
    icon: Users,
    features: [
      "AI Content Generation (1000/month)",
      "Advanced Analytics & Reports",
      "Priority Email & Chat Support",
      "50+ Campaign Templates",
      "Multi-Channel Management",
      "Advanced SEO & PPC Tools",
      "A/B Testing",
      "Custom Branding"
    ],
    popular: true,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Enterprise",
    price: 299,
    description: "For large organizations with advanced needs",
    icon: Crown,
    features: [
      "Unlimited AI Content Generation",
      "Custom AI Model Training",
      "Dedicated Account Manager",
      "Custom Integrations",
      "Advanced Security & Compliance",
      "White-label Solutions",
      "API Access",
      "Custom Reporting"
    ],
    popular: false,
    color: "from-orange-500 to-red-500"
  }
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const getPrice = (basePrice: number) => {
    return billingCycle === 'yearly' ? Math.round(basePrice * 10) : basePrice;
  };

  const getSavings = (basePrice: number) => {
    return billingCycle === 'yearly' ? Math.round(basePrice * 2) : 0;
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: billingCycle === 'yearly' ? 32 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm ${billingCycle === 'yearly' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
              Yearly
              {billingCycle === 'yearly' && (
                <Badge variant="success" className="ml-2">
                  Save 20%
                </Badge>
              )}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="default" className="bg-gradient-to-r from-purple-500 to-pink-500">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${plan.color} p-3 mx-auto mb-4`}>
                    <plan.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        ${getPrice(plan.price)}
                      </span>
                      <span className="text-gray-500">/{billingCycle === 'yearly' ? 'year' : 'month'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-green-600 mt-1">
                        Save ${getSavings(plan.price)} per year
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' : ''}`}
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                  >
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-300 mb-6">
                Contact our sales team for custom pricing and enterprise features tailored to your specific needs.
              </p>
              <Button variant="secondary" size="lg">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};

export { Pricing }; 