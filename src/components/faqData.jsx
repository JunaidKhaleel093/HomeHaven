import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: 'What materials are used for your furniture?',
    answer: 'We use high-quality materials such as solid wood, premium leather, durable fabrics, and eco-friendly finishes to create long-lasting furniture.'
  },
  {
    question: 'Do you offer custom furniture options?',
    answer: 'Yes! We offer customization for select pieces. You can choose from a variety of finishes, colors, and fabrics to match your style.'
  },
  {
    question: 'How long does delivery take?',
    answer: 'Delivery times vary depending on the product and location. Most orders are shipped within 5-7 business days. You can track your order status through our website.'
  },
  {
    question: 'Can I return or exchange my furniture?',
    answer: 'Yes, we offer a 30-day return policy for most of our products. Items must be in unused and original condition for returns. Please refer to our Return Policy page for more details.'
  },
  {
    question: 'Do you have a warranty on your furniture?',
    answer: 'Yes, our furniture comes with a warranty that covers manufacturing defects. The duration of the warranty depends on the type of product. Please check the product page for specific warranty information.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-100 dark:bg-custom-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Everything you need to know about our products and services</p>
        </motion.div>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <button
                className="w-full text-left p-6 font-semibold text-lg text-gray-900 dark:text-white focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => toggleAnswer(index)}
              >
                {item.question}
              </button>
              {activeIndex === index && (
                <div className="p-6 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                  <p>{item.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
