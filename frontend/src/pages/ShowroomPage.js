import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, MessageCircle, Navigation } from 'lucide-react';

const ShowroomPage = () => {
  const phoneNumber = '9920511651';
  const address = 'Gurukrupa Apartment, Birla College Rd, near Sandeep Hotel, West, Bhoirwadi, Kalyan, Maharashtra 421301';
  const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2!2d73.1291!3d19.2403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE0JzI1LjEiTiA3M8KwMDcnNDQuOCJF!5e0!3m2!1sen!2sin!4v1234567890';

  return (
    <>
      <Helmet>
        <title>Visit Our Showroom - Shivalik Ceramics Kalyan | Tile Store Location & Timings</title>
        <meta name="description" content="Visit Shivalik Ceramics showroom in Kalyan (West). Located at Gurukrupa Apartment, Birla College Road. Get directions, timings, and contact information." />
      </Helmet>

      <div className="pt-20">
        {/* Hero */}
        <section className="relative py-20 bg-slate-900 text-white" data-testid="showroom-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Visit Our Showroom</h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Experience our premium tile collection in person. We're conveniently located in Kalyan (West)
              </p>
            </motion.div>
          </div>
        </section>

        {/* Showroom Image */}
        <section className="py-12 bg-white" data-testid="showroom-image">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1570157532493-197ccc7ef916?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBtb2Rlcm4lMjB0aWxlJTIwc2hvd3Jvb20lMjBpbnRlcmlvcnxlbnwwfHx8fDE3Njk1MTExODZ8MA&ixlib=rb-4.1.0&q=85"
                alt="Shivalik Ceramics Showroom"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-slate-50" data-testid="contact-info">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Address & Timings */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-amber-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Showroom Address</h3>
                      <p className="text-slate-600 leading-relaxed">{address}</p>
                    </div>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all mt-4"
                    data-testid="get-directions-button"
                  >
                    <Navigation size={18} />
                    Get Directions
                  </a>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">Opening Hours</h3>
                      <div className="space-y-2 text-slate-600">
                        <div className="flex justify-between">
                          <span>Monday - Saturday:</span>
                          <span className="font-semibold">9:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span className="font-semibold">10:00 AM - 6:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Us</h3>
                  <div className="space-y-4">
                    <a
                      href={`tel:${phoneNumber}`}
                      className="flex items-center justify-center gap-3 bg-green-600 text-white py-4 px-6 rounded-full font-semibold hover:bg-green-700 transition-colors"
                      data-testid="call-button"
                    >
                      <Phone size={20} />
                      Call: +91 {phoneNumber}
                    </a>
                    <a
                      href={`https://wa.me/91${phoneNumber}?text=Hi, I'd like to visit your showroom`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-green-500 text-white py-4 px-6 rounded-full font-semibold hover:bg-green-600 transition-colors"
                      data-testid="whatsapp-button"
                    >
                      <MessageCircle size={20} />
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-4 rounded-lg border border-slate-200 h-full"
              >
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px', borderRadius: '0.5rem' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shivalik Ceramics Location"
                  data-testid="google-map"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 bg-white" data-testid="what-to-expect">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">What to Expect When You Visit</h2>
              <div className="space-y-6 text-lg text-slate-600">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Warm Welcome</h3>
                    <p>Our friendly team will greet you and understand your requirements.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Showroom Tour</h3>
                    <p>Explore our extensive collection of tiles organized by type and style.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Expert Consultation</h3>
                    <p>Get personalized recommendations based on your space, budget, and preferences.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Sample Selection</h3>
                    <p>Take home samples to see how they look in your actual space.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Quote & Order</h3>
                    <p>Receive a detailed quote and place your order with our support for delivery and installation.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ShowroomPage;