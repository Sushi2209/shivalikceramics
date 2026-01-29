import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, Star } from 'lucide-react';

const HomePage = () => {
  const phoneNumber = '9920511651';

  const categories = [
    {
      name: 'Floor Tiles',
      image: 'https://images.unsplash.com/photo-1757262798620-c2cc40cfb440?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHw0fHxtYXJibGUlMjBmbG9vciUyMHRpbGVzJTIwbGl2aW5nJTIwcm9vbSUyMGx1eHVyeXxlbnwwfHx8fDE3Njk1MTExOTF8MA&ixlib=rb-4.1.0&q=85',
      span: 'col-span-1'
    },
    {
      name: 'Wall Tiles',
      image: 'https://images.unsplash.com/photo-1765556556784-7656ee0a1bd8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMHdhbGwlMjB0aWxlcyUyMHRleHR1cmV8ZW58MHx8fHwxNzY5NTExMTkzfDA&ixlib=rb-4.1.0&q=85',
      span: 'col-span-1'
    },
    {
      name: 'Vitrified Tiles',
      image: 'https://images.unsplash.com/photo-1763485956023-49c4a03283fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBiYXRocm9vbSUyMHdhbGwlMjB0aWxlcyUyMHRleHR1cmV8ZW58MHx8fHwxNzY5NTExMTkzfDA&ixlib=rb-4.1.0&q=85',
      span: 'col-span-1'
    }
  ];

  const reviews = [
    { name: 'Somesh', rating: 5, text: 'The experience was excellent!! The team was super helpful...' },
    { name: 'Rajeev', rating: 5, text: 'Their tiles completely changed the look of my house!' },
    { name: 'Asha', rating: 5, text: 'Great experience! The team was very polite and guided us...' }
  ];

  return (
    <>
      <Helmet>
        <title>Shivalik Ceramics - Premium Tile Store in Kalyan | Ceramic Tiles & Floor Tiles</title>
        <meta name="description" content="Best tile store in Kalyan (West). Premium ceramic tiles, floor tiles, wall tiles, and vitrified tiles. Wide design range with installation support. Visit our showroom today!" />
        <meta name="keywords" content="tile store in Kalyan, ceramic tiles Kalyan, floor tiles near me, wall tiles Kalyan, vitrified tiles, tile showroom Kalyan West" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center" data-testid="hero-section">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1758548157126-e4c0477f796e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBmbG9vciUyMHRpbGVzJTIwbGl2aW5nJTIwcm9vbSUyMGx1eHVyeXxlbnwwfHx8fDE3Njk1MTExOTF8MA&ixlib=rb-4.1.0&q=85')`
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/80 border border-white/20 shadow-2xl p-8 md:p-12 rounded-lg"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight" data-testid="hero-heading">
              Transform Your Space with Premium Tiles
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
              Kalyan's trusted tile showroom. Wide range of ceramic, vitrified, and designer tiles with expert installation support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                data-testid="hero-call-button"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href={`https://wa.me/91${phoneNumber}?text=Hi, I'm interested in your tiles`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white rounded-full px-8 py-4 text-lg font-medium transition-all duration-300"
                data-testid="hero-whatsapp-button"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white" data-testid="featured-categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Collections</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our premium range of tiles designed for every space in your home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden bg-white border border-slate-100 transition-all duration-300 hover:shadow-2xl ${category.span} h-80`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 text-amber-400 font-medium hover:gap-3 transition-all"
                    >
                      Explore <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              data-testid="view-all-products-button"
            >
              View All Products <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50" data-testid="why-choose-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Premium Quality', desc: 'Only the finest tiles from trusted manufacturers' },
              { title: 'Wide Range', desc: 'Classic to contemporary designs for every taste' },
              { title: 'Expert Support', desc: 'Professional installation guidance included' },
              { title: 'Best Prices', desc: 'Competitive rates with unmatched value' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-white hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-100 rounded-lg"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="text-amber-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-20 bg-white" data-testid="reviews-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-amber-500 text-amber-500" />
              ))}
              <span className="text-lg font-semibold text-slate-900 ml-2">5.0 on Google</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-slate-50 rounded-lg border border-slate-200"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4">{review.text}</p>
                <p className="font-semibold text-slate-900">{review.name}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300"
              data-testid="read-all-reviews-button"
            >
              Read All Reviews <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Visit our showroom in Kalyan or get in touch with us today for expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/showroom"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300"
                data-testid="visit-showroom-cta-button"
              >
                Visit Our Showroom <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-slate-900 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300"
                data-testid="contact-us-cta-button"
              >
                Contact Us <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;