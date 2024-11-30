import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, RefreshCw, Clock } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free shipping on all orders over $999'
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '100% secure payment processing'
  },
  {
    icon: RefreshCw,
    title: '30 Days Return',
    description: 'Easy returns within 30 days'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer service'
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-custom-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
            >
              <feature.icon className="h-8 w-8 text-black dark:text-white mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
