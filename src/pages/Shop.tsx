import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'equipment', name: 'Equipment' },
    { id: 'apparel', name: 'Apparel' },
    { id: 'merchandise', name: 'Merchandise' }
  ];

  const products = [
    {
      id: 1,
      name: 'Professional Beach Volleyball',
      category: 'equipment',
      price: 89.99,
      image: '🏐',
      description: 'Official FIVB-approved beach volleyball for tournament play'
    },
    {
      id: 2,
      name: 'Tournament Net System',
      category: 'equipment',
      price: 299.99,
      image: '🥅',
      description: 'Professional-grade portable net system with official height specifications'
    },
    {
      id: 3,
      name: 'Beach Volleyball Knee Pads',
      category: 'equipment',
      price: 34.99,
      image: '🛡️',
      description: 'Lightweight, breathable knee protection for sand play'
    },
    {
      id: 4,
      name: 'Home Court Series Jersey',
      category: 'apparel',
      price: 49.99,
      image: '👕',
      description: 'Official tournament jersey with moisture-wicking fabric'
    },
    {
      id: 5,
      name: 'Performance Beach Shorts',
      category: 'apparel',
      price: 39.99,
      image: '🩳',
      description: 'Quick-dry shorts designed for beach volleyball performance'
    },
    {
      id: 6,
      name: 'Sand Socks',
      category: 'apparel',
      price: 24.99,
      image: '🧦',
      description: 'Protect your feet from hot sand and improve traction'
    },
    {
      id: 7,
      name: 'HCS Tournament Hat',
      category: 'merchandise',
      price: 29.99,
      image: '🧢',
      description: 'Official Home Court Series snapback cap'
    },
    {
      id: 8,
      name: 'Tournament Towel',
      category: 'merchandise',
      price: 19.99,
      image: '🏖️',
      description: 'Quick-dry microfiber towel with HCS logo'
    },
    {
      id: 9,
      name: 'Water Bottle',
      category: 'merchandise',
      price: 14.99,
      image: '💧',
      description: 'Insulated stainless steel water bottle'
    },
    {
      id: 10,
      name: 'Beach Volleyball Sunglasses',
      category: 'equipment',
      price: 59.99,
      image: '🕶️',
      description: 'UV protection glasses designed for beach sports'
    },
    {
      id: 11,
      name: 'HCS Hoodie',
      category: 'apparel',
      price: 64.99,
      image: '👘',
      description: 'Comfortable cotton blend hoodie with tournament logo'
    },
    {
      id: 12,
      name: 'Tournament Sticker Pack',
      category: 'merchandise',
      price: 9.99,
      image: '📸',
      description: 'Collection of Home Court Series vinyl stickers'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Home Court Shop
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-200">
            Gear up with professional-quality volleyball equipment, apparel, and official tournament merchandise
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-100 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-6xl">{product.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Shop by Category</h2>
            <p className="text-xl text-gray-600">
              Find everything you need for beach volleyball success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Equipment</h3>
                <p className="text-gray-600 mb-6">
                  Professional volleyballs, nets, protective gear, and training equipment for serious players.
                </p>
                <button
                  onClick={() => setSelectedCategory('equipment')}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Shop Equipment
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M8 11v6a1 1 0 001 1h6a1 1 0 001-1v-6M8 11h8" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Apparel</h3>
                <p className="text-gray-600 mb-6">
                  Performance jerseys, shorts, sand socks, and other clothing designed for beach volleyball.
                </p>
                <button
                  onClick={() => setSelectedCategory('apparel')}
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  Shop Apparel
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Merchandise</h3>
                <p className="text-gray-600 mb-6">
                  Official Home Court Series merchandise including hats, towels, water bottles, and accessories.
                </p>
                <button
                  onClick={() => setSelectedCategory('merchandise')}
                  className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition-colors duration-300"
                >
                  Shop Merchandise
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Shop With Us?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600 text-sm">
                  All products are tested and approved by tournament professionals
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Fast Shipping</h3>
                <p className="text-gray-600 text-sm">
                  Free shipping on orders over $75, delivered within 3-5 business days
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Secure Payment</h3>
                <p className="text-gray-600 text-sm">
                  Safe and secure checkout with multiple payment options
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Tournament Tested</h3>
                <p className="text-gray-600 text-sm">
                  Products used and recommended by Home Court Series athletes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Game?</h2>
          <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
            Get the same equipment used in our professional tournaments and join the Home Court Series community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/tournaments"
              className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-300"
            >
              Register for Tournament
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;