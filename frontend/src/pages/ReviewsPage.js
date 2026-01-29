import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const ReviewsPage = () => {
  const reviews = [
    {
      name: 'Somesh Kushwah',
      rating: 5,
      date: 'a month ago',
      text: 'The experience was excellent!! The team was super helpful, and the tiles are top-notch. Love the designs and quality! Highly recommend for all your tile needs. 👍'
    },
    {
      name: 'Omkar Kushwah',
      rating: 5,
      date: 'a month ago',
      text: 'Best tiles at the best price! I compared with many shops but they offered the most value. Very satisfied with my purchase'
    },
    {
      name: 'Asha Kushawah',
      rating: 5,
      date: 'a month ago',
      text: 'Great experience! The team was very polite and guided us with multiple design options. Delivery was also quick. 5 stars for outstanding service!'
    },
    {
      name: 'Rajeev Kushwah',
      rating: 5,
      date: 'a month ago',
      text: 'Their tiles completely changed the look of my house! Stylish, durable, and easy to maintain. Totally worth it!'
    },
    {
      name: 'Omkar Kushwah',
      rating: 5,
      date: 'a month ago',
      text: 'Trustworthy shop with genuine products. The quality is excellent and installation support was superb. Will definitely shop again!'
    },
    {
      name: 'Omkar',
      rating: 5,
      date: 'a month ago',
      text: 'Impressive range of tiles — from modern to traditional styles. I found exactly what I wanted for my living room and kitchen. Thank you!'
    },
    {
      name: 'Yash Rathore',
      rating: 5,
      date: 'a month ago',
      badge: 'Local Guide · 44 reviews',
      text: 'Great collection and knowledgeable sales person told me patterns and designs combos , which looked great together at my home'
    },
    {
      name: 'Rajesh Kushwah',
      rating: 5,
      date: 'a month ago',
      text: 'Good varieties and customer friendly experience'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Customer Reviews - Shivalik Ceramics | 5 Star Rated Tile Store Kalyan</title>
        <meta name="description" content="Read what our customers say about Shivalik Ceramics. 5-star rated tile store in Kalyan with excellent reviews for quality, service, and value." />
      </Helmet>

      <div className="pt-20">
        {/* Hero */}
        <section className="relative py-20 bg-slate-900 text-white" data-testid="reviews-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-semibold">Google Reviews</span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={32} className="fill-amber-500 text-amber-500" />
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">What Our Customers Say</h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our satisfied customers
              </p>
              <div className="mt-6">
                <span className="text-3xl font-bold gold-accent">5.0 Rating</span>
                <span className="text-slate-300 ml-2">on Google Reviews</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 bg-slate-50" data-testid="reviews-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={`${review.name}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-xl transition-shadow"
                  data-testid={`review-card-${index}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{review.name}</h3>
                      {review.badge && (
                        <p className="text-sm text-slate-500 mt-1">{review.badge}</p>
                      )}
                    </div>
                    <Quote className="text-amber-600" size={24} />
                  </div>
                  
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 mb-3 leading-relaxed">{review.text}</p>
                  
                  <p className="text-sm text-slate-500">{review.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Reviews CTA */}
        <section className="py-20 bg-white" data-testid="google-reviews-cta">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                See More Reviews on Google
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Check out our complete collection of customer reviews and ratings on Google
              </p>
              <a
                href="https://www.google.com/search?q=shivalik+ceramics+kalyan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                data-testid="view-google-reviews-button"
              >
                View on Google
              </a>
            </motion.div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-slate-900 text-white" data-testid="trust-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Happy Customers</h2>
              <p className="text-xl text-slate-300 mb-8">
                Experience the quality and service that has earned us a perfect 5-star rating
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:9920511651"
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300"
                  data-testid="call-us-button"
                >
                  Call Us Now
                </a>
                <a
                  href="https://wa.me/919920511651?text=Hi, I'm interested in your tiles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-slate-900 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300"
                  data-testid="whatsapp-button"
                >
                  Message on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReviewsPage;