import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactPage = () => {
  const phoneNumber = '9920511651';
  const address = 'Gurukrupa Apartment, Birla College Rd, near Sandeep Hotel, West, Bhoirwadi, Kalyan, Maharashtra 421301';
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await axios.post(`${API}/contact`, formData);
      setSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try calling us directly.');
      console.error('Contact form error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Shivalik Ceramics Kalyan | Get in Touch for Premium Tiles</title>
        <meta name="description" content="Contact Shivalik Ceramics for all your tile needs. Call +91 9920511651, WhatsApp, or visit our showroom in Kalyan West. Expert guidance available." />
      </Helmet>

      <div className="pt-20">
        {/* Hero */}
        <section className="relative py-20 bg-slate-900 text-white" data-testid="contact-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Have questions? We're here to help! Reach out via phone, WhatsApp, or fill out the form below.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-slate-50" data-testid="contact-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg border border-slate-200"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                
                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3" data-testid="success-message">
                    <CheckCircle className="text-green-600" size={24} />
                    <p className="text-green-800">Thank you! We'll get back to you soon.</p>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg" data-testid="error-message">
                    <p className="text-red-800">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-colors"
                      placeholder="Enter your name"
                      data-testid="contact-name-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-colors"
                      placeholder="10-digit mobile number"
                      data-testid="contact-phone-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-colors"
                      placeholder="your.email@example.com"
                      data-testid="contact-email-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-colors resize-none"
                      placeholder="Tell us about your tile requirements..."
                      data-testid="contact-message-input"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    data-testid="contact-submit-button"
                  >
                    {loading ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-white p-8 rounded-lg border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="text-green-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                        <a 
                          href={`tel:${phoneNumber}`}
                          className="text-lg text-slate-600 hover:text-amber-600 transition-colors"
                        >
                          +91 {phoneNumber}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="text-green-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">WhatsApp</h4>
                        <a 
                          href={`https://wa.me/91${phoneNumber}?text=Hi, I'm interested in your tiles`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg text-slate-600 hover:text-amber-600 transition-colors"
                        >
                          Chat with us
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-amber-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Address</h4>
                        <p className="text-slate-600 leading-relaxed">{address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Prefer Direct Contact?</h3>
                  <p className="text-slate-300 mb-6">
                    Call or message us directly for immediate assistance
                  </p>
                  <div className="space-y-3">
                    <a
                      href={`tel:${phoneNumber}`}
                      className="flex items-center justify-center gap-3 bg-green-600 text-white py-4 px-6 rounded-full font-semibold hover:bg-green-700 transition-colors"
                      data-testid="direct-call-button"
                    >
                      <Phone size={20} />
                      Call Now
                    </a>
                    <a
                      href={`https://wa.me/91${phoneNumber}?text=Hi, I'm interested in your tiles`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-green-500 text-white py-4 px-6 rounded-full font-semibold hover:bg-green-600 transition-colors"
                      data-testid="direct-whatsapp-button"
                    >
                      <MessageCircle size={20} />
                      WhatsApp Us
                    </a>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Business Hours</h4>
                  <div className="space-y-1 text-slate-700">
                    <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p>Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-white" data-testid="contact-map">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Find Us Here</h2>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2!2d73.1291!3d19.2403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE0JzI1LjEiTiA3M8KwMDcnNDQuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shivalik Ceramics Location"
                  data-testid="contact-google-map"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
