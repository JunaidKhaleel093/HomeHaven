import React from 'react';
import { Twitter, Instagram, Linkedin, GithubIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-custom-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              HomeHaven
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Creating beautiful spaces with modern furniture since 2024. We
              bring comfort and elegance to every home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#best-sellers"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  href="#deals"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  Deals
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Customer Service
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#faq"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/JunaidKhaleel093"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-500 transition-colors duration-200"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/JunaidKhaleel96"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/mohammed_junaid_khaleel"
                className="text-gray-600 dark:text-gray-400 hover:text-pink-600 transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/junaidkhaleel093"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} HomeHaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
