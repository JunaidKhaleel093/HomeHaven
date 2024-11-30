import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Form submission logic
    try {
      const response = await fetch('https://formspree.io/f/xovqpkqo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        }),
      });

      if (response.ok) {
        setMessageSent(true); 
        form.reset(); 
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-custom-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Get in touch with our team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">
                junaidismail.07093@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">
                +91 8217009727
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">
                Bengaluru, Karnataka
              </span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit} 
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-black dark:bg-white text-white dark:text-black rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Send Message
            </button>
            {messageSent && (
              <p className="text-center text-green-600 dark:text-green-400 mt-4">
                Message sent successfully!
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
