import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import ReviewsPage from './pages/ReviewsPage';
import ShowroomPage from './pages/ShowroomPage';
import ContactPage from './pages/ContactPage';
import StickyContactBar from './components/StickyContactBar';
import AdminContacts from "./pages/AdminContacts";
import AdminLogin from "./pages/AdminLogin";

import '@/App.css';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="App min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/showroom" element={<ShowroomPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin/contacts" element={<AdminContacts />} />
              <Route path="/admin/login" element={<AdminLogin />} />

            </Routes>
          </main>
          <Footer />
          <StickyContactBar />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;