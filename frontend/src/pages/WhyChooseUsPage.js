import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Users, ThumbsUp, Wrench, DollarSign, Shield } from 'lucide-react';

const WhyChooseUsPage = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Premium Quality Tiles',
      description: 'We source only the finest tiles from India\'s most trusted manufacturers. Every tile undergoes strict quality checks to ensure durability, beauty, and longevity. When you choose Shivalik Ceramics, you\'re choosing tiles that will stand the test of time.',
      color: 'bg-amber-100 text-amber-600'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Our knowledgeable team has years of experience in the tile industry. We understand design trends, technical specifications, and what works best for different spaces. Get personalized recommendations based on your specific needs, budget, and aesthetic preferences.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: ThumbsUp,
      title: 'Wide Design Range',
      description: 'From timeless classics to cutting-edge contemporary designs, our showroom features an extensive collection. Whether you\'re looking for traditional patterns, modern minimalism, or bold statement pieces, we have something for every style and taste.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Wrench,
      title: 'Installation Support',
      description: 'Buying tiles is just the beginning. We provide comprehensive installation guidance and can connect you with experienced, reliable professionals. From laying patterns to grouting techniques, we ensure your tiles are installed perfectly for optimal results.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Quality doesn\'t have to break the bank. We offer the best value in Kalyan with competitive prices on all our tiles. Many customers tell us they compared prices across multiple stores before choosing us for our unbeatable combination of quality and affordability.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Shield,
      title: 'Trusted & Reliable',
      description: 'Our reputation speaks for itself. With numerous 5-star Google reviews and a loyal customer base, we\'ve built our business on trust, transparency, and excellent service. We stand behind every tile we sell with proper warranties and after-sales support.',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose Us - Shivalik Ceramics | Best Tile Store in Kalyan</title>
        <meta name="description" content="Discover why Shivalik Ceramics is the best choice for tiles in Kalyan. Premium quality, expert consultation, competitive pricing, and excellent customer service." />
      </Helmet>

      <div className="pt-20">
        {/* Hero */}
        <section className="relative py-20 bg-slate-900 text-white" data-testid="why-choose-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Why Choose Shivalik Ceramics?</h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Kalyan's most trusted tile showroom - where quality meets exceptional service
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Reasons */}
        <section className="py-20 bg-white" data-testid="reasons-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-6"
                    data-testid={`reason-${reason.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className={`flex-shrink-0 w-16 h-16 ${reason.color} rounded-full flex items-center justify-center`}>
                      <Icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{reason.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Customer Promise */}
        <section className="py-20 bg-slate-50" data-testid="promise-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Promise to You</h2>
              <div className="space-y-6 text-lg text-slate-600 text-left">
                <p>
                  At Shivalik Ceramics, we believe in building lasting relationships with our customers. Our goal isn't just to sell you tiles – it's to help you create the space of your dreams.
                </p>
                <p>
                  <strong className="text-slate-900">Quality Assurance:</strong> Every tile in our showroom is carefully selected and quality-tested. We only partner with manufacturers who share our commitment to excellence.
                </p>
                <p>
                  <strong className="text-slate-900">Honest Guidance:</strong> Our team will never push you to buy something that doesn't fit your needs or budget. We provide honest, practical advice to help you make the best decision.
                </p>
                <p>
                  <strong className="text-slate-900">Complete Support:</strong> From initial consultation to final installation, we're with you every step of the way. Got questions after purchase? We're just a phone call away.
                </p>
                <p>
                  <strong className="text-slate-900">Value for Money:</strong> We continuously monitor market prices to ensure you're getting the best deal. Quality tiles at fair, transparent prices.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-20 bg-white" data-testid="image-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1762500824959-ad78b31b4161?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGluZGlhbiUyMGZhbWlseSUyMGluJTIwbW9kZXJuJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHx8fDE3Njk1MTEyMTN8MA&ixlib=rb-4.1.0&q=85"
                alt="Happy family in modern home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
                <div className="p-8">
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    Helping families create beautiful homes since establishment
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-slate-900 text-white" data-testid="stats-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '5000+', label: 'Happy Customers' },
                { number: '500+', label: 'Tile Varieties' },
                { number: '5★', label: 'Google Rating' },
                { number: '100%', label: 'Quality Assured' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold gold-accent mb-2">{stat.number}</div>
                  <div className="text-slate-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyChooseUsPage;