import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const StickyContactBar = () => {
  const phoneNumber = '9920511651';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg" data-testid="sticky-contact-bar">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-2 bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          data-testid="sticky-call-button"
        >
          <Phone size={20} />
          <span>Call Now</span>
        </a>
        <a
          href={`https://wa.me/91${phoneNumber}?text=Hi, I'm interested in your tiles`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          data-testid="sticky-whatsapp-button"
        >
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default StickyContactBar;