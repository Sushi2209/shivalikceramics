import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const products = [
    {
      name: 'Floor Tiles',
      description: 'Durable and stylish floor tiles perfect for living rooms, bedrooms, and high-traffic areas. Available in various sizes and finishes.',
      image: 'https://images.unsplash.com/photo-1757262798620-c2cc40cfb440?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHw0fHxtYXJibGUlMjBmbG9vciUyMHRpbGVzJTIwbGl2aW5nJTIwcm9vbSUyMGx1eHVyeXxlbnwwfHx8fDE3Njk1MTExOTF8MA&ixlib=rb-4.1.0&q=85',
      features: ['Scratch resistant', 'Easy to clean', 'Multiple sizes', 'Glossy & matte finish']
    },
    {
      name: 'Wall Tiles',
      description: 'Premium wall tiles for bathrooms, kitchens, and feature walls. Transform any space with our designer collection.',
      image: 'https://images.unsplash.com/photo-1765556556784-7656ee0a1bd8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMHdhbGwlMjB0aWxlcyUyMHRleHR1cmV8ZW58MHx8fHwxNzY5NTExMTkzfDA&ixlib=rb-4.1.0&q=85',
      features: ['Water resistant', 'Stain proof', 'Designer patterns', 'Easy maintenance']
    },
    {
      name: 'Vitrified Tiles',
      description: 'High-quality vitrified tiles with superior strength and low water absorption. Ideal for both residential and commercial spaces.',
      image: 'https://images.unsplash.com/photo-1763485956023-49c4a03283fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBiYXRocm9vbSUyMHdhbGwlMjB0aWxlcyUyMHRleHR1cmV8ZW58MHx8fHwxNzY5NTExMTkzfDA&ixlib=rb-4.1.0&q=85',
      features: ['Ultra durable', 'Low porosity', 'Frost resistant', 'Long lasting']
    },
    {
      name: 'Ceramic Tiles',
      description: 'Classic ceramic tiles offering excellent value and versatility. Perfect for walls and light-traffic floors.',
      image: 'https://images.unsplash.com/photo-1758548157126-e4c0477f796e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBmbG9vciUyMHRpbGVzJTIwbGl2aW5nJTIwcm9vbSUyMGx1eHVyeXxlbnwwfHx8fDE3Njk1MTExOTF8MA&ixlib=rb-4.1.0&q=85',
      features: ['Cost effective', 'Wide variety', 'Easy installation', 'Color fast']
    },
    {
      name: 'Designer Tiles',
      description: 'Unique designer tiles with intricate patterns and textures. Make a bold statement in your space.',
      image: 'https://images.unsplash.com/photo-1570157532493-197ccc7ef916?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBtb2Rlcm4lMjB0aWxlJTIwc2hvd3Jvb20lMjBpbnRlcmlvcnxlbnwwfHx8fDE3Njk1MTExODZ8MA&ixlib=rb-4.1.0&q=85',
      features: ['Unique patterns', 'Premium finishes', 'Artistic designs', 'Statement pieces']
    },
    {
      name: 'Bathroom Tiles',
      description: 'Specialized bathroom tiles with superior water resistance and anti-slip properties for safety and style.',
      image: 'https://images.unsplash.com/photo-1763485956023-49c4a03283fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBiYXRocm9vbSUyMHdhbGwlMjB0aWxlcyUyMHRleHR1cmV8ZW58MHx8fHwxNzY5NTExMTkzfDA&ixlib=rb-4.1.0&q=85',
      features: ['Anti-slip', 'Waterproof', 'Mold resistant', 'Spa-like finish']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Products - Premium Tiles Collection | Shivalik Ceramics Kalyan</title>
        <meta name="description" content="Browse our extensive collection of floor tiles, wall tiles, vitrified tiles, ceramic tiles, and designer tiles at Shivalik Ceramics, Kalyan." />
        <meta name="keywords" content="floor tiles, wall tiles, vitrified tiles, ceramic tiles, bathroom tiles, designer tiles, tile collection Kalyan" />
      </Helmet>

      <div className="pt-20">
        {/* Hero */}
        <section className="relative py-20 bg-slate-900 text-white" data-testid="products-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Premium Tile Collections</h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                From classic elegance to contemporary designs, discover tiles that perfectly match your vision
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-slate-50" data-testid="products-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300"
                  data-testid={`product-card-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h3>
                    <p className="text-slate-600 mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all"
                    >
                      Inquire Now <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white" data-testid="products-cta">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Need Help Choosing the Right Tiles?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our expert team is here to guide you. Visit our showroom or get in touch for personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/showroom"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  data-testid="visit-showroom-button"
                >
                  Visit Our Showroom <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300"
                  data-testid="contact-button"
                >
                  Contact Us <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductsPage;