import { MessageCircle, Phone, Mail } from "lucide-react";
import { BRAND, waLink } from "../lib/brand";

export const CTASection = () => {
  return (
    <section
      id="contact"
      data-testid="cta-section"
      className="relative bg-[#2C2A29] py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative warm wash */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#B67B50]/15 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#8C6A5D]/15 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <p className="overline text-[#E4D4C8]">Ready when you are</p>
        <h2 className="font-serif-display mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight">
          Your next journey
          <br />
          <em className="italic text-[#E4D4C8]">begins with a message.</em>
        </h2>
        <p className="mt-8 text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          No long forms. No call centers. Just a real travel designer who'll
          listen, plan, and craft a journey that's entirely yours.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="cta-whatsapp-button"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#128C7E] text-white px-8 py-4 text-base font-medium shadow-lg hover:-translate-y-1 hover:bg-[#0e776c] transition-all"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
            Chat on WhatsApp
          </a>
          <a
            href={`tel:${BRAND.phoneTel}`}
            data-testid="cta-call-button"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white px-8 py-4 text-base font-medium hover:bg-white/20 transition-all"
          >
            <Phone className="w-5 h-5" strokeWidth={2.2} />
            Call {BRAND.phoneDisplay}
          </a>
        </div>

        <div className="mt-14 inline-flex items-center gap-3 text-white/60 text-sm">
          <Mail className="w-4 h-4" />
          <a
            href={`mailto:${BRAND.email}`}
            data-testid="cta-email-link"
            className="hover:text-white transition-colors"
          >
            {BRAND.email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
