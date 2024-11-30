import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import FAQ from './components/faqData'; 
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { products, galleryImages, faqData } from './data/Products';

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const addToCart = (product) => {
    setCartItems(items => {
      const existingItem = items.find(item => item.id === product.id);
      if (existingItem) {
        return items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const bestSellers = products.filter(product => product.isBestSeller);
  const discountProducts = products.filter(product => product.isDiscount);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-custom-dark transition-colors duration-200">
      <Navbar
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        toggleCart={() => setIsCartOpen(true)}
        isDark={isDark}
        toggleTheme={() => setIsDark(!isDark)}
      />

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="relative h-[80vh] bg-black">
          <img
            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=2370"
            alt="Modern Interior"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white px-4"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Discover Comfort & Style for Your Home</h1>
              <p className="text-xl md:text-2xl mb-8">Explore a curated selection of stylish and functional furniture designed to transform your space into a cozy and elegant haven.</p>
              <a href="#best-sellers" className="inline-block px-8 py-3 bg-white text-black rounded-md hover:bg-gray-100 transition-colors">
                Shop Now
              </a>
            </motion.div>
          </div>
        </section>

        <Features />
                {/* Deals Section */}
                <section id="deals" className="py-16 bg-gray-100 dark:bg-custom-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Special Deals</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">Limited time offers on selected items</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {discountProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section id="best-sellers" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Best Sellers</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">Our most popular pieces</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bestSellers.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>
        </section>

        <FAQ faqData={faqData} />

        <Gallery images={galleryImages} />
        <Reviews />
        <Contact />
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  );
}

export default App;
