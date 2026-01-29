import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Heart, Users, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Shivalik Ceramics | Premium Tile Store in Kalyan</title>
        <meta name="description" content="Learn about Shivalik Ceramics, Kalyan's trusted tile showroom. We offer premium quality tiles with exceptional customer service and installation support." />
      </Helmet>

      <div className="pt-20">
        {/* Hero */}
        <section className="relative py-20 bg-slate-900 text-white" data-testid="about-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Shivalik Ceramics</h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Your trusted partner for premium tiles in Kalyan (West), Maharashtra
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white" data-testid="our-story">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  Shivalik Ceramics has been serving the Kalyan community with premium quality tiles and exceptional customer service. Located conveniently near Birla College Road, we've become the go-to destination for homeowners, interior designers, and contractors looking for the finest tiles.
                </p>
                <p>
                  Our showroom features an extensive collection of ceramic tiles, vitrified tiles, floor tiles, wall tiles, and designer tiles from India's most trusted manufacturers. We understand that choosing the right tiles is crucial for creating your dream space, and our experienced team is here to guide you every step of the way.
                </p>
                <p>
                  What sets us apart is our commitment to quality, competitive pricing, and personalized service. We don't just sell tiles – we help you transform your vision into reality with expert design consultation and installation support.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-slate-50" data-testid="our-values">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Quality First',
                  desc: 'We source only premium tiles from trusted manufacturers, ensuring durability and beauty.'
                },
                {
                  icon: Heart,
                  title: 'Customer Focus',
                  desc: 'Your satisfaction is our priority. We listen, understand, and deliver exactly what you need.'
                },
                {
                  icon: Users,
                  title: 'Expert Guidance',
                  desc: 'Our knowledgeable team provides professional advice to help you make the right choice.'
                },
                {
                  icon: TrendingUp,
                  title: 'Best Value',
                  desc: 'Competitive pricing without compromising on quality. Great tiles at great prices.'
                }
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-8 bg-white rounded-lg border border-slate-200 hover:shadow-xl transition-shadow"
                  >
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                      <Icon className="text-amber-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600">{value.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white" data-testid="why-us-preview">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">Why Choose Shivalik Ceramics?</h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  <strong className="text-slate-900">Extensive Collection:</strong> From timeless classics to modern contemporary designs, we have tiles for every style and budget.
                </p>
                <p>
                  <strong className="text-slate-900">Expert Consultation:</strong> Our team helps you choose the perfect tiles based on your space, usage, and aesthetic preferences.
                </p>
                <p>
                  <strong className="text-slate-900">Installation Support:</strong> We provide guidance and connect you with skilled professionals for flawless installation.
                </p>
                <p>
                  <strong className="text-slate-900">Trusted Quality:</strong> All our tiles come from reputed manufacturers with proper certifications and warranties.
                </p>
                <p>
                  <strong className="text-slate-900">Local Presence:</strong> Conveniently located in Kalyan West, we're easily accessible and always ready to help.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;