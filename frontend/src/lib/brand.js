// Shared site-wide constants for Bhramanti Paradise Tours
export const BRAND = {
  name: "Bhramanti Paradise",
  tagline: "Tours & Bespoke Journeys",
  // Replace with the real numbers anytime
  whatsappNumber: "919876543210", // E.164 without '+', used in wa.me links
  phoneDisplay: "+91 98765 43210",
  phoneTel: "+919876543210",
  email: "hello@bhramantiparadise.com",
  address: "Connaught Place, New Delhi, India",
};

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Bhramanti Paradise! I'd love to plan a trip. Could you share details on your tour packages?"
);

export const waLink = (msg) =>
  `https://wa.me/${BRAND.whatsappNumber}?text=${msg || WHATSAPP_MESSAGE}`;
