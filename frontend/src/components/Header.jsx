import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { BRAND, waLink } from "../lib/brand";

const NAV_LINKS = [
  { label: "Destinations", href: "#destinations" },
  { label: "Services", href: "#services" },
  { label: "Stories", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#FDFBF7]/80 border-b border-[#E8E3DD]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between py-4">
        <a
          href="#top"
          data-testid="brand-logo"
          className="flex items-baseline gap-2 group"
        >
          <span
            className={`font-serif-display text-2xl md:text-[28px] leading-none transition-colors ${
              scrolled ? "text-[#2C2A29]" : "text-white drop-shadow"
            }`}
          >
            Bhramanti
          </span>
          <span
            className={`font-serif-display italic text-lg md:text-xl leading-none transition-colors ${
              scrolled ? "text-[#B67B50]" : "text-[#E4D4C8] drop-shadow"
            }`}
          >
            Paradise
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-[#B67B50] ${
                scrolled ? "text-[#2C2A29]" : "text-white/95"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-whatsapp-cta"
            className="inline-flex items-center gap-2 rounded-full bg-[#128C7E] text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:-translate-y-0.5 hover:bg-[#0e776c] transition-all"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={2.2} />
            Plan via WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden p-2 rounded-full ${
            scrolled ? "text-[#2C2A29]" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden bg-[#FDFBF7] border-t border-[#E8E3DD] px-6 py-6 space-y-4"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
              className="block text-[#2C2A29] text-base font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="mobile-whatsapp-cta"
            className="inline-flex items-center gap-2 rounded-full bg-[#128C7E] text-white px-5 py-2.5 text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            Plan via WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
