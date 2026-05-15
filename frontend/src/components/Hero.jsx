import { MessageCircle, Phone, ArrowDown } from "lucide-react";
import { BRAND, waLink } from "../lib/brand";

const HERO_IMG =
  "https://images.unsplash.com/photo-1561501900-3701fa6a0864?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cmF2ZWwlMjByZXNvcnQlMjBzdW5zZXR8ZW58MHx8fHwxNzc4ODcxNzk1fDA&ixlib=rb-4.1.0&q=85";

export const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100vh] w-full overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Sunset over a luxury island resort"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-40 md:pt-44 pb-24 md:pb-32 min-h-[100vh] flex flex-col justify-center">
        <div className="max-w-3xl">
          <p
            className="overline text-[#E4D4C8] reveal"
            data-testid="hero-overline"
          >
            Bhramanti Paradise · Est. Journeys
          </p>

          <h1
            className="font-serif-display text-white mt-6 text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight reveal delay-100"
            data-testid="hero-heading"
          >
            Wander beyond
            <br />
            the <em className="italic text-[#E4D4C8]">ordinary.</em>
          </h1>

          <p
            className="mt-8 max-w-xl text-white/90 text-base sm:text-lg leading-relaxed reveal delay-200"
            data-testid="hero-subheading"
          >
            Hand-crafted itineraries to the world's most extraordinary places —
            from the still backwaters of Kerala to the lantern-lit alleys of
            Paris. Travel slower. See deeper. Come home changed.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 reveal delay-300">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-cta"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#128C7E] text-white px-8 py-4 text-base font-medium shadow-lg hover:-translate-y-1 hover:bg-[#0e776c] transition-all"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
              Start Planning on WhatsApp
            </a>
            <a
              href={`tel:${BRAND.phoneTel}`}
              data-testid="hero-call-cta"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 text-base font-medium hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" strokeWidth={2.2} />
              {BRAND.phoneDisplay}
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg reveal delay-400">
            <Stat value="12+" label="Years of journeys" />
            <Stat value="40+" label="Countries covered" />
            <Stat value="5,200+" label="Happy travelers" />
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#destinations"
          data-testid="hero-scroll-cue"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <span className="overline text-[10px]">Explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

const Stat = ({ value, label }) => (
  <div className="border-l border-white/30 pl-4">
    <div className="font-serif-display text-3xl sm:text-4xl text-white leading-none">
      {value}
    </div>
    <div className="mt-2 text-white/70 text-xs uppercase tracking-[0.18em]">
      {label}
    </div>
  </div>
);

export default Hero;
