import { MessageCircle } from "lucide-react";
import { waLink } from "../lib/brand";

export const FloatingWhatsApp = () => {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-whatsapp"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#128C7E] text-white shadow-2xl flex items-center justify-center hover:-translate-y-1 hover:bg-[#0e776c] transition-all"
    >
      <span className="absolute inset-0 rounded-full bg-[#128C7E] animate-ping opacity-30" />
      <MessageCircle className="relative w-6 h-6 md:w-7 md:h-7" strokeWidth={2.2} />
    </a>
  );
};

export default FloatingWhatsApp;
